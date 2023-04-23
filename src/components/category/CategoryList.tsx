import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function CategoryList({
  name,
  image,
}: {
  name: string;
  image: string;
}) {
  return (
    <View>
      <TouchableOpacity style={styles.categoryImageWrap} activeOpacity={0.8}>
        <Image source={image as any} style={styles.categoryImage} />
        <Text style={styles.imageCategoryText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryImageWrap: {
    position: 'relative',
    marginLeft: 20,
  },
  categoryImage: {
    width: 125,
    height: 56,
    borderRadius: 8,
  },
  imageCategoryText: {
    position: 'absolute',
    left: 12,
    top: 18,
    bottom: 18,
    fontFamily: 'Poppins-Medium',
    fontWeight: '400',
    fontSize: 14,
    color: '#121212',
  },
});
