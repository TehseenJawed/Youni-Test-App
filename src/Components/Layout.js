/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import HeartIcon from '../Assets/Icons/heart_icon.svg';
import SearchIcon from '../Assets/Icons/search_icon.svg';
import DrawerIcon from '../Assets/Icons/drawer_icon.svg';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';
import BackIcon from '../Assets/Icons/back.svg';
import DownloadIcon from '../Assets/Icons/download_icon.svg';
import FlagIcon from '../Assets/Icons/flag_icon.svg';
import HeartActiveIcon from '../Assets/Icons/heart_active_icon.svg';
import {scale} from 'react-native-size-matters';

function Layout({children}) {
  const [forYouScroll, setForYouScroll] = useState(0);
  const [exploreScroll, setExploreScroll] = useState(2);
  const [activeIndex, setActiveIndex] = useState(0);
  const route = useRoute();
  const forYou = ['All', 'My Interests', 'My Groups', 'My Community'];
  const explore = ['The Art', 'Community', 'All', 'Body + Mind', 'Party'];
  return (
    <View style={styles.layoutContainer}>
      <StatusBar animated={true} backgroundColor="#61dafb" hidden={true} />
      <LinearGradient
        colors={['#000000', '#000000', '#00000000']}
        style={styles.linearGradient}>
        {route.name === 'Events' ? (
          <>
            <View style={styles.layoutHeader}>
              <Text style={styles.layoutHeading}>Events</Text>
              <View style={styles.headerLeftContainer}>
                <HeartIcon width={25} height={25} />
                <SearchIcon width={25} height={25} />
                <DrawerIcon width={25} height={25} />
              </View>
            </View>
            <View style={styles.exploreContainer}>
              <TouchableOpacity onPress={() => setActiveIndex(0)}>
                <Text
                  style={
                    activeIndex == 0 ? styles.exploreResult : styles.exploreText
                  }>
                  Explore
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveIndex(1)}>
                <Text
                  style={
                    activeIndex == 1 ? styles.exploreResult : styles.exploreText
                  }>
                  For You
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={{marginTop: 5}} horizontal={true}>
              <View style={styles.exploreStyles}>
                {activeIndex == 0 && (
                  <>
                    {explore.map((v, i) => (
                      <TouchableOpacity onPress={() => setExploreScroll(i)}>
                        <Text
                          style={
                            exploreScroll == i
                              ? styles.activeExploreText
                              : styles.defaultExploreText
                          }>
                          {v}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </>
                )}

                {activeIndex == 1 && (
                  <>
                    {forYou.map((v, i) => (
                      <TouchableOpacity
                        style={
                          forYouScroll == i
                            ? styles.activeBullet
                            : styles.defaultBullet
                        }
                        onPress={() => setForYouScroll(i)}>
                        <Text
                          style={
                            forYouScroll == i
                              ? styles.activeText
                              : styles.defaultText
                          }>
                          {v}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </>
                )}
              </View>
            </ScrollView>
          </>
        ) : (
          <View style={styles.homeLayoutHeader}>
            <BackIcon />
            <View style={styles.headerLeftContainer}>
              <FlagIcon width={25} height={25} />
              <HeartActiveIcon width={25} height={25} />
              <DownloadIcon width={25} height={25} />
            </View>
          </View>
        )}
      </LinearGradient>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    backgroundColor: '#040404',
  },
  homeLayoutHeader: {
    width: scale(330),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  layoutHeading: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '600',
  },
  layoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  headerLeftContainer: {
    width: 130,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  exploreContainer: {
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exploreText: {
    fontSize: 22,
    marginHorizontal: 10,
    fontWeight: '600',
    color: '#9E9E9E',
  },
  exploreResult: {
    fontSize: 22,
    marginHorizontal: 10,
    fontWeight: '600',
    color: '#fff',
  },
  activeBullet: {
    backgroundColor: '#fff',
    padding: 10,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    margin: 5,
  },
  activeText: {
    color: '#0F0F0F',
    fontSize: 15,
  },
  defaultBullet: {
    borderColor: '#9E9E9E',
    backgroundColor: '#0F0F0F',
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    margin: 5,
  },
  defaultText: {
    color: '#9E9E9E',
    fontSize: 15,
  },
  activeExploreText: {
    color: '#fff',
    fontSize: 25,
    marginHorizontal: 15,
  },
  defaultExploreText: {
    color: '#9E9E9E',
    fontSize: 15,
    marginHorizontal: 15,
  },
  exploreStyles: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    position: 'absolute',
    zIndex: 100,
  },
});

export default Layout;
