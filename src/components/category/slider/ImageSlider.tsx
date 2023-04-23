import {
  Dimensions,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function ImageSlider({images}: {images: string[]}) {
  const {width} = Dimensions.get('window');
  const height = width * 0.7;

  const [active, setActive] = useState(0);

  const onScrollChange = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };
  return (
    <View>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        style={{width, height}}>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{uri: image}}
            style={{
              width,
              height,
              resizeMode: 'cover',
            }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: -15,
    alignSelf: 'center',
  },
  dot: {
    color: '#888',
    fontSize: 50,
  },
  activeDot: {
    color: '#FFF',
    fontSize: 50,
  },
});
