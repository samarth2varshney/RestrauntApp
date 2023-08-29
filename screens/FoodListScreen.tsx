import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox, SearchBar } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";

const foodData = require('../foodData.json');

interface Food {
  id: number;
  title: string;
  description: string;
  category: string; // Added "category" field
}

const FoodListScreen = () => {
  const [foods, setFoods] = useState<Food[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [vegChecked, setVegChecked] = useState<boolean>(false);
  const [nonVegChecked, setNonVegChecked] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Use the food data from the imported JSON file
    setFoods(foodData);
  }, []);

  useEffect(()=>{
    filterVeg();
  },[vegChecked])

  useEffect(()=>{
    filterNonVeg();
  },[nonVegChecked])

  const filterFoods = () => {
    // Filter the food items based on searchText
    const filteredFoods = foodData.filter((food) =>
      food.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFoods(filteredFoods);
  };

  const filterVeg = () => {
    if (vegChecked) {
      const filteredFoods = foodData.filter((food) => food.category === "veg");
      setFoods(filteredFoods);
    } else {
      setFoods(foodData);
    }
  };

  const filterNonVeg = () => {
    if (nonVegChecked) {
      const filteredFoods = foodData.filter((food) => food.category === "non-veg");
      setFoods(filteredFoods);
    } else {
      setFoods(foodData);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search for dishes..."
        onChangeText={(text: string) => setSearchText(text)}
        value={searchText}
        onEndEditing={filterFoods}
      />
      <CheckBox
        title="Veg"
        checked={vegChecked}
        onPress={() => {
          setVegChecked(!vegChecked);
        }}
      />
      <CheckBox
        title="Non-Veg"
        checked={nonVegChecked}
        onPress={() => {
          setNonVegChecked(!nonVegChecked);
        }}
      />
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('foodDetails', { food: item })}
          >
            <View style={styles.itemContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {item.title}
                  <View style={styles.circle}>
                    {item.category === 'veg' ? (
                      <View style={[styles.innerCircle, { backgroundColor: 'green' }]} />
                    ) : (
                      <View style={[styles.innerCircle, { backgroundColor: 'red' }]} />
                    )}
                  </View>
                </Text>
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    flexDirection: 'row', // Align title and circle horizontally
    alignItems: 'center', // Center items vertically
  },
  itemContainer: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "black",
  },
  description: {
    fontSize: 16,
    color: "black",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});

export default FoodListScreen;
