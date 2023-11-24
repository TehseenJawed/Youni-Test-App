/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import EventCard from '../../Components/EventCard';
import {useContext} from 'react';
import {NavigationContext} from '../../Context/NavigationContext';

const EventScreen = ({navigation}) => {
  const [load, setLoad] = useState(true);
  const {setNavigationContext} = useContext(NavigationContext);
  // onPressCard function is to navigate to the Home screen when it will be called.
  const onPressCard = () => {
    setNavigationContext('Home');
    navigation.navigate('Home');
  };
  // to make a loading effect for 300ms I have used setTimeout.
  setTimeout(() => {
    setLoad(false);
  }, 300);
  return (
    <View style={styles.eventContainer}>
      {/* Load is a flag which shows Loading text or a loader when its value will be true. */}
      {load ? (
        <View style={styles.loaderContainer}>
          <Text style={styles.loaderText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          {/* EventCard is a reusable component of Event cards */}
          <EventCard onPress={onPressCard} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardContainer: {
    marginTop: 50,
  },
  loaderContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    color: '#fff',
    fontSize: 20,
  },
});
export default EventScreen;
