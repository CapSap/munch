import { useNavigationEvent } from 'navigation-react';
import { StyleSheet, Text, View } from 'react-native';

export default function RecipeDetails() {
  const { data } = useNavigationEvent();
  return (
    <View>
      <Text style={styles.text}>details{data.cardIndex}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
  },
});
