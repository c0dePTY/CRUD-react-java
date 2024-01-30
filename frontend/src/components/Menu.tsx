import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp, people, peopleOutline } from 'ionicons/icons';
import './Menu.css';
import LogoImg from '../images/logoCodePty.png';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

/* Array donde están todos los elementos del menú, sus rutas, e iconos*/
const appPages: AppPage[] = [  //haz ctrl+click sobre AppPage[] xa ver de donde viene ese tipo
  {
    title: 'Clientes',
    url: '/page/customers',
    iosIcon: peopleOutline, /*icono en Ios*/
    mdIcon: people /*icono para android*/
  },
  {
    title: 'Empleados',
    url: '/page/employees',
    iosIcon: peopleOutline, /*icono en Ios*/
    mdIcon: people /*icono para android*/
  },
  {
    title: 'Proveedores',
    url: '/page/suppliers',
    iosIcon: peopleOutline, /*icono en Ios*/
    mdIcon: people /*icono para android*/
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          
          <IonListHeader>
              <IonImg src={LogoImg} />  {/*en esta linea, junto al import de la linea17, añado un logó*/}
          </IonListHeader>



          {/*<IonNote>hi@ionicframework.com</IonNote>*/}


          {appPages.map((appPage, index) => {                {/*.map de los array de arriba del return*/}
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>              {/*.map de los array de arriba del return*/}
          {labels.map((label, index) => (         
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
