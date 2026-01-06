import {
  Button,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { card } from './Recipes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  RectButton,
} from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';

export default function RecipeCard(props: {
  backgroundColour: string;
  data: card;
  isTopCard: boolean;
  isVisible: boolean;
  rotate: number;
  onSwipe: () => void;
  order: number;
}) {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const gesture = props.isTopCard
    ? Gesture.Pan()
        .onBegin(() => {
          isPressed.value = true;
        })
        .onUpdate(e => {
          offset.value = {
            x: e.translationX,
            y: e.translationY,
          };
        })
        .onEnd(() => {
          if (offset.value.x < -100) {
            scheduleOnRN(props.onSwipe);

            offset.value = withSpring({ x: 0, y: 0 });
          } else {
            offset.value = withSpring({ x: 0, y: 0 });
          }
        })
        .onFinalize(() => {
          isPressed.value = false;
        })
    : Gesture.Pan();
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed.value ? 1.05 : 1) },
        { rotate: `${props.rotate}deg` },
      ],
      position: 'absolute',
      backgroundColor: isPressed.value ? 'yellow' : props.backgroundColour,
      zIndex: props.order,
      // opacity: props.isVisible ? 1 : 0,
      opacity: withTiming(props.isVisible ? 1 : 0, { duration: 200 }), // Smooth fade
    };
  });
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.recipeCard, animatedStyles]}>
        <Text style={styles.receipeTitle}>Title: {props.data.title}</Text>
      </Animated.View>
    </GestureDetector>
  );
}
const styles = StyleSheet.create({
  recipeCard: {
    width: 300,
    height: 600,
    borderRadius: 30,
  },
  receipeTitle: {
    alignSelf: 'center',
    fontSize: 30,
    paddingTop: 50,
  },
});
