import { useNavigationEvent } from 'navigation-react';
import { StyleSheet, Text, View } from 'react-native';
import { cards } from '../assets/data';

export default function RecipeDetails() {
  const { data } = useNavigationEvent();
  return (
    <View>
      <Text style={styles.text}>details{data.cardId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
});
