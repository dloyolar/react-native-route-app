import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import {PermissionsProvider} from './src/context/PermissionsContext';

const App = () => {
  return (
    <NavigationContainer>
      <PermissionsProvider>
        <Navigator />
      </PermissionsProvider>
    </NavigationContainer>
  );
};

export default App;
