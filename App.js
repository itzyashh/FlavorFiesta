
import { Provider } from 'react-redux';
import MainNavigation from './src/MainNavigation';
import store, { persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <MainNavigation />
      </PersistGate>
    </Provider>
  )

}

