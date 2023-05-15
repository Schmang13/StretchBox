import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './stylesheets/App.scss';
import { PrivateRoutes } from './components/privateRoutes';
import Home from './components/home';
import Login from './components/login';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path='/' element={<Home/>} />  
        </Route>

        <Route path='/login' element={<Login/>} />   
      </Routes>
    </Router>
    <h1>Testing</h1>
    </div>
  )     
}

export default App;