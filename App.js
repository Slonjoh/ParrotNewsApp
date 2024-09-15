import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from './store/store';
import Navigation from './navigation/Navigation'; // serves as main component

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
