import { useNavigationEvent } from 'navigation-react';
import { StyleSheet, Text, View } from 'react-native';
import { cards } from '../assets/data';
import { RecipeNavigator } from './Types';

export default function RecipeDetails() {
  const { data } = useNavigationEvent<RecipeNavigator, 'detail'>();

  const card = cards.find(c => c.id === data.cardId);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>card id from navigation: {data.cardId}</Text>
      <Text style={styles.text}>title: {card?.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 30,
  },
});
