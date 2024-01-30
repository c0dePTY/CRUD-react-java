import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer'; //Explicación de ./ (folder actual) y ../(folder anterior) path => https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location
import { add, close, closeOutline, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeVendor, saveVendor, searchVendors } from './VendorApi';
import Vendor from './Vendor';


/*Usamos /src/pages/Page.tsx como base para editar el componente VendorList.tsx*/
const VendorList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Vendor[]>([]); /*valor por defecto de la variable => un array vacio. El tipo de useState es un Array de la clase Vendor*/
                                                    /*typeScrit es muy restrictivo, no va a aceptar que id sea un String. Para que no nos de error, ponemos <any>*/
  const history = useHistory();//nuevo hook para manejar el history


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
  }, [history.location.pathname]);  //se actualiza el populate de la tabla cada vez que cambiamos de pag         history.location.pathname


  /*función para tomar la lista de clientes guardados en el localStorage o la API, y los cargar en la tabla IonGrid*/
  const search = async () => { 
    let result = await searchVendors();  //cargo en result un ARRAY de objetos Cliente
    setClientes(result);
  };


  const remove = async (id: string) => {
    await removeVendor(id);
    search(); //populate de nuevo la tabla 
  }

  /*cambio de pag al presionar el botón 'Agregar Cliente' => se 
  abre la pag del formulario para registrar un nuevo objeto
   Cliente*/
  const addVendor = () => {
    history.push('/page/supplier/new');
  }

  /*cambio de pag al presionar el botón de la pluma (editar) => se
   abre el mismo formulario, pero me carga los datos del cliente
    en los Inputs*/
  const editVendor = (id: string) => {        
    history.push('/page/supplier/' + id); //paso a la URL (definida en App.tsx, <Route path="/page/vendor/:id"... ) el id del objeto Cliente a editar, para redirigirnos a esa URL especifica
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

            <IonCard>
                <IonTitle>Gestión de Proveedores</IonTitle>
                <IonItem> {/*IonItem es como un contenedor div */}
                    <IonButton onClick={addVendor}  color="primary" fill="solid" slot="end" size="default"> {/*fill para el relleno del botón, slot para ponerlo a la izqda, en medio o dcha*/}
                        <IonIcon icon={add} />
                        Agregar Proveedores
                    </IonButton>
                </IonItem>
                <IonGrid className="table"> {/*IonGrid es como una tabla con rows and cols => verlo en ionic.com/componentes/IonGrid*/}
                    <IonRow>
                        <IonCol>Nombre</IonCol>
                        <IonCol>Email</IonCol>
                        <IonCol>Teléfono</IonCol>
                        <IonCol>Web</IonCol>
                        <IonCol>Acciones</IonCol>
                    </IonRow>                    

                    {clientes.map( (cliente: Vendor) => {  {/*': any' se debe a una rigidez de typeScrit => en 2:10:00 lo cambio a tipo Vendor. No olvidar el return*/}
                        return(                         
                            <IonRow>
                                <IonCol>{cliente.nombre} {cliente.nombre}</IonCol>
                                <IonCol>{cliente.email}</IonCol>
                                <IonCol>{cliente.telefono}</IonCol>
                                <IonCol>{cliente.web}</IonCol>
                                <IonCol>
                                    <IonButton onClick= {() => editVendor(String(cliente.id))} color="primary" fill="clear"> {/*typeScript me genera un error aquí diciendome que según decidimos en Vendor.ts, 'cliente.id' puede ser String ó Undefined, pero que en esta linea solo puede ser String => Solución: parsear a String */}
                                        <IonIcon icon={pencil} slot="icon-only"></IonIcon>
                                    </IonButton>
                                    <IonButton onClick= {() => remove(String(cliente.id))} color="danger" fill="clear"> {/*con una función de flecha paso como argumento el id del objeto cliente en cuestión*/}
                                        <IonIcon icon={close} slot="icon-only"></IonIcon>
                                    </IonButton>
                                </IonCol>
                            </IonRow>
                        );
                    })}


                    {/* Este el html original en duro que dinamicé justo ariba:
                    <IonRow>
                        <IonCol>Lucas Moy</IonCol>
                        <IonCol>lucasMoy@gmail.com</IonCol>
                        <IonCol>123456</IonCol>
                        <IonCol>av Paz, 86</IonCol>
                        <IonCol>
                            <IonButton color="primary" fill="clear">
                                <IonIcon icon={pencil} slot="icon-only"/>                                
                            </IonButton>
                            <IonButton color="danger" fill="clear">
                                <IonIcon icon={close} slot="icon-only" />
                            </IonButton>
                        </IonCol>
                    </IonRow>*/}
                </IonGrid>                
            </IonCard>       


      </IonContent>
    </IonPage>
  );
};

export default VendorList;
