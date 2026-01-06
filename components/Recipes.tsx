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
    { id: 5, title: 'recipe 5', colour: 'blue' },
    { id: 6, title: 'recipe 6', colour: 'red' },
    { id: 7, title: 'recipe 7', colour: 'blue' },
  ];

  const POSITION = [-5, 0, 5];

  function handleSwipe() {
    setIndex(prev => {
      if (prev === cards.length - 1) {
        return 0;
      } else return prev + 1;
    });
  }
  console.log('rendering recipes', index);
  return (
    <View style={styles.cardList}>
      {cards.map((card, i) => {
        console.log(i, index);
        const isVisible = i >= index && i < index + 3;
        return (
          <RecipeCard
            key={card.id}
            data={card}
            backgroundColour={card.colour}
            // isTopCard={i === index}
            isTopCard={true}
            isVisible={isVisible}
            order={cards.length - i}
            rotate={POSITION[i % 3]}
            onSwipe={handleSwipe}
          ></RecipeCard>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'yellow',
    borderWidth: 2,
  },
});
