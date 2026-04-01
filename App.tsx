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
import { NavigationHandler, useNavigationEvent } from 'navigation-react';
import { NavigationStack, Scene } from 'navigation-react-native';
import RecipeDetails from './components/ReceipeDetails';

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
              <Recipes />
            </Scene>
            <Scene stateKey="detail">
              <RecipeDetails />
            </Scene>
          </NavigationStack>
        </NavigationHandler>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
