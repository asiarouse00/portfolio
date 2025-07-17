import '../css/Page.css'
import '../css/Landing.css'
import resume from '../src/assets/AsiaRouse_Resume.pdf'

function Landing(props) {

  return (
    <>
        <div className='page landing-page'>
          
          <div className='landing'>
            <p>
              hi, i'm<br />
              <span className='name'>asia rouse</span><br />
            </p>
            <div className="headings">
              <span>
                front-end developer<br />
                js react engineer<br />
                ui designer<br />
                devoted knitter<br />
              </span>
            </div>
            <div className="buttons">
              <a href='#projects'><button className='button'>projects</button></a>
              <a href={resume} target='_blank'><button className='button'>resume</button></a>
              <a href='#contact'><button className='button'>contact</button></a>
            </div>
          </div>
          
        </div>
    </>
  )
}

export default Landing