import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer'; //Explicación de ./ y ../ path => https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location
import { add, close, closeOutline, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmployee, saveEmployee, searchEmployees } from './EmployeeApi';
import Employee from './Employee';


/*Usamos /src/pages/Page.tsx como base para editar el componente EmployeeList.tsx*/
const EmployeeList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<Employee[]>([]); /*valor por defecto de la variable => un array vacio. El tipo de useState es un Array de la clase Employee*/
                                                    /*typeScrit es muy restrictivo, no va a aceptar que id sea un String. Para que no nos de error, ponemos <any>*/
  const history = useHistory();//nuevo hook para manejar el history


  /*¿Cuándo se lanza la función search() de abajo?
  Lo primero que se ha de hacer cuando se abra la pág de EmployeeList.tsx
  es cargarse el listado de clientes => por ello empleamos el hook useEffect()*/ 
  /* RECUERDA: cada vez que se se modifica el valor de las variables (con 
    setVariable) que están dentro del [], se ejecutará la función de flecha que hay 
  dentro de useEffect(). Si no hay variables dentro del [], la función de
  flecha que hay dentro de useEffet() solo se ejecutará una vez al 
  inicio de cargar la pág EmployeeList.tsx*/  
  useEffect( () => {
    search();
  }, [history.location.pathname]);  //se actualiza el populate de la tabla cada vez que cambiamos de pag         history.location.pathname


  /*función para tomar la lista de clientes guardados en el localStorage o la API, y los cargar en la tabla IonGrid*/
  const search = async () => { 
    let result = await searchEmployees();  //cargo en result un ARRAY de objetos Cliente
    setClientes(result);
  };


  const remove = async (id: string) => {
    await removeEmployee(id);
    search(); //populate de nuevo la tabla 
  }

  /*cambio de pag al presionar el botón 'Agregar Cliente' => se 
  abre la pag del formulario para registrar un nuevo objeto
   Cliente*/
  const addEmployee = () => {
    history.push('/page/employee/new');
  }

  /*cambio de pag al presionar el botón de la pluma (editar) => se
   abre el mismo formulario, pero me carga los datos del cliente
    en los Inputs*/
  const editEmployee = (id: string) => {        
    history.push('/page/employee/' + id); //paso por la URL el id del objeto Cliente a editar
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
                <IonTitle>Gestión de Empleados</IonTitle>
                <IonItem> {/*IonItem es como un contenedor div */}
                    <IonButton onClick={addEmployee}  color="primary" fill="solid" slot="end" size="default"> {/*fill para el relleno del botón, slot para ponerlo a la izqda, en medio o dcha*/}
                        <IonIcon icon={add} />
                        Agregar Empleados
                    </IonButton>
                </IonItem>
                <IonGrid className="table"> {/*IonGrid es como una tabla con rows and cols => verlo en ionic.com/componentes/IonGrid*/}
                    <IonRow>
                        <IonCol>Nombre</IonCol>
                        <IonCol>Email</IonCol>
                        <IonCol>Teléfono</IonCol>
                        <IonCol>Dirección</IonCol>
                        <IonCol>Acciones</IonCol>
                    </IonRow>                    

                    {clientes.map( (cliente: Employee) => {  {/*': any' se debe a una rigidez de typeScrit => en 2:10:00 lo cambio a tipo Employee. No olvidar el return*/}
                        return(                         
                            <IonRow>
                                <IonCol>{cliente.nombre} {cliente.apellido}</IonCol>
                                <IonCol>{cliente.email}</IonCol>
                                <IonCol>{cliente.telefono}</IonCol>
                                <IonCol>{cliente.direccion}</IonCol>
                                <IonCol>
                                    <IonButton onClick= {() => editEmployee(String(cliente.id))} color="primary" fill="clear"> {/*typeScript me genera un error aquí diciendome que según decidimos en Employee.ts, 'cliente.id' puede ser String ó Undefined, pero que en esta linea solo puede ser String => Solución: parsear a String */}
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

export default EmployeeList;
