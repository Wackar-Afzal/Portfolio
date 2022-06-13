import React,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
// importing pages
import Contact from "./pages/contact/Contact";
import Education from "./pages/education/Education";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/portfolio/Portfolios";
import Skills from "./pages/skills/Skills";
// import SideBars
import LeftSideBar from "./components/LeftSideBar/LeftSideBar";
import RightSideBar from "./components/RightSideBar/RightBar";
// mui icon
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
// state
import { useStateContext } from './Context/contextProvider';
function App() {
  const { activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize >= 1200) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);



  return (
    <>
    <Router>
      <main className="App bg-main">
      
      <button onClick={()=>setActiveMenu(!activeMenu)}className='hamberger'>{!activeMenu?<InfoTwoToneIcon />:<CancelOutlinedIcon />}</button>
        {
         activeMenu?<>
          <aside className='leftbar bg-light c-Shadow'>
          <LeftSideBar/>
        </aside></>:
        null
        }

        <section className='pages bg-transparent'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
          <footer className='bg-text'>
            CopyRight@reserved
         </footer>
         <div className='empty__span' ></div>
        </section>

        <nav className='rightbar bg-light c-Shadow'>
          <RightSideBar/>
        </nav>
      
     
      </main>
      </Router> 


    </>
    
  );
}

export default App;
