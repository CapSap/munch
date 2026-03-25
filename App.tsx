import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Recipes from './components/Recipes';
import { StateNavigator } from 'navigation';
import { NavigationHandler } from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';

const stateNavigator = new StateNavigator([
  { key: 'swipe' },
  { key: 'detail', trackCrumbTrail: true },
]);

function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <NavigationHandler stateNavigator={stateNavigator}>
          <NavigationStack>
            <Scene stateKey="swipe">
              <AppContent />
            </Scene>
            <Scene stateKey="detail">
              <Text style={{ alignSelf: 'center' }}>Hello</Text>
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <Recipes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
