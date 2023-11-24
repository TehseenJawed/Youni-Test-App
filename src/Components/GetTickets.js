/* eslint-disable react/react-in-jsx-scope */
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import CalendarIcon from '../Assets/Icons/calendar_icon.svg';

const GetTickets = ({bookEvent}) => {
  return (
    <View style={styles.ticketsContainer}>
      <TouchableOpacity style={styles.calendarOption} onPress={bookEvent}>
        <CalendarIcon width={25} height={25} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.getTickets}>
        <Text style={styles.getTicketText}>Get tickets</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketsContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  calendarOption: {
    borderWidth: 1,
    borderColor: '#BC61F5',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  getTickets: {
    backgroundColor: '#BC61F5',
    borderRadius: 10,
    width: scale(265),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  getTicketText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default GetTickets;
