import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import CreateBlog from './pages/CreateBlog';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/createblog' element={<CreateBlog/>}/>

     
      <Route path='*' element={<Page404/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
