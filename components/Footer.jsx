import '../css/Page.css'
import '../css/Footer.css'
import resume from '../src/assets/AsiaRouse_Resume.pdf'

function Footer(props) {
    return(
        <div className='page footer'>
            <div className='footer-wrapper'>
                <ul className='ul-links'>
                    <li><a href='#landing' className='link-hover inline'>home</a></li>
                    <li><a href='#about' className='link-hover inline'>about me</a></li>
                    <li><a href='#projects' className='link-hover inline'>my projects</a></li>
                    <li><a href='#contact' className='link-hover inline'>contact</a></li>
                    <li><a href={resume} target='_blank' className='link-hover inline'>resume</a></li>
                    <li><a href='https://github.com/asiarouse00' target='_blank' className='link-hover inline'>github</a></li>
                    <li><a href='https://www.linkedin.com/in/asia-rouse-824284233/' target='_blank' className='link-hover inline'>linkedin</a></li>
                </ul>
                <ul className='ul-info'>
                    <li><a className='link-hover inline' href='https://github.com/asiarouse00/portfolio' target='_blank'>source code</a></li>
                    <li>made with react & lots of patience</li>
                    <li>all icons from <a className='link-hover inline' href='https://icons8.com/' target='_blank'>icons8</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer