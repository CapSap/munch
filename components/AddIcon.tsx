import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function AddIcon() {
  return (
    <View style={styles.container}>
      <Svg width={58} height={58} viewBox="0 0 68 68" fill="none">
        <Path
          d="M25 34.1283H45M35.2857 24.207V44.207"
          stroke="#8A66D0"
          strokeWidth={5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position: 'absolute', // Takes it out of the normal flow
    // right: -150, // Pins it to the right edge
    backgroundColor: '#F3F3F3',
    borderWidth: 1,
    borderColor: '#8A66D0',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    height: 58,
    width: 58,
  },
});
