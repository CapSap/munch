import { useNavigationEvent } from 'navigation-react';
import { StyleSheet, Text, View } from 'react-native';
import { cards } from '../assets/data';
import { RecipeNavigator } from './Types';
import MunchLogo from './MunchLogo';

export default function RecipeDetails() {
  const { data } = useNavigationEvent<RecipeNavigator, 'detail'>();

  const card = cards.find(c => c.id === data.cardId);

  if (!card) {
    return (
      <View>
        <Text>Card not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MunchLogo />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>+ Recipe Card</Text>
      </View>
      <View style={styles.receipeDetailContainer}>
        <View style={styles.receipeImage}>
          <Text style={{ alignSelf: 'center' }}>image placeholder</Text>
        </View>
        <Text style={styles.receipeTitle}>{card.title}</Text>
        <Text style={styles.subheadingLabel}>
          Serves: <Text style={styles.subheadingValue}>{card.serves}</Text>
        </Text>
      </View>
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
  receipeDetailContainer: {
    borderWidth: 1,
    alignItems: 'center',
  },
  receipeImage: {
    borderWidth: 1,
    marginTop: 26,
    marginLeft: 45,
    marginRight: 45,
    height: 185,
    borderRadius: 45,
    justifyContent: 'center',
  },
  receipeTitle: {
    fontSize: 28,
    color: '#CDCDCD',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  subheadingLabel: {
    fontWeight: '700',
    fontSize: 20,
  },
  subheadingValue: {
    fontWeight: 400,
    color: '#cdcdcd',
  },
});
