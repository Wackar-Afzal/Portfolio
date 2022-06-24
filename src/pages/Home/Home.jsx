
import {Link} from "react-router-dom";

// import css..........
import "./Home.css";
// import icons.......
import AccessTimeFilledTwoToneIcon from '@mui/icons-material/AccessTimeFilledTwoTone';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import NightsStayIcon from '@mui/icons-material/NightsStay';
// import logos from data.js...........
import {logos} from "../../components/data";
const Home = () => {



  return (
       <>
        {/* .................header.............................. */}

        <header className='centerFlexH bg-light home__header'>
          <div className="floating">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          </div>
          <div className=" home__header__p">
            <h1><b>I’m Waqar Afzal<br/><p className="dancing__text  "><span>Front-End <d>Developer</d></span><span>Full-Stack <d>Developer</d></span><span>Backend <d>Developer</d></span></p> </b></h1>
            <p>I build interactive websites that run across platforms & devices.</p>
             <button className="btn"><Link className="Link" to="/contact" >Hire Me</Link></button>
            </div>
          <div className="centerFlexH " >
             <img className='home__Header__img' src={require('../../components/LeftSideBar/waqarDp.png')} alt="img"/>
          </div>
        </header>

        {/* ...............section1................. */}

        <section className="home__section1 centerFlexH bg-main ">
          <article  className="centerFlexV">
           <AccessTimeFilledTwoToneIcon className="bg-text"/>
           <p >2,000+</p>
           <p>Working Hours</p>
          </article>
          <article  className="centerFlexV">
           < CodeOffOutlinedIcon className="bg-text"/>
           <p >15,000+</p>
           <p>Lines Of Code</p>
          </article>
          <article  className="centerFlexV">
           <LocalCafeIcon  className="bg-text"/>
           <p >500+</p>
           <p >Cups of Coffee</p>
          </article>
          <article  className="centerFlexV">
          < NightsStayIcon className="bg-text"/>
          <p >200+</p>
          <p>Sleepless Nights</p>
          </article>
        </section>

        {/* ...............saction2..................... */}

         <section className="Home__section2 bg-light">
          <center><h2 className="bg-text" style={{color:"white"}}>My Bio</h2></center>
          <div >
              <img className="Home__section2__img"src={require("./imgs/bio.png")} alt="img"/>
            <p style={{padding:"3rem"}} className=" color-text text-justify">
              <i style={{color:"var(--color-sec)"}}><b>bio</b></i> <br/>
              I'm a Full Stack web developer based in Islamabad, Pakistan. With a speciality in Front End Development. I possess a vast array of knowledge in many different front end and back end languages, responsive frameworks and databases management syatems. My objective is simply to be the best web developer that I can be and to contribute to the technology industry.
              <br/>
              Although I'm very familiar with using frameworks, my websites are primarily hand-coded using HTML5, CSS3, Bootstrap, React & JavaScript.
              <br/>
              With a strong emphasis on "Progressive Enhancement", I look for creative ways to push the boundaries of website development without compromising on browser support while following best code practices.
              <br/>
              In a quest for always keeping myself updated, I read books and attend seminars & meetups.
              <br/>
              <i style={{color:"var(--color-sec)"}}><b>/bio</b></i>
            </p>
          </div>
        </section> 

        {/* ............................section3.................... */}
    <section className=" section__3 ">
     
        <Slider/>
        
    </section>

 
       
      </>
  )
}

export default Home

export const Slider=()=>{
  return(
    <>
    <center><h2 className="bg-text"style={{color:"white" }}>Technology Used</h2></center>
    <div className="marquee__container">
    <div className="marquee">
    {logos.map((logo,index)=>{
      return(
        <div className="marquee_img">
          <img key={index} alt="img" style={{width:"auto",height:"8rem",margin:"2rem 2rem "}} src={require(`./imgs/${logo}`)}/>
          </div>
      )
    })}
    </div>
    </div>
    </>
  )
}
