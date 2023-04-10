import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../navigators/RootNavigator';
import {useNavigation} from '@react-navigation/native';

type DetailScreenProp = StackNavigationProp<
  RootStackParamsList,
  'DetailScreen'
>;

const HomeScreen = () => {
  const navigation = useNavigation<DetailScreenProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen bare</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
});
