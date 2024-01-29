import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import StackNavigation from './StackNavigation';

export default function Navigation({isAuthenticated, loading} : {isAuthenticated: boolean, loading: boolean}) {
  if (!loading && isAuthenticated) {
    return (
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    );
  }
  
  if (!loading && !isAuthenticated) {
    return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    );
  }
}