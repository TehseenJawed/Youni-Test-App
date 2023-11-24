/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import CoverImage from '../../Assets/Images/cover_poster_home.png';
import GetTickets from '../../Components/GetTickets';
import SideHeadings from '../../Components/SideHeadings';
import DirectionIcon from '../../Assets/Icons/direction.svg';
import Visitors from '../../Components/Visitors';
import {verticalScale} from 'react-native-size-matters';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const HomeScreen = () => {
  const [readMore, setReadMore] = useState(false);
  const [load, setLoad] = useState(true);
  const [DateAndTime, setDateAndTime] = useState(false);
  const categories = ['🎻 Art & Music', '⚽️  Sport', '🎬 Movie'];

  const hideDateEvent = () => {
    setDateAndTime(false);
  };
  // setDateEvent function to open a Google Map
  const setDateEvent = date => {
    Alert.alert(`The date is set to ${date}`);
    setDateAndTime(false);
  };

  // handle function to open a Google Map
  const handleGetDirections = () => {
    const address =
      'Museum of Natural History University Of Oxford,  Pitt Rivers Museum OX1 3PP'; // this address can be change
    const encodedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    Linking.openURL(mapsUrl).catch(err =>
      console.error('Error opening Google Maps:', err),
    );
  };

  // handle function to book an event.
  const handleBookEvent = async () => {
    // make an object with the same keys to book any new event.
    const eventConfig = {
      title: 'Your Event Title',
      startDate: '2023-03-29T15:00:00.000Z',
      endDate: '2023-03-30T16:00:00.000Z',
      location: 'Event Location',
      notes: 'Event Description',
    };
    AddCalendarEvent.presentEventCreatingDialog(eventConfig)
      .then(eventInfo => {
        console.warn(JSON.stringify(eventInfo));
      })
      .catch(error => {
        // handle error such as when user rejected permissions
        console.warn(error);
      });
  };

  useEffect(() => {
    // to make a loading effect for 300ms I have used setTimeout.
    setTimeout(() => {
      setLoad(false);
    }, 300);
  }, []);
  return (
    <View>
      {/* It is a date time picker mode to set a customize date */}
      <DateTimePickerModal
        isVisible={DateAndTime}
        mode="date"
        onConfirm={setDateEvent}
        onCancel={hideDateEvent}
      />

      {load ? ( //loading condition initialized
        <View style={styles.loaderContainer}>
          <Text style={styles.loaderText}>Loading...</Text>
        </View>
      ) : (
        //this will execute once the loading status will end
        <ScrollView>
          <View>
            <Image style={styles.coverImage} source={CoverImage} />
          </View>
          <View style={styles.layout}>
            <View style={styles.homeLayout}>
              <TouchableOpacity style={styles.eventTag}>
                <Text style={styles.eventTagText}>LIVE EVENT</Text>
              </TouchableOpacity>
            </View>
            <View style={{...styles.homeLayout, marginTop: 40}}>
              <TouchableOpacity style={styles.eventPriceTag}>
                <Text style={styles.eventTagText}>FROM £ 25.00</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.fairgroveText}>
              Dinner with Fairgrove Partners
            </Text>
            <Text style={styles.fairgroveDesc}>
              Join us for an unforgettable evening of fine dining and networking
              {readMore // this functionality will help in expanding and compressing with the help of readMore text.
                ? ' as we gather to celebrate innovation, collaboration, and the spirit of community. Immerse yourself in an atmosphere of elegance and culinary delights as we share ideas, forge new connections, and engage in meaningful conversations. Our event promises to be a feast for the senses, featuring exquisite cuisine, captivating discussions, and an ambiance that fosters the building of lasting professional relationships. Whether you re a seasoned industry expert or a rising star, this evening provides a unique opportunity to connect with like-minded individuals, exchange insights, and lay the foundation for future collaborations. Come, be a part of this extraordinary occasion where great minds converge, and the possibilities for growth and success are boundless.'
                : '... '}
              {readMore && (
                <TouchableOpacity
                  style={styles.readmore}
                  onPress={() => setReadMore(!readMore)}>
                  <Text style={styles.fairgroveReadmore}>
                    Read {readMore ? 'Less' : 'More'}{' '}
                  </Text>
                </TouchableOpacity>
              )}
            </Text>
            {!readMore && (
              <TouchableOpacity
                style={styles.readmore}
                onPress={() => setReadMore(!readMore)}>
                <Text style={styles.fairgroveReadmore}>
                  Read {readMore ? 'Less' : 'More'}{' '}
                </Text>
              </TouchableOpacity>
            )}
            <SideHeadings heading={"Who's going"} />
            <Visitors />
            <SideHeadings heading={'Categories'} />
            <View style={styles.categoryItems}>
              {categories.map((v, i) => (
                <TouchableOpacity key={i} style={styles.categoryItem}>
                  {/* this will help to display category text which is available in categories[] array */}
                  <Text style={styles.candidateQuantityText}>{v}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {/* handleBookEvent event will open a create event page in the mobile calender with the same data and time in which this event will perform */}
            <GetTickets bookEvent={handleBookEvent} />

            <SideHeadings heading={'Date & Time'} />
            <TouchableOpacity
              style={styles.dateContainer}
              onPress={() => setDateAndTime(true)}>
              <Text style={styles.dateTimeText}>Wed, Mar 29-Mar 30</Text>
              <View style={styles.seperator} />
              <Text style={styles.dateTimeText}>19:00 - 20:00</Text>
            </TouchableOpacity>

            <SideHeadings heading={'Location'} />
            <View>
              <Text style={styles.addressText}>Museum of Natural History</Text>
              <Text style={styles.addressText}>
                University of Oxford, Pitt Rivers Museum
              </Text>
              <Text style={styles.addressText}>OX1 3PP</Text>
            </View>
            {/* handleGetDirections is a function which opens Google map with the location where this event will happen */}
            <TouchableOpacity
              style={styles.directionButton}
              onPress={handleGetDirections}>
              <DirectionIcon width={17} height={17} />
              <Text style={styles.getDirection}>Get directions</Text>
            </TouchableOpacity>

            <SideHeadings heading={'Organised by'} />
            <View style={styles.organizedContainer}>
              <View style={styles.investorImage}></View>
              <View style={styles.investorContent}>
                <Text style={styles.investorHeading}>
                  Oxford Women in Business
                </Text>
                <TouchableOpacity style={styles.followTag}>
                  <Text
                    style={{
                      ...styles.eventTagText,
                      fontSize: 15,
                      fontWeight: '600',
                    }}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: verticalScale(450),
    resizeMode: 'contain',
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
  homeLayout: {
    flexDirection: 'row',
    marginTop: verticalScale(-90),
  },
  eventTag: {
    backgroundColor: '#41BF46',
    paddingVertical: 6,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  eventPriceTag: {
    backgroundColor: '#BC61F5',
    paddingVertical: 6,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  layout: {
    marginLeft: 20,
    width: '90%',
  },
  eventTagText: {
    color: '#fff',
    fontSize: 15,
  },
  fairgroveText: {
    fontSize: 25,
    marginTop: 10,
    color: 'white',
  },
  fairgroveDesc: {
    fontSize: 16,
    marginTop: 5,
    color: '#888888',
    // margin: 60,
    lineHeight: 20,
  },
  readmore: {
    marginLeft: 125,
    marginTop: -22,
  },
  fairgroveReadmore: {
    fontSize: 16,
    color: '#BC61F5',
  },
  sideHeadingText: {
    fontSize: 18,
    color: '#fff',
  },
  sideHeading: {
    borderLeftColor: '#BC61F5',
    borderLeftWidth: 7,
    paddingLeft: 12,
    marginLeft: -20,
    marginVertical: 15,
  },
  candidateContainer: {
    backgroundColor: '#BC61F5BF',
    flexDirection: 'row',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  candidateQuantityText: {
    color: '#fff',
    fontSize: 16,
  },
  categoryItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#454545',
    borderRadius: 20,
  },
  dateTimeText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
  },
  seperator: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#454545',
    marginHorizontal: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 15,
    color: '#fff',
    marginVertical: 1,
  },
  directionButton: {
    flexDirection: 'row',
    width: 150,
    alignItems: 'center',
    marginVertical: 10,
  },
  getDirection: {
    color: '#BC61F5',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 8,
  },
  organizedContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  investorImage: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  investorHeading: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  investorContent: {
    width: '50%',
    marginLeft: 15,
  },
  followTag: {
    width: 80,
    height: 35,
    marginTop: 10,
    backgroundColor: '#BC61F5',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
