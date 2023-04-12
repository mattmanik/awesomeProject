import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/home-screen';

const screens = {
  Home: {
    screen: HomeScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
