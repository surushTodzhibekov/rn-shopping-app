import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ImageBackground,
  ImageStyle,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../navigators/RootNavigator';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategoryList from '../components/category/CategoryList';
import ImageSlider from '../components/category/slider/ImageSlider';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('screen');

const carousel = require('../../assets/images/carousel/carousel-3.png');

const data = [
  {
    id: 0,
    name: 'chair',
    image: require('../../assets/images/Rectangle6.png'),
  },
  {
    id: 1,
    name: 'sofa',
    image: require('../../assets/images/sofa.png'),
  },
  {
    id: 2,
    name: 'desk',
    image: require('../../assets/images/desk1.jpg'),
  },
];

const carouselImages = [
  'https://images.pexels.com/photos/1543447/pexels-photo-1543447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/269218/pexels-photo-269218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=28',
  'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

const productData = [
  {
    id: 0,
    image: require('../../assets/images/product/product-1.png'),
    name: 'Sverom chair',
    price: 400,
  },
  {
    id: 1,
    image: require('../../assets/images/product/product-2.png'),
    name: 'Norrviken chair and table',
    price: 200,
  },
  {
    id: 2,
    image: require('../../assets/images/product/product-1.png'),
    name: 'Sverom chair',
    price: 400,
  },
  {
    id: 3,
    image: require('../../assets/images/product/product-2.png'),
    name: 'Norrviken chair and table',
    price: 200,
  },
];

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
        {/* category */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <CategoryList name={item.name} image={item.image} />
          )}
        />
      </View>
      {/* Carousel */}
      <View style={styles.carouselWrapper}>
        <ImageSlider images={carouselImages} />
      </View>
      {/* ProductList */}
      <View style={styles.categories}>
        <Text style={styles.categoryText}>Popular</Text>
        <TouchableOpacity style={styles.subCategories} activeOpacity={0.8}>
          <Text style={styles.categoryAllText}>See all</Text>
          <FontAwesome name="long-arrow-right" size={16} color={'#E29547'} />
        </TouchableOpacity>
      </View>
      <FlatList
        // style={{backgroundColor: '#FAFAFA'}}
        contentContainerStyle={{justifyContent: 'center'}}
        data={productData}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            // onPress={() => navigation.navigate('DetailsScreen', furniture)}>
          >
            <View style={styles.iconContainer}>
              <Icon
                name="heart"
                // color={furniture.liked ? 'red' : '#122636'}
                color={'#122636'}
              />
            </View>
            <Image
              source={item.image}
              style={{height: 120, width: '100%', borderRadius: 10}}
            />

            <Text style={styles.cardName}>{item.name}</Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.price}>{item.price}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="star" color={'#ffb900'} size={18} />
                <Text style={styles.rating}>4.3</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
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

  subCategories: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselWrapper: {
    flex: 1,
    marginVertical: 20,
  },

  product: {
    flex: 1,
  },
  /******** card **************/
  // card: {
  //   marginVertical: 8,
  //   backgroundColor: 'white',
  //   flexBasis: '45%',
  //   marginHorizontal: 10,
  //   borderRadius: 8,
  // },
  cardContent: {
    paddingVertical: 17,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null as any,
    borderRadius: 8,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    color: '#778899',
  },
  count: {
    fontWeight: '600',
    fontSize: 18,
    flex: 1,
    color: '#121212',
  },

  card: {
    height: 190,
    backgroundColor: '#fff',
    elevation: 10,
    width: width / 2.5,
    // marginRight: 20,
    padding: 10,
    marginVertical: 20,
    borderRadius: 10,
  },
  cardName: {
    marginTop: 10,
    fontSize: 12,
    color: '#122636',
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    color: '#122636',
    fontSize: 12,
  },
  rating: {
    fontWeight: 'bold',
    color: '#122636',
    fontSize: 12,
  },
  titleCard: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 25,
    width: 25,
    backgroundColor: '#fff',
    position: 'absolute',
    elevation: 2,
    right: 15,
    top: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'Poppins-Regular',
  },
});
