import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer'; //Explicación de ./ y ../ path => https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location
import { add, checkmark, close, closeOutline, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomerById, searchCustomers } from './CustomerApi';
import Customer from './Customer';


/*Usamos /src/pages/customer/CustomerList.tsx como base para editar este componente CustomerEdit.tsx*/
const CustomerEdit: React.FC = () => {

  const { name } = useParams<{ name: string }>(); //hook useParams ¿para pasar el parámetro ':id' al path de CustomerEdit en App.tsx? para tomar el parámetro 'id' de la url '/page/customer/id'
  const [customer, setCustomer] = useState<Customer>({}); /*valor por defecto de la variable => un objeto vacio*/
                                                    /*typeScrit es muy restrictivo, no va a aceptar que id sea un String. Para que no nos de error, ponemos <any>*/
  const history = useHistory(); //una vez guarde un nuevo cliente, me redirijo a la pag del listado de clientes u otras pag según desee.

  const routeMatch: any = useRouteMatch("/page/customer/:id"); //nuevo hook
  const id = routeMatch?.params?.id;  //solo toma el id de la URL

  /*¿Cuándo se lanza la función search() de abajo?
  Lo primero que se ha de hacer cuando se abra la pág de CustomerList.tsx
  es cargarse el listado de clientes => por ello empleamos el hook useEffect()*/ 
  /* RECUERDA: cada vez que se se modifica el valor de las variables (con 
    setVariable) que están dentro del [], se ejecutará la función de flecha que hay 
  dentro de useEffect(). Si no hay variables dentro del [], la función de
  flecha que hay dentro de useEffet() solo se ejecutará una vez al 
  inicio de cargar la pág CustomerList.tsx*/  
  useEffect( () => {     
    search();
  }, [history.location.pathname]);   //explicación en min 4:01:48 => Se vuelve a cargarse los datos en los campos (llamando a la función search() de CustomerEdit.tsx) al cambiar la URL. parece que se ha refrescado la pantalla


  /*función para, en caso de querer editar un Customer existente, que se carguen sus datos en el formulario*/
  const search = async () => {        
    if(id === 'new'){   
      setCustomer({});  // {}objeto vacio
    } else {    //si el 'id' de la url de esta pág no es 'new'...es porque quiero editar un objeto Customer ya existente => lo busco en el array para mostrarlo en el formulario y editarlo.
      let result = await searchCustomerById(id);  // #10. ponemos 'await' + 'async' ya que ahora la función es asyncrónica
        setCustomer(result);
    }
  }


  //función para guardar un cliente nuevo (con Customer.id nueevo) o editar uno antiguo (manteniendo su Customer.id existente).
  const save = async () => {    
    await saveCustomer(customer);
    history.push('/page/customers'); //una vez guardado un nuevo cliente, nos redirgimos a la pag del listado de clientes
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

            <IonContent>
                <IonCard>
                    <IonTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente' }</IonTitle>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                {/*Pre-rellenado de los inputs con value={customer.nombre}.
                                Si escribo en el Input, se procude un evento 'e' que capta el valor del Input (e.detail.value). Todo ello lo meto dentro de 'customer.nombre'*/}
                                <IonInput label="Nombre" 
                                onIonChange={ e => customer.nombre = String(e.detail.value) }  //en el minuto 02:14:42, typeScript nos marca un error diciendo que 'customer.nombre' le indicamos en Customer.ts que podría ser de tipo String ó Undefined, pero que 'e.detail.value' puede ser String/Undefined ó NULL => solución: parseamos 'e.detail.value' a un tipo String.
                                value={customer.nombre} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonInput label="Apellido" 
                                onIonChange={ e => customer.apellido = String(e.detail.value) }
                                value={customer.apellido} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonInput label="Email" 
                                onIonChange={ e => customer.email = String(e.detail.value) }
                                value={customer.email} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonInput label="Dirección" 
                                onIonChange={ e => customer.direccion = String(e.detail.value) }
                                value={customer.direccion} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonInput label="Teléfono" 
                                onIonChange={ e => customer.telefono = String(e.detail.value) }
                                value={customer.telefono} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>

                        </IonCol>
                    </IonRow>




                    <IonItem> {/*IonItem es como un contenedor div */}
                        <IonButton onClick={save} color="success" fill="solid" slot="end" size="default"> {/*fill para el relleno del botón, slot para ponerlo a la izqda, en medio o dcha*/}
                            <IonIcon icon={checkmark} />
                            Guardar
                        </IonButton>
                    </IonItem>
                    {/*<aquiEstabaLaTabla></aquiEstabaLaTabla>*/}
                
                </IonCard>
            </IonContent>





        


      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;
