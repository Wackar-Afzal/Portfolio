
// import icons
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { WhatsApp } from '@mui/icons-material';
import LayersSharpIcon from '@mui/icons-material/LayersSharp';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';
// import css
import "./leftbar.css";
// import data
import {personalInfo,skills,extraskills} from "../data";
// state fromm context


const LeftSideBar = () => {

 

  let size={fontSize:"1rem",transition:"all .2s"}

    
  return (
    <>
   
       <header className="leftbar__header centerFlexV b-Shadow">
      <div className='img__Controller'>
        <img className="img" src={require("./waqarDp.png")} alt="img"/>
      </div>
      <span className='dot'></span>
      <h3>Waqar Afzal</h3>
      <h5 className='color-text'>Full Stack Developer</h5>
      <div className="socialmediaIcon centerFlexH ">
        <a href="http://www.instagram.com/rai.waqar.56" target="_blank" rel="noreferrer noopener" className='SMicons centerFlexH'><InstagramIcon sx={size}/></a>
        <a href="http://www.facebook.com/rai.waqar.56" target="_blank"rel="noreferrer noopener"  className='SMicons centerFlexH'><FacebookIcon sx={size}/></a>
        <a     href="https://wa.me/+923324166964" target="_blank" rel="noopener noreferrer" className='SMicons centerFlexH'><WhatsApp sx={size}/></a>
      </div>
    </header>
    <section className='Info'>
      <PersonalInfoF/>
      <Skill/>
      <ExtraSkill/>
    </section>
    <div className='centerFlexH'>
       <button className='btn centerFlexH'><p>Download Cv</p><DownloadSharpIcon/></button>
    </div>   </> 
  )
}

export default LeftSideBar;


const PersonalInfoF=()=>{
  return(
  <article className='personalInfo b-Shadow'>
    <h3>Personal Info</h3>
  {personalInfo.map((line,i)=>{
    return(
      <div className='centerFlexH' style={{justifyContent:"space-between"}} key={i}>
        <p className='bg-text' style={{padding:".3rem"}} >{line.h}</p>
          <p className='color-text' style={{color:i===2?"green":null}}>{line.v}</p>
      </div>
    )
  })}
</article>)
}

const Skill=()=>{
  return(
  <article className='personalInfo b-Shadow'>
    <h3>Skills</h3>
  {skills.map((line,i)=>{
    return(
    <div key={i}>
      <div className='centerFlexH' style={{justifyContent:"space-between"}}>
        <p>{line.skill}</p>
        <p className='color-text'>{line.value+"%"}</p>
      </div>
      <div className='percentageBar '>
        <span style={{width:line.value+"%"}}></span>
      </div>
   
    </div>
    )
  })}
</article>)
}

const ExtraSkill=()=>{
  return(
    <article className='personalInfo b-Shadow'>
      <h3>Extra Skills</h3>
    {extraskills.map((line,i)=>{
      return(
      <div key={i}>
        <div className='centerFlexH' style={{justifyContent:"unset",gap:"1rem"}}>
          <LayersSharpIcon style={{fontSize:"1.2rem",color:"var(--bg-text)"}}/>
          <p className='color-text'>{line.p}</p>
        </div>
      </div>
      )
    })}
  </article>)
}