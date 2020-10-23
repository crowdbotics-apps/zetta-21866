import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings157255Navigator from '../features/Settings157255/navigator';
import Maps157235Navigator from '../features/Maps157235/navigator';
import Add-Item157234Navigator from '../features/Add-Item157234/navigator';
import Maps157230Navigator from '../features/Maps157230/navigator';
import UserProfile157226Navigator from '../features/UserProfile157226/navigator';
import Maps157186Navigator from '../features/Maps157186/navigator';
import Add-Item157185Navigator from '../features/Add-Item157185/navigator';
import Maps157181Navigator from '../features/Maps157181/navigator';
import UserProfile157177Navigator from '../features/UserProfile157177/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings157255: { screen: Settings157255Navigator },
Maps157235: { screen: Maps157235Navigator },
Add-Item157234: { screen: Add-Item157234Navigator },
Maps157230: { screen: Maps157230Navigator },
UserProfile157226: { screen: UserProfile157226Navigator },
Maps157186: { screen: Maps157186Navigator },
Add-Item157185: { screen: Add-Item157185Navigator },
Maps157181: { screen: Maps157181Navigator },
UserProfile157177: { screen: UserProfile157177Navigator },

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
