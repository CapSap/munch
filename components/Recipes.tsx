import { View, Text, StyleSheet } from 'react-native';
import RecipeCardTop from './RecipeCardTop';
import RecipeCard from './RecipeCard';

export default function Recipes() {
  return (
    <View style={styles.cardList}>
      <RecipeCard
        backgroundColour={'green'}
        transform="rotate(5deg)"
      ></RecipeCard>
      <RecipeCard
        backgroundColour={'pink'}
        transform="rotate(-5deg)"
      ></RecipeCard>
      <RecipeCardTop></RecipeCardTop>
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {},
  cards: { position: 'absolute' },
});
