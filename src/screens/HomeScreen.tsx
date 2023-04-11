import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../navigators/RootNavigator';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type DetailScreenProp = StackNavigationProp<
  RootStackParamsList,
  'DetailScreen'
>;

const HomeScreen = () => {
  const navigation = useNavigation<DetailScreenProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Explore What Your Home Needs</Text>
        <FontAwesome name="bell-o" size={20} color={'#E29547'} />
      </View>
      {/* Search Bar  */}
      <View style={styles.searchContainer}>
        <View style={styles.subSearchContainer}>
          <FontAwesome name="search" size={15} color={'#AAAAAA'} />
          <TextInput
            placeholder="Chair, desk, lamp, etc"
            style={styles.searchInput}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  headerText: {
    width: '50%',
    color: '#121212',
    fontWeight: '600',
    fontSize: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 24,
    paddingHorizontal: 20,
  },
  subSearchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    paddingHorizontal: 20,
  },
  searchInput: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.005,
    color: '#AAAAAA',
    marginLeft: 12.7,
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
});
