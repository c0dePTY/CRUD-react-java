import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer'; //Explicación de ./ y ../ path => https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location
import { add, checkmark, close, closeOutline, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeVendor, saveVendor, searchVendorById, searchVendors } from './VendorApi';
import Vendor from './Vendor';


/*Usamos /src/pages/vendor/VendorList.tsx como base para editar este componente VendorEdit.tsx*/
const VendorEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>(); //hook useParams ¿para pasar el parámetro ':id' al path de VendorEdit en App.tsx? para tomar el parámetro 'id' de la url '/page/vendor/id'y usarlo en este componente (VendorEdit.tsx)
  const [vendor, setVendor] = useState<Vendor>({}); /*valor por defecto de la variable => un objeto vacio*/
                                                    /*typeScrit es muy restrictivo, no va a aceptar que id sea un String. Para que no nos de error, ponemos <any>*/
  const history = useHistory(); //una vez guarde un nuevo cliente, me redirijo a la pag del listado de clientes u otras pag según desee.


  const routeMatch: any = useRouteMatch("/page/supplier/:id"); //nuevo hook
  const id = routeMatch?.params?.id;


  /*¿Cuándo se lanza la función search() de abajo?
  Lo primero que se ha de hacer cuando se abra la pág de VendorList.tsx
  es cargarse el listado de clientes => por ello empleamos el hook useEffect()*/ 
  /* RECUERDA: cada vez que se se modifica el valor de las variables (con 
    setVariable) que están dentro del [], se ejecutará la función de flecha que hay 
  dentro de useEffect(). Si no hay variables dentro del [], la función de
  flecha que hay dentro de useEffet() solo se ejecutará una vez al 
  inicio de cargar la pág VendorList.tsx*/  
  useEffect( () => {     
    search();
  }, [history.location.pathname]);  


  /*función para, en caso de querer editar un Vendor existente, que se carguen sus datos en el formulario*/
  const search = async () => {    
    if(id === 'new'){   //si el 'id' de la url de esta pág no es 'new'...es porque quiero editar un objeto Vendor ya existente => lo busco en el array para mostrarlo en el formulario y editarlo.
      setVendor({});    
    } else {  
      let result = await searchVendorById(id); 
        setVendor(result);
    }
  }


  //función para guardar un cliente nuevo (con Vendor.id nueevo) o editar uno antiguo (manteniendo su Vendor.id existente).
  const save = async () => {    
    await saveVendor(vendor);
    history.push('/page/suppliers'); //una vez guardado un nuevo cliente, nos redirgimos a la pag del listado de clientes
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
                    <IonTitle>{id === 'new' ? 'Agregar Proveedor' : 'Editar Proveedor' }</IonTitle>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                {/*Pre-rellenado de los inputs con value={vendor.nombre}.
                                Si escribo en el Input, se produce un evento 'e' que capta el valor del Input (e.detail.value). Todo ello lo meto dentro de 'vendor.nombre'*/}
                                <IonInput label="Nombre" 
                                onIonChange={ e => vendor.nombre = String(e.detail.value) }  //en el minuto 02:14:42, typeScript nos marca un error diciendo que 'vendor.nombre' le indicamos en Vendor.ts que podría ser de tipo String ó Undefined, pero que 'e.detail.value' puede ser String/Undefined ó NULL => solución: parseamos 'e.detail.value' a un tipo String.
                                value={vendor.nombre} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonInput label="Contacto" 
                                onIonChange={ e => vendor.contacto = String(e.detail.value) }
                                value={vendor.contacto} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonInput label="Email" 
                                onIonChange={ e => vendor.email = String(e.detail.value) }
                                value={vendor.email} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonInput label="Dirección" 
                                onIonChange={ e => vendor.direccion = String(e.detail.value) }
                                value={vendor.direccion} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonInput label="Teléfono" 
                                onIonChange={ e => vendor.telefono = String(e.detail.value) }
                                value={vendor.telefono} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>                 

                        <IonCol>
                            <IonItem>
                                <IonInput label="Web" 
                                onIonChange={ e => vendor.web = String(e.detail.value) }
                                value={vendor.web} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
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

export default VendorEdit;
