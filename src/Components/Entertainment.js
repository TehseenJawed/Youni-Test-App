/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { scale } from 'react-native-size-matters';

const Entertainment = () => {
  const categories = ['🎻 Art & Music', '⚽️  Sport', '🎬 Movie'];
  return (
    <View>
      <View style={styles.categoryItems}>
        {categories.map((v, i) => (
          <TouchableOpacity key={i} style={styles.categoryItem}>
            <Text style={styles.candidateQuantityText}>{v}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 8,
  },
  categoryItem: {
    flexDirection: 'row',
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#454545',
    borderRadius: 20,
  },
  candidateQuantityText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Entertainment;
