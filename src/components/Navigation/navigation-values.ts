import {ComponentType} from 'react';
import {DetailsScreen, HomeScreen} from '../../../App';
import {Authorization} from '../../screens/Authorization/Authorization';
import {Registration} from '../../screens/Registration/Registration';

type NavigationItem = {
    component: ComponentType<any>;
    route: string;
    options?: object;
};

export const navigationArray: NavigationItem[] = [
  {
    component: HomeScreen,
    route: 'Home',
    options: { headerShown: false },
  },
  {
    component: DetailsScreen,
    route: 'Details',
    options: { headerShown: false },
  },
  {
    component: Authorization,
    route: 'Auth',
    options: { headerShown: false },
  },
  {
    component: Registration,
    route: 'Registration',
  },
];
