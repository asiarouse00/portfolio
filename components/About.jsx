import '../css/Page.css'
import '../css/About.css'
import selfie from '../src/assets/me.png'
import cplusplus from '../src/assets/logos/cplusplus.png'
import css from '../src/assets/logos/css.png'
import figma from '../src/assets/logos/figma.png'
import js from '../src/assets/logos/js.png'
import python from '../src/assets/logos/python.png'
import react from '../src/assets/logos/react.png'

function About(props) {
    return (
        <>
            <div className='page about-page'>
                <div className='description'>
                    <div className='header'>
                        <span className='photo-wrapper-shadow'>
                            <div className='photo-wrapper'>
                                <img src={selfie} />
                            </div>
                        </span>
                        <h3>meet the developer!</h3>
                    </div>
                    <p>
                    starting my journey in visual arts, i learned the importance of visual design. as my passion evolved 
                    and i transitioned into programming, i adapted my artistic background to my technical knowledge.
                    now, with a solid understanding of both, i design & create web applications and experiences from the mind
                    of both a designer and a developer. combining all of my strengths, i approach projects with an eye 
                    for aesthetics, engagement, and functionality.
                    </p>
                    <p>
                    in my personal time, my main hobbies are knitting and enjoying music, although i tend 
                    to bounce around different projects. experiencing live music is one of my greatest joys in life!
                    </p>
                </div>
                <div className="technologies">
                    <h2>current technologies:</h2>
                    <div className='technologies-container'>
                        <div className='tech'>
                            <img src={cplusplus} />
                            <h4>c++</h4>
                        </div>
                        <div className='tech'>
                            <img src={css} />
                            <h4>css</h4>
                        </div>
                        <div className='tech'>
                            <img src={figma} />
                            <h4>figma</h4>
                        </div>
                        <div className='tech'>
                            <img src={js} />
                            <h4>javascript</h4>
                        </div>
                        <div className='tech'>
                            <img src={python} />
                            <h4>python</h4>
                        </div>
                        <div className='tech'>
                            <img src={react} />
                            <h4>react</h4>
                        </div>
                    </div>
                </div>            
            </div>
        </>
    )
}

export default About