import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DropyWelcome from './components/DropyWelcome'
import DropyLogin from './components/DropyLogin'
import DropyRegister from './components/DropyRegister'
import Navbar from './components/Navbar'
import DropyParcelsOnboarding1 from './components/DropyParcelsOnboarding1'
import DropyRideOnboarding1 from './components/DropyRideOnboarding1'
import DropyRideOnboarding2 from './components/DropyRideOnboarding2'
import DropyShopOnboarding2 from './components/DropyShopOnboarding2'
import DropyParcelsOnboarding2 from './components/DropyParcelsOnboarding2'
import DropyShopOnboarding1 from './components/DropyShopOnboarding1'
import DropyMainSignUp from './components/DropyMainSignUp'
import DropyRiderRegisterDetails from './components/DropyRiderRegisterDetails'
import DropyCreatePin from './components/DropyCreatePin'
import DropyRiderPin from './components/DropyRiderPin'
import DropyRiderDetailsModal from './components/DropyRiderDetailsModal'
import DropyMainLandingPageBeforeSignUp from './components/DropyMainLandingPageBeforeSignUp'
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    <div className='content'>
    <Routes>
      <Route exact path="/" element={<DropyMainSignUp/>}></Route>
      <Route  path="/login" element={<DropyLogin/>}></Route>
      <Route  path="/register" element={<DropyRegister/>}></Route>
      <Route  path="/parcels" element={<DropyParcelsOnboarding1/>}></Route>
      <Route  path="/rider" element={<DropyRiderRegisterDetails/>}></Route>
      <Route  path="/create-pin" element={<DropyCreatePin/>}></Route>
      <Route  path="/rider-pin" element={<DropyRiderPin/>}></Route>
     <Route  path="/rider-modal" element={<DropyRiderDetailsModal/>}></Route>
     <Route  path="/main" element={<DropyMainLandingPageBeforeSignUp/>}></Route>
     <Route  path="/parcels2" element={<DropyParcelsOnboarding2/>}></Route>
     <Route  path="/shop1" element={<DropyShopOnboarding1/>}></Route>
      <Route  path="/shop2" element={<DropyShopOnboarding2/>}></Route>
      <Route  path="/ride1" element={<DropyRideOnboarding1/>}></Route>
      <Route  path="/ride2" element={<DropyRideOnboarding2/>}></Route>
    </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
