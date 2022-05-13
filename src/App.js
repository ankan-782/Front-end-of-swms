import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/HomepageFolder/LandingPage/LandingPage';
import LoginForTruckDriver from './Pages/AuthenticationFolder/ForTruckDriver/LoginForTruckDriver/LoginForTruckDriver';
import LoginForCityCorp from './Pages/AuthenticationFolder/ForCityCorp/LoginForCityCorp/LoginForCityCorp';
import AuthenticationPage from './Pages/AuthenticationFolder/AuthenticationPage/AuthenticationPage';
import AuthenticationLayout from './Pages/AuthenticationFolder/AuthenticationLayout/AuthenticationLayout';
import ForgotPasswordForTruckDriver from './Pages/AuthenticationFolder/ForTruckDriver/ForgotPasswordForTruckDriver/ForgotPasswordForTruckDriver';
import ForgotPasswordForCityCorp from './Pages/AuthenticationFolder/ForCityCorp/ForgotPasswordForCityCorp/ForgotPasswordForCityCorp';
import AuthenticationRoute from './RouteManagement/AuthenticationRoute/AuthenticationRoute';
import PrivateRoute from './RouteManagement/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import DashBoardLayout from './Pages/DashBoardFolder/DashBoardLayout/DashBoardLayout';
import ScrollToTop from './WindowScroll/ScrollToTop/ScrollToTop';
import EveryPageScrollToTop from './WindowScroll/EveryPageScrollToTop/EveryPageScrollToTop';
import './App.css';

function App() {

  return (
    <div>
      <EveryPageScrollToTop />
      <ScrollToTop />
      <Routes>
        <Route path='' element={<LandingPage />} />
        <Route path='home' element={<LandingPage />} />
        <Route path='dashboard' element={<PrivateRoute><DashBoardLayout /></PrivateRoute>} />
        <Route path='authentication' element={<AuthenticationRoute><AuthenticationLayout /></AuthenticationRoute>} >
          <Route index element={<AuthenticationPage />} />
          <Route path='loginForTruckDriver' element={<LoginForTruckDriver />} />
          <Route path='loginForTruckDriver/forgotPassForTruckDriver' element={<ForgotPasswordForTruckDriver />} />
          <Route path='loginForCityCorp' element={<LoginForCityCorp />} />
          <Route path='loginForCityCorp/forgotPassForCityCorp' element={<ForgotPasswordForCityCorp />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
