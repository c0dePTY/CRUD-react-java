import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer'; //Explicación de ./ y ../ path => https://stackoverflow.com/questions/7591240/what-does-dot-slash-refer-to-in-terms-of-an-html-file-path-location
import { add, checkmark, close, closeOutline, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmployee, saveEmployee, searchEmployeeById, searchEmployees } from './EmployeeApi';
import Employee from './Employee';


/*Usamos /src/pages/employee/EmployeeList.tsx como base para editar este componente EmployeeEdit.tsx*/
const EmployeeEdit: React.FC = () => {

  const { name } = useParams<{ name: string; }>(); //hook useParams ¿para pasar el parámetro ':id' al path de EmployeeEdit en App.tsx? para tomar el parámetro 'id' de la url '/page/employee/id'
  const [employee, setEmployee] = useState<Employee>({}); /*valor por defecto de la variable => un objeto vacio*/
                                                    /*typeScrit es muy restrictivo, no va a aceptar que id sea un String. Para que no nos de error, ponemos <any>*/
  const history = useHistory(); //una vez guarde un nuevo cliente, me redirijo a la pag del listado de clientes u otras pag según desee.

  const routeMatch: any = useRouteMatch("/page/employee/:id"); //nuevo hook
  const id = routeMatch?.params?.id;

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
  }, [history.location.pathname]);  


  /*función para, en caso de querer editar un Employee existente, que se carguen sus datos en el formulario*/
  const search = async () => {    
    if(id === 'new'){   //si el 'id' de la url de esta pág no es 'new'...es porque quiero editar un objeto Employee ya existente => lo busco en el array para mostrarlo en el formulario y editarlo.
      setEmployee({});  //{} es un objeto vacio    
    } else {  
      let result = await searchEmployeeById(id); 
        setEmployee(result);
    }
  }


  //función para guardar un cliente nuevo (con Employee.id nueevo) o editar uno antiguo (manteniendo su Employee.id existente).
  const save = async () => {    
    await saveEmployee(employee);
    history.push('/page/employees'); //una vez guardado un nuevo cliente, nos redirgimos a la pag del listado de clientes
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
                    <IonTitle>{id === 'new' ? 'Agregar Empleado' : 'Editar Empleado' }</IonTitle>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                {/*Pre-rellenado de los inputs con value={employee.nombre}.
                                Si escribo en el Input, se procude un evento 'e' que capta el valor del Input (e.detail.value). Todo ello lo meto dentro de 'employee.nombre'*/}
                                <IonInput label="Nombre" 
                                onIonChange={ e => employee.nombre = String(e.detail.value) }  //en el minuto 02:14:42, typeScript nos marca un error diciendo que 'employee.nombre' le indicamos en Employee.ts que podría ser de tipo String ó Undefined, pero que 'e.detail.value' puede ser String/Undefined ó NULL => solución: parseamos 'e.detail.value' a un tipo String.
                                value={employee.nombre} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonInput label="Apellido" 
                                onIonChange={ e => employee.apellido = String(e.detail.value) }
                                value={employee.apellido} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonInput label="Email" 
                                onIonChange={ e => employee.email = String(e.detail.value) }
                                value={employee.email} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                            <IonItem>
                                <IonInput label="Dirección" 
                                onIonChange={ e => employee.direccion = String(e.detail.value) }
                                value={employee.direccion} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonInput label="Teléfono" 
                                onIonChange={ e => employee.telefono = String(e.detail.value) }
                                value={employee.telefono} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
                            </IonItem>
                        </IonCol>

                        <IonCol>
                        <IonItem>
                            <IonInput label="Salario" 
                                onIonChange={ e => employee.salario = Number(e.detail.value) }
                                value={employee.salario} labelPlacement="stacked" placeholder="Incluye mayúsculas"></IonInput>
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

export default EmployeeEdit;
