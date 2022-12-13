import './App.css';
import Form from './components/Form';
import Register from './components/Register';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Form/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>




   
    
      
    </div>
  );
}

export default App;
