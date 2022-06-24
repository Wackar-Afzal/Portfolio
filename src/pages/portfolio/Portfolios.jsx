import React from 'react'
import './portfolio.css'

const Portfolio = () => {

  const data=[{
    id:1,
    name:'DashBoard with multiple Graphs',
    image: require('./ProjectImgs/foriDashBoard.png'),
    githubLink:'https://github.com/Wackar-Afzal/Dashboard',
    viewProject:'https://foridashboarddemo.netlify.app',
  },{
    id:3,
    name:'Website for a tech company',
    image: require('./ProjectImgs/fori.png'),
    githubLink:'https://fori.netlify.app/',
    viewProject:'https://fori.netlify.app/',
  },{
    id:2,
    name:'Goal Settler App for Multiple Users',
    image: require('./ProjectImgs/dash.png'),
    githubLink:'https://github.com/Wackar-Afzal/MERN-Stack-Project',
    viewProject:'https://goalsettler.herokuapp.com/',
  },
{
    id:4,
    name:'This is a portfolio item title',
    image: 'https://nofil.site/static/media/portfolio2.441a628dadddbe81a6b4.png',
    githubLink:'nofil.netlify.app',
    viewProject:'nofil.netlify.app',
  },
{
    id:5,
    name:'This is a portfolio item title',
    image: 'https://nofil.site/static/media/portfolio2.441a628dadddbe81a6b4.png',
    githubLink:'nofil.netlify.app',
    viewProject:'nofil.netlify.app',
  },
{
    id:6,
    name:'This is a portfolio item title',
    image: 'https://nofil.site/static/media/portfolio2.441a628dadddbe81a6b4.png',
    githubLink:'nofil.netlify.app',
    viewProject:'nofil.netlify.app',
  }
]




  return (
  <section id='portfolio'>
    <div className='edu__header centerFlexV'>
      <h1 className=''>Portfolio</h1>
      <p>My projects</p>
      </div>
    <div className="container portfolio__container">
    {data.map((obj)=>{
      return(
      <article className='portfolio__items bg-light' key={obj.id}>
        <div className='portfolio__item-image'>
          <a href={obj.viewProject} target='_blank' rel="noreferrer">
            <img className='projectImage' src={obj.image} alt="" />
          </a>
         </div>
          <h3>{obj.name}</h3>
          <div className="portfolio__items-cta">
          <a className='cta_link btn' href={obj.githubLink} target='_blank' rel="noreferrer">Code</a>
          <a className='btn btn-primary cta_link' href={obj.viewProject} target='_blank' rel="noreferrer">View Project</a>
          </div>
      </article>
      )
    })}

    </div>
  </section>
  )
}
export default Portfolio