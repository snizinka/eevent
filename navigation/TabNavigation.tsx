import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from "../screens/ProfileScreen.tsx";
import AddEventScreen from '../screens/AddEvent.tsx';

export type RootTabParamList = {
    Home: undefined;
    Tickets: undefined;
    Favorites: undefined;
    Notifications: undefined;
    Profile: undefined;
  };

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} options={{}} />
            <Tab.Screen name='Tickets' component={AddEventScreen} options={{}} />
            <Tab.Screen name='Favorites' component={HomeScreen} options={{}} />
            <Tab.Screen name='Notifications' component={HomeScreen} options={{}} />
            <Tab.Screen name='Profile' component={ProfileScreen} options={{}} />
        </Tab.Navigator>
    );
}
