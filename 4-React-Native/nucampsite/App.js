import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import {store} from './redux/store';

//test
export default function App() {
  
  return (
    // gives the main component and all children
    //access to the store
    <Provider store={store}>
  <NavigationContainer>
    <Main/>
    </NavigationContainer>
    </Provider>);
}


