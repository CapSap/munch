import { View, Text, StyleSheet } from 'react-native';

export default function MunchLogo() {
  return (
    <View style={styles.munchContainer}>
      <Text>Munch logo/image</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  munchContainer: {
    marginTop: 37,
    marginLeft: 25,
    width: 314.5,
    height: 66,
    borderWidth: 1,
  },
});
