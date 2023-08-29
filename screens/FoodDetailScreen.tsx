import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Food {
  title: string;
  price: number;
  ingredients: string[];
  ratings: number;
  reviews: number;
}

const FoodDetailScreen: React.FC<{ route: any }> = ({ route }) => {
  const { food } = route.params as { food: Food };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{food.title}</Text>
      
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      <Text style={styles.ingredients}>{food.ingredients.join(', ')}</Text>
      
      <View style={styles.ratingsContainer}>
        <Text style={styles.ratingText}>Ratings: {food.ratings}</Text>
        <Text style={styles.ratingText}>Reviews: {food.reviews}</Text>
      </View>
      
      <Text style={styles.price}>₹ {food.price}</Text>
      
      {/* Add similar food items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "black",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 24,
    color: "black",
  },
  ingredients: {
    fontSize: 18,
    marginTop: 8,
    color: "black",
  },
  ratingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    width: "100%",
  },
  ratingText: {
    fontSize: 18,
    color: "black",
  },
  price: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 24,
    color: "black",
  },
});

export default FoodDetailScreen;
