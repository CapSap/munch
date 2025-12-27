import { StyleSheet, Text, View } from 'react-native';

export default function RecipeCard(props: {
  backgroundColour: string;
  transform: string;
}) {
  console.log(props.backgroundColour);
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: props.backgroundColour, transform: props.transform },
      ]}
    >
      <Text>card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: 300,
    height: 600,
    borderRadius: 30,
    alignSelf: 'center',
    alignContent: 'center',
  },
});
