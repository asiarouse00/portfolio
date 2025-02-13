import '../css/Page.css'
import '../css/Contact.css'
import github from '../src/assets/logos/github.png'
import linkedin from '../src/assets/logos/linkedin.png'

function Contact(props) {

    return (
        <div className='page contact-page'>
            <h2 className='form-heading'>let's get in contact!</h2>
            <div className='form-icon-container'>
                <div className='form-wrapper'>
                    <form 
                        className='form'
                        action='mailto:asia.rouse00@gmail.com'
                        method='post'
                        encType='text/plain'
                        >
                        <div className='inner-form'>
                            <input type="text" placeholder='your name' required/>
                        </div>
                        <div className='inner-form'>
                            <input type="email" placeholder='your_email@email.com' required/>
                        </div>
                        <div className='inner-form'>
                            <textarea placeholder='i love knitting too! you are so fun and cool!' required></textarea>
                        </div>
                        <input type="submit" value='send!' className='button' id='submit'/>
                    </form>
                </div>
                <div className="icons-container">
                    <a href='https://github.com/asiarouse00' target='_blank'>
                        <img src={github} className='contact-icon' />
                        <span className='contact-icon-link'><h3>github</h3></span>
                    </a>
                    <a href='https://www.linkedin.com/in/asia-rouse-824284233/' target='_blank'>
                        <img src={linkedin} className='contact-icon' />
                        <span className='contact-icon-link'><h3>linkedin</h3></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact