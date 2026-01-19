import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function NextIcon() {
  return (
    <View style={styles.container}>
      <Svg width={58} height={58} viewBox="0 0 61 61" fill="none">
        <Path
          d="M22.5 21L37.9523 29.0621C39.4137 29.8246 39.3771 31.9283 37.8901 32.6395L22.5 40M59.5 30.5C59.5 46.5163 46.5163 59.5 30.5 59.5C14.4837 59.5 1.5 46.5163 1.5 30.5C1.5 14.4837 14.4837 1.5 30.5 1.5C46.5163 1.5 59.5 14.4837 59.5 30.5Z"
          stroke="#8A66D0"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Takes it out of the normal flow
    right: -100, // Pins it to the right edge
  },
});
