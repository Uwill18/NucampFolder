import Header from './components/Header';
import './App.css';
//import CampsiteCard from './features/counter/campsites/CampsiteCard.js';
import { CAMPSITES } from './app/shared/CAMPSITES.js';
import CampsitesList from './features/campsites/CampsitesList.js';




function App() {
  return (
    <div className="App">
      <Header/>
            <CampsitesList campsite={CAMPSITES[0]} />
        </div>
  );
}

export default App;
