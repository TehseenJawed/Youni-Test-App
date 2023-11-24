/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable react/no-unstable-nested-components */
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/Home/Home';
import {View} from 'react-native';
import LocationActiveIcon from '../../Assets/Icons/NavigationIcons/location_active_icon.svg';
import LocationIcon from '../../Assets/Icons/NavigationIcons/location_icon.svg';
import ParentIcon from '../../Assets/Icons/NavigationIcons/parent_icon.svg';
import ProfileIcon from '../../Assets/Icons/NavigationIcons/profile_icon.svg';
import TicketIcon from '../../Assets/Icons/NavigationIcons/ticket_icon.svg';
import HomeIcon from '../../Assets/Icons/NavigationIcons/home_icon.svg';
import HomeActiveIcon from '../../Assets/Icons/NavigationIcons/home_active_icon.svg';
import Layout from '../../Components/Layout';
import EventScreen from '../../Screens/Events/Event';
import {NavigationContext} from '../../Context/NavigationContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();
function BottomTabNavigation() {
  const {navigationContext, setNavigationContext} =
    useContext(NavigationContext);

  const changeScreen = screen => {
    setNavigationContext(screen);
  };
  return (
    <Tab.Navigator
      initialRouteName="Auction"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      screenOptions={({route}) => ({
        header: () => {
          return (
            <View
              style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}></View>
          );
        },
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#040404',
          padding: 5,
          height: 50,
          // borderTopRightRadius: 25,
          // borderTopLeftRadius: 25,
        },
        tabBarIcon: ({}) => {
          if (route.name == 'Home') {
            return (
              <TouchableOpacity onPress={() => changeScreen('Home')}>
                {navigationContext === 'Home' ? (
                  <HomeActiveIcon width={25} height={25} />
                ) : (
                  <HomeIcon width={25} height={25} />
                )}
              </TouchableOpacity>
            );
          } else if (route.name == 'Parent') {
            return (
              <>
                <ParentIcon width={30} height={25} />
              </>
            );
          } else if (route.name == 'Events') {
            return (
              <TouchableOpacity onPress={() => changeScreen('Events')}>
                {navigationContext === 'Events' ? (
                  <LocationActiveIcon width={25} height={25} />
                ) : (
                  <LocationIcon width={25} height={25} />
                )}
              </TouchableOpacity>
            );
          } else if (route.name == 'Profile') {
            return (
              <>
                <ProfileIcon width={25} height={25} />
              </>
            );
          } else if (route.name == 'Ticket') {
            return (
              <>
                <TicketIcon width={25} height={25} />
              </>
            );
          }
          return <View />;
        },
      })}
      barStyle={{backgroundColor: '#040404'}}
      tabBarOptions={{
        color: '#040404',
        labelStyle: {fontSize: 15},
        activeTintColor: '#BDBDBD',
        keyboardHidesTabBar: true,
        inactiveTintColor: '#040404',
      }}>
      <Tab.Screen
        name="Events"
        component={props => (
          <Layout {...props}>
            <EventScreen {...props} />
          </Layout>
        )}
      />
      <Tab.Screen name="Parent" component={HomeScreen} />
      <Tab.Screen
        name="Home"
        component={props => (
          <Layout {...props}>
            <HomeScreen {...props} />
          </Layout>
        )}
      />
      <Tab.Screen name="Ticket" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
