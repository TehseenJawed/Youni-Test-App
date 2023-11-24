/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './bottomTabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContext} from '../../Context/NavigationContext';

const Stack = createStackNavigator();
const Navigation = () => {
  // Setting context API state which will be available globally
  const [navigationContext, setNavigationContext] = useState('Events');
  return (
    <NavigationContainer>
      {/* wrapping context store in this app to make it's state availability globally.*/}
      <NavigationContext.Provider
        value={{navigationContext, setNavigationContext}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="bottomTab" component={BottomTabNavigation} />
        </Stack.Navigator>
      </NavigationContext.Provider>
    </NavigationContainer>
  );
};

export default Navigation;
