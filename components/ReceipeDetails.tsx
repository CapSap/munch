import { useNavigationEvent } from 'navigation-react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { cards } from '../assets/data';
import { RecipeNavigator } from './Types';
import MunchLogo from './MunchLogo';

export default function RecipeDetails() {
  const { data } = useNavigationEvent<RecipeNavigator, 'detail'>();

  const instructions = [
    {
      id: 1,
      instruct:
        'Heat 2 tbsp of oil in wok over medium heat. Add onion and garlic.',
    },
    {
      id: 2,
      instruct:
        'Add in the protein and chopped veggies. Stir until everything is fragrant.',
    },
    {
      id: 3,
      instruct:
        'Add in oyster sauce and chilli flakes. Sprinkle a bit of sugar and salt as needed.',
    },
  ];

  // const card = cards.find(c => c.id === data.cardId);
  const card = cards.find(c => c.id === 1);

  if (!card) {
    return (
      <View>
        <Text>Card not found</Text>
      </View>
    );
  }

  return (
    <ScrollView>
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
          Serves:{' '}
          <Text style={styles.subheadingValue}>{card.serves} person</Text>
        </Text>
        <View style={styles.bar}></View>
        <Text style={styles.subheadingLabel}>
          Prep time:{' '}
          <Text style={styles.subheadingValue}>{card.prepTime} minutes</Text>
        </Text>

        <Text style={styles.subheadingLabel}>
          Cook time:{' '}
          <Text style={styles.subheadingValue}>{card.cookTime} minutes</Text>
        </Text>
        <View style={styles.notesContainer}>
          <Text style={styles.notesText}>[Optional] Notes: x</Text>
        </View>
        <Text style={styles.bodySubheadingLabel}>Ingredients</Text>
        <View style={styles.instructionsTextContainer}>
          <Text style={styles.bodyText}>1 onion - sliced</Text>
          <Text style={styles.bodyText}>90 ml oil (veg or olive)</Text>
          <Text style={styles.bodyText}>30ml oyster sauce</Text>
        </View>
        <Text style={styles.instructionsAddButon}>+ Ingredient</Text>
        <Text style={styles.bodySubheadingLabel}>Instructions</Text>

        {instructions.map((item, index) => {
          return (
            <View key={item.id} style={styles.instructionItemContainer}>
              <View style={styles.instructionItemTextContainer}>
                <View style={styles.instructionItemNumber}>
                  <Text style={styles.instructionItemNumberText}>
                    {index + 1}
                  </Text>
                </View>
                <Text style={styles.instructionsTextBody}>{item.instruct}</Text>
              </View>
              <View style={styles.instructionImage}>
                <Text>placeholder image</Text>
              </View>
            </View>
          );
        })}

        <Text style={styles.instructionsAddButon}>+ Next step</Text>
        <View style={styles.bottomButtonsContainer}>
          <Text style={styles.discardButton}>Discard</Text>
          <Text style={styles.publishButton}>Publish</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 45,
    marginTop: 50,
  },
  receipeImage: {
    borderWidth: 1,
    marginTop: 26,
    marginLeft: 45,
    marginRight: 45,
    marginBottom: 23,
    height: 185,
    borderRadius: 45,
    justifyContent: 'center',
  },
  receipeTitle: {
    fontSize: 28,
    color: '#CDCDCD',
    fontWeight: 600,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  subheadingLabel: {
    fontWeight: '700',
    fontSize: 20,
  },
  subheadingValue: {
    fontWeight: 400,
    color: '#cdcdcd',
  },
  bar: {
    borderBottomWidth: 1,
    width: 239,
    marginTop: 10,
    marginBottom: 10,
  },
  notesContainer: {
    height: 107,
    width: 240,
    borderRadius: 20,
    // backgroundColor: '#f3f3f3',
    backgroundColor: 'red',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 34,
  },
  notesText: {
    marginTop: 12,
    color: '#cdcdcd',
    fontSize: 18,
    fontWeight: 'bold',
  },
  instructionsTextContainer: {
    gap: 16,
    width: '60%',
  },
  bodyText: {
    fontSize: 18,
    color: '#CDCDCD',
  },
  instructionsAddButon: {
    fontSize: 18,
    color: '#CDCDCD',
    marginTop: 25,
    marginBottom: 50,
  },
  bodySubheadingLabel: {
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 16,
  },
  instructionItemContainer: { width: '100%', marginBottom: 36 },
  instructionItemTextContainer: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 44,
    gap: 16,
    marginBottom: 15,
  },
  instructionItemNumber: {
    backgroundColor: '#8A66D0',
    borderRadius: 25,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionItemNumberText: { color: 'white', fontSize: 18, fontWeight: 600 },
  instructionImage: {
    height: 69,
    width: 229,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
  },

  instructionsTextBody: {
    fontSize: 18,
    color: '#CDCDCD',
    width: 229,
    fontWeight: 400,
  },
  bottomButtonsContainer: { flexDirection: 'row', gap: 86, marginBottom: 60 },
  discardButton: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#787878',
    color: '#FFFFFF',
  },
  publishButton: {
    borderWidth: 1,
    padding: 7,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#8A66D0',
    color: '#FFFFFF',
  },
});
