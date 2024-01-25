
import { Provider } from 'react-redux';
import MainNavigation from './src/MainNavigation';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )

}

