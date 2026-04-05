import { useNavigationEvent } from 'navigation-react';
import { StyleSheet, Text, View } from 'react-native';
import { cards } from '../assets/data';
import { RecipeNavigator } from './Types';
import MunchLogo from './MunchLogo';

export default function RecipeDetails() {
  const { data } = useNavigationEvent<RecipeNavigator, 'detail'>();

  const card = cards.find(c => c.id === data.cardId);

  return (
    <View style={styles.container}>
      <MunchLogo />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>+ Recipe Card</Text>
      </View>

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
  headerContainer: {
    marginTop: 45,
    marginLeft: 44,
  },
  headerText: {
    borderWidth: 2,
    borderColor: '#8A66D0',
    alignSelf: 'flex-start',
    borderRadius: 14,
    backgroundColor: '#f3f3f3',
    color: '#8a66d0',
    fontSize: 36,
    padding: 7,
    fontWeight: 'bold',
    paddingLeft: 27,
    paddingRight: 27,
  },
});
