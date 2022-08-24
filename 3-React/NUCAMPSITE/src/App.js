import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
//import { CAMPSITES } from './app/shared/CAMPSITES.js';
//import CampsitesList from './features/campsites/CampsitesList.js';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';



function App() {
  return (
    <div className="App">
      <Header/>
         <CampsitesDirectoryPage />
       <Footer/>
        </div>
  );
}

export default App;
