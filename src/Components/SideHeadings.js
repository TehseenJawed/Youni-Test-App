/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, View, Text} from 'react-native';

const SideHeadings = ({heading}) => {
  return (
    <View style={styles.sideHeading}>
      <Text style={styles.sideHeadingText}>{heading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sideHeadingText: {
    fontSize: 18,
    color: '#fff',
  },
  sideHeading: {
    borderLeftColor: '#BC61F5',
    borderLeftWidth: 7,
    paddingLeft: 12,
    marginLeft: -20,
    marginVertical: 20,
  },
});

export default SideHeadings;
