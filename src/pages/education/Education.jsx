
// import data from datajs
import {educationD} from "../../components/data";
// import css
import "./Education.css"

const Education = () => {
  return (

    <>
      <header className="centerFlexV edu__header">
        <h1>Education</h1>
        {/* <p></p> */}
      </header>

      <section className="section__Education bg-light">
        {educationD.map((session)=>{
          return(
            <article className="article__edu b-Shadow">
            <div className="article__edu__Right">
              <h5>{session.institute}</h5>
            </div>
            <div className=" article__edu__left">
              <h5>{session.degreeTitle}</h5>
              <div >
                <p>{session.status}</p>
                <p className="bg-text" style={{fontSize:".8rem",color:"white"}}>{session.duration}</p>
              </div>
              {/* <p>{session.summary}</p> */}
            </div>
          </article>
          )
        })}
        </section>
    </>

  )
}

export default Education