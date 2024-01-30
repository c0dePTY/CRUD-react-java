import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter, IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import CustomerList from './pages/customer/CustomerList'
import CustomerEdit from './pages/customer/CustomerEdit'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import EmployeeEdit from './pages/employee/EmployeeEdit';
import EmployeeList from './pages/employee/EmployeeList';
import VendorEdit from './pages/vendor/VendorEdit';
import VendorList from './pages/vendor/VendorList';

setupIonicReact();

const App: React.FC = () => {   //.FC es un tipo que significa Function Component. Recuerda la importancia del tipado si usamos TypeScript. Hemos de escribir este tipo si estamos definiendo una función (App) que retorna un React Component 
  /*<Ion..> son componentes de ionic. Aquí se van a manejar las rutas del proyecto*/  
  return (
    <IonApp>
      <IonReactHashRouter>    {/*Añado Hash para emplear rutas no absolutas. Min 4:12:00*/}
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">

            <Route path="/" exact={true}>
              <Redirect to="/folder/Inbox" />
            </Route>

            <Route path="/folder/:name" exact={true}>
              <Page />
            </Route>

            <Route path="/page/customers" exact={true}>
              <CustomerList />
            </Route>

            <Route path="/page/customer/:id" exact={true}> {/*este path recibirá el parámetro 'id' de parte de ¿CustomerEdit.tsx a través de su hook 'useParams'? CustomerList.tsx a través de su función editCustomer(id: string) */}
              <CustomerEdit />
            </Route>

            <Route path="/page/employees" exact={true}>
              <EmployeeList />
            </Route>

            <Route path="/page/employee/:id" exact={true}> {/*este path recibirá el parámetro 'id' de parte de ¿CustomerEdit.tsx a través de su hook 'useParams'? CustomerList.tsx a través de su función editCustomer(id: string) */}
              <EmployeeEdit />
            </Route>

            <Route path="/page/suppliers" exact={true}>
              <VendorList />
            </Route>

            <Route path="/page/supplier/:id" exact={true}> {/*este path recibirá el parámetro 'id' de parte de ¿CustomerEdit.tsx a través de su hook 'useParams'? CustomerList.tsx a través de su función editCustomer(id: string) */}
              <VendorEdit />
            </Route>

          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
