/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import Profile1 from '../Assets/Images/profile_images/profile_1.jpg';
import Profile2 from '../Assets/Images/profile_images/profile_2.jpeg';
import Profile3 from '../Assets/Images/profile_images/profile_3.webp';

const Visitors = ({card}) => {
  const profileImages = [Profile1, Profile2, Profile3, ''];
  return (
    <View style={{flexDirection: 'row', position: 'relative', height: 50}}>
      {profileImages.map((v, i) => (
        <View>
          {v === '' ? (
            <TouchableOpacity
              style={{
                ...styles.candidateContainer,
                left: 30 * i,
                borderWidth: card ? 2 : 0,
              }}>
              <Text style={styles.candidateQuantityText}>+12k</Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                ...styles.candidateContainer,
                left: 30 * i,
                borderWidth: card ? 2 : 0,
              }}>
              <Image source={v} style={{...styles.profileImage}} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  candidateContainer: {
    backgroundColor: '#BC61F5',
    flexDirection: 'row',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    overflow: 'hidden',
    position: 'absolute',
    left: 10,
    borderColor: 'white',
  },
  candidateQuantityText: {
    color: '#fff',
    fontSize: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
});

export default Visitors;
