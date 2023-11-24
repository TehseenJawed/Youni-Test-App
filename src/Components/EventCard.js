/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import CoverPoster from '../Assets/Images/cover_poster.png';
import CoverLabel from '../Assets/Images/cover_label.png';
import Entertainment from './Entertainment';
import Visitors from './Visitors';
import HearFill from '../Assets/Icons/heartfill.svg';

const EventCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image style={styles.image} source={CoverPoster} />
      <View style={styles.imageLabel}>
        <Image source={CoverLabel} />
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>Wed, Mar 29</Text>
        <View style={styles.seperator} />
        <Text style={styles.timeText}>19:00 - 20:00</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.fairgroveText}>Dinner with Fairgrove Partners</Text>
        <Entertainment />

        <View style={styles.actionContainer}>
          <Visitors card={true} />
          <HearFill style={{marginTop: 5, marginRight: 20}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: scale(320),
    height: verticalScale(475),
    marginBottom: 10,
    borderColor: '#FFF4FB',
    borderWidth: 1,
    borderRadius: 20,
    position: 'relative',
    elevation: 20,
    backgroundColor: '#040404',
    shadowColor: '#BC61F5',
  },
  image: {
    width: '93%',
    marginLeft: scale(10),
    borderRadius: 15,
  },
  imageLabel: {
    position: 'absolute',
    marginTop: verticalScale(220),
    marginLeft: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    width: scale(150),
    marginLeft: scale(14),
    marginTop: verticalScale(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    color: '#FFFFFF7A',
  },
  seperator: {
    width: 4,
    height: 4,
    backgroundColor: '#FFFFFF7A',
    borderRadius: 5,
  },
  fairgroveText: {
    fontSize: 21,
    fontWeight: '500',
    marginVertical: 5,
    color: 'white',
  },
  contentContainer: {
    marginLeft: scale(14),
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default EventCard;
