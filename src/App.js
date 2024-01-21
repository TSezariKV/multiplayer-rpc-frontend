import './css/pages.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { UserState } from './context/UserContext';

import MainMenu from "./pages/MainMenu";
import Login from './pages/Login'

function App() {

  const { user } = UserState()

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={!user ? <Login /> : <MainMenu />} />
          <Route path='/' element={!user ? <Login /> : <MainMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
