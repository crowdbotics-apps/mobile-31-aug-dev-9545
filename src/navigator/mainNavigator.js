import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen210397Navigator from '../features/BlankScreen210397/navigator';
import BlankScreen110393Navigator from '../features/BlankScreen110393/navigator';
import BlankScreen010379Navigator from '../features/BlankScreen010379/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen210397: { screen: BlankScreen210397Navigator },
BlankScreen110393: { screen: BlankScreen110393Navigator },
BlankScreen010379: { screen: BlankScreen010379Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
