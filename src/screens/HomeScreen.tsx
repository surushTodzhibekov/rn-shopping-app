import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../navigators/RootNavigator';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Rectangle from '../../assets/images/Rectangle6.png';

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
      {/* Categories */}
      <View style={styles.categoryContainer}>
        <View style={styles.categories}>
          <Text style={styles.categoryText}>Categories</Text>
          <TouchableOpacity style={styles.subCategories} activeOpacity={0.8}>
            <Text style={styles.categoryAllText}>See all</Text>
            <FontAwesome name="long-arrow-right" size={16} color={'#E29547'} />
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.categoryImageWrap}
            activeOpacity={0.8}>
            <Image source={Rectangle} style={styles.categoryImage} />
            <Text style={styles.imageCategoryText}>Chair</Text>
          </TouchableOpacity>
        </ScrollView>
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
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.005,
    color: '#AAAAAA',
    marginLeft: 12.7,
  },
  categoryContainer: {
    flexDirection: 'column',
  },
  categories: {
    fontFamily: 'Poppins-Regular',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  categoryText: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    fontSize: 30,
  },
  categoryAllText: {
    fontSize: 12,
    lineHeight: 18,
    color: '#E29547',
    marginRight: 8,
  },
  categoryImageWrap: {
    position: 'relative',
    marginLeft: 20,
  },
  categoryImage: {
    width: 125,
    height: 56,
  },
  imageCategoryText: {
    position: 'absolute',
    left: 12,
    top: 18,
    bottom: 18,
    fontSize: 14,
  },
  subCategories: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Regular',
  },
});
