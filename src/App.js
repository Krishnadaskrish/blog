// import logo from './logo.svg';
// import './App.css';
// import Navbar from './components/Navbar';
// import Newblog from './components/Newblog';
// import { Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import { MyContext } from './Context';



// function App() {
//   const [Title,setTittile]=useState([])
  
//   return (
//     <div className="App">
//       <MyContext.Provider value={{Tittle,setTittile}}>
//       <Routes>
//         <Route path='/' element={<Navbar/>}/>
//         <Route path='/log' element={<Newblog/>}/>
//       </Routes>
//       </MyContext.Provider>
      
     
//     </div>
//   );
// }

// export default App;
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Newblog from './components/Newblog';
import Subblog from './components/Subblog';
import Navbar from './components/Navbar';
import {MyContext} from './context/Context';
import { useState } from 'react';




function App() {
  const [title, setTitle] = useState([]);
  return (
    <>
  
     
        <MyContext.Provider value={{ title, setTitle }}>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/blogAdd" element={<Newblog />} />
            <Route path="/viewblog/:id" element={<Subblog />} />
          </Routes>
        </MyContext.Provider>
      
   
    </>
  );
}

export default App;
