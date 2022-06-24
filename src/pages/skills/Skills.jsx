// import css
import "./Skills.css";
// import data
import { skillsPageD } from "../../components/data";
// import slider from home
import {Slider} from "../Home/Home";

const Skills = () => {
  return (
    <>
      <header className="centerFlexV edu__header">
      <h1>Skills</h1>
      <p className="color-text">Udemy certified full stack developer with 6+ months experience in building interactive websites and comfortable in using following technologies.</p>
      </header>
      <section className="skill__section">
        {skillsPageD.map((skill)=>{
         return( <article>
          <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front bg-light centerFlexV">
              <div>
              <img className="img" src={require(`./skillIcons/${skill.mainImg}`)} alt="Avatar" / >
              </div>
              <h3>{skill.mainP}</h3>
            </div>
          <div className="flip-card-back bg-light">
          <h4 className="color-sec">{skill.sub1h}</h4>
            <div className="flip-card-back-des  b-Shadow">
              <img src={require(`../Home/imgs/${skill.sub1Img}`)} style={{height:"3rem",width:"auto"}} alt="img"/>
              <p className="color-text">{skill.sub1P}</p>
            </div>
            <h4 className="color-sec">{skill.sub2h}</h4>

            <div className="flip-card-back-des  ">
              <img src={require(`../Home/imgs/${skill.sub12mg}`)} style={{height:"3rem",width:"auto"}} alt="img"/>
              <p className="color-text">{skill.sub2P}</p>
            </div>
          </div>
          </div>
          </div>
        </article>
        )
        })}

      </section>
      <Slider/>
    </>

    )
}

export default Skills