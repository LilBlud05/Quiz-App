import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react"; 
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css'
import Two from "./pages/Two";
import One from "./pages/One";
import Three from "./pages/Three";
import Four from "./pages/Four";
import Five from "./pages/Five";
import NotFound from "./pages/NotFound";


export const PageContext = createContext(0);

function App() {

  const [pages, setPages] = useState(1);
  

  return (
    <>

    <PageContext value={pages}>
         <Router> 
            <NavBar/>

            <Routes>
              <Route path="/" element={<One setPages={setPages}/>} />
              <Route path="/2" element={<Two setPages={setPages}/>} />
              <Route path="/3" element={<Three setPages={setPages}/>} />
              <Route path="/4" element={<Four setPages={setPages}/>} />
              <Route path="/5" element={<Five setPages={setPages}/>} />
              <Route path="*" element={<NotFound />} />
              
              
            </Routes>
            <Footer />
         </Router>
      </PageContext>
  
      
    </>
  )
}

export default App
