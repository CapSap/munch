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
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

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

  function swipe() {
    console.log('swipe');
    setIndex(prev => {
      if (prev === cards.length - 1) {
        return 0;
      } else return prev + 1;
    });
  }
  return (
    <View>
      <View>
        {/* 
      <RecipeCard
        key={cards[0].id}
        data={cards[0]}
        backgroundColour={cards[0].colour}
        isTopCard={true}
        order={0}
        onSwipe={swipe}
      ></RecipeCard>
       */}
      </View>
      <View>
        <View style={styles.cardList}>
          {cards.map((card, i) => {
            const isVisible = i >= index && i < index + 3;
            const POSITION = [-5, 0, 5];
            function getRotateValue(index: number) {
              return POSITION[index % 3];
            }

            console.log('mod', i % 3);

            return (
              <RecipeCard
                key={card.id}
                data={card}
                backgroundColour={card.colour}
                isTopCard={true}
                // rotate={-5 + 3 * i}
                rotate={getRotateValue(i)}
                order={3 - i}
                onSwipe={swipe}
                style={{
                  opacity: isVisible ? 1 : 0,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  // borderWidth: 20,
                }}
              ></RecipeCard>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardList: {},
});
