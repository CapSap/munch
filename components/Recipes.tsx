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
import AddIcon from './AddIcon';
import ShuffleIcon from './ShuffleIcon';
import { NavigationEvent, useNavigationEvent } from 'navigation-react';
import { cards } from '../assets/data';
import { RecipeNavigator } from './Types';

export type card = {
  id: number;
  title: string;
  colour: string;
  serves: number;
  cookTime: number;
  prepTime: number;
};

export default function Recipes() {
  const [index, setIndex] = useState(0);

  const { stateNavigator } = useNavigationEvent<RecipeNavigator>();

  const POSITION = [0, 5, -5];

  function handleRejectSwipe() {
    setIndex(prev => {
      if (prev === cards.length - 1) {
        return 0;
      } else return prev + 1;
    });
  }

  function handleRightSwipe(id: number) {
    stateNavigator.navigate('detail', { cardId: id });
  }

  console.log('rendering recipes', index);
  return (
    <View style={styles.container}>
      <View style={styles.munchContainer}>
        <Text>Munch logo/image</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Meal Swipe</Text>
      </View>
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
              onRejectSwipe={handleRejectSwipe}
              onRightSwipe={handleRightSwipe}
            ></RecipeCard>
          );
        })}
      </View>
      <View style={styles.iconContainer}>
        <AddIcon />
        <ShuffleIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  munchContainer: {
    marginTop: 37,
    marginLeft: 25,
    width: 314.5,
    height: 66,
    borderWidth: 1,
  },
  headerContainer: {
    marginTop: 45,
    marginLeft: 44,
  },
  headerText: {
    alignSelf: 'flex-start',
    borderRadius: 7,
    backgroundColor: '#8A66D0',
    color: '#FFFFFF',
    fontSize: 36,
    padding: 7,
  },
  cardList: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 70,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'yellow',
    borderWidth: 2,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 60,
    gap: 18,
  },
});
