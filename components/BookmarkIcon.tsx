import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function BookmarkIcon() {
  return (
    <View style={styles.container}>
      <Svg width={50} height={50}>
        <Path
          fill="none"
          stroke="#00f"
          strokeWidth={5}
          d="M5 20 Q20 0 25 20 T45 20"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
  },
});
