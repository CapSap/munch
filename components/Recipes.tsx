import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import RecipeCard from './RecipeCard';
import { useState } from 'react';

export type card = {
  id: number;
  title: string;
  colour: string;
};

export default function Recipes() {
  const [index, setIndex] = useState(0);
  const cards = [
    { id: 1, title: 'recipe 1', colour: 'green' },
    { id: 2, title: 'recipe 2', colour: 'pink' },
    { id: 3, title: 'recipe 3', colour: 'blue' },
    { id: 4, title: 'recipe 4', colour: 'red' },
  ];
  return (
    <View>
      {/* 
      <View style={styles.cardList}>
        <RecipeCard
          backgroundColour={{ backgroundColor: 'green' }}
          transform={{ transform: [{ rotate: '5deg' }] }}
        ></RecipeCard>
        <RecipeCard
          backgroundColour={{ backgroundColor: 'pink' }}
          transform={{ transform: [{ rotate: '-5deg' }] }}
        ></RecipeCard>
        <RecipeCardTop backgroundColour=""></RecipeCardTop>
      </View> 
      */}
      <View style={styles.cardList}>
        {cards.slice(0, 3).map((card, i) => (
          <RecipeCard
            key={card.id}
            data={card}
            backgroundColour={card.colour}
            isTopCard={i === index}
            rotate={5 - 5 * i}
          ></RecipeCard>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {},
});
