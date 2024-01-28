import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} options={{}} />
            <Tab.Screen name='Tickets' component={HomeScreen} options={{}} />
            <Tab.Screen name='Favorites' component={HomeScreen} options={{}} />
            <Tab.Screen name='Notifications' component={HomeScreen} options={{}} />
            <Tab.Screen name='Profile' component={HomeScreen} options={{}} />
        </Tab.Navigator>
    );
}