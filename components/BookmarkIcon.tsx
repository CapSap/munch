import { StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function BookmarkIcon() {
  return (
    <View style={styles.container}>
      <Svg width={50} height={50}>
        <Path
          fill="none"
          stroke="#00f"
          strokeWidth={3}
          d="M12 5 H38 Q40 5 40 7 V43 Q40 45 38 45 L25 35 L12 45 Q10 45 10 43 V7 Q10 5 12 5 Z"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    borderColor: 'black',
  },
});
