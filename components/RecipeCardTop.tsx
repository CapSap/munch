import { StyleSheet, Text } from 'react-native';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function RecipeCardTop() {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      offset.value = {
        x: e.translationX,
        y: e.translationY,
      };
      console.log('Offset:', offset.value.x); // This will log (but may be slow)
    })
    .onEnd(() => {
      offset.value = {
        x: 0,
        y: 0,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.05 : 1) },
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'blue',
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.recipeCard, animatedStyles]}>
        <Text style={styles.receipeTitle}>Recipe Title top card</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  recipeCard: {
    width: 300,
    height: 600,
    borderRadius: 30,
    backgroundColor: 'blue',
    alignSelf: 'center',
    alignContent: 'center',
  },
  receipeTitle: {
    alignSelf: 'center',
    fontSize: 30,
    paddingTop: 50,
  },
});
