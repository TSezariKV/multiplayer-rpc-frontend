import { BrowserRouter, Routes, Route} from 'react-router-dom'

import MainMenu from "./pages/MainMenu";
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<MainMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
