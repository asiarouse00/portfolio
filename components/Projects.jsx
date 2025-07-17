import '../css/Page.css'
import SingleProject from './SingleProject'
import left_arrow from '../src/assets/left-arrow.png'
import right_arrow from '../src/assets/right-arrow.png'
import tracker from '../src/assets/projects/acnl-tracker.png'
import chrasia from '../src/assets/projects/chrasia-connections.png'
import extension from '../src/assets/projects/connections.png'
import say_hello from '../src/assets/projects/say-hello.png'

function Projects(props) {

    window.addEventListener("DOMContentLoaded", function() {
        const cards = document.querySelectorAll(".card");
        const prevButton = document.getElementById('prev-button')
        const nextButton = document.getElementById('next-button')

        let current = 0
        prevButton.addEventListener('click', function() {
            current == 0 ? current = (cards.length - 1) : current--
            prevCard()
        })
        nextButton.addEventListener('click', function() {
            current == (cards.length - 1) ? current = 0 : current++
            nextCard()
        })

        function prevCard() {
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove('prev')
                cards[i].classList.remove('active')
                cards[i].classList.remove('next')

                if (current == 0) {
                    cards[(cards.length - 1)].classList.add('prev')
                }

                if (current == (cards.length - 1)) {
                    cards[0].classList.add('next')
                }

                if (i == current-1) {
                    cards[i].classList.add('prev')
                }
                else if (i == current) {
                    cards[i].classList.add('active')
                }
                else if (i == current+1 ) {
                    cards[i].classList.add('next')
                }
            }
        }
        
        function nextCard() {
            for (let i = 0; i < cards.length; i++) {
                cards[i].classList.remove('prev')
                cards[i].classList.remove('active')
                cards[i].classList.remove('next')

                if (current == (cards.length - 1)) {
                    cards[0].classList.add('next')
                }

                if (current == 0) {
                    cards[(cards.length - 1)].classList.add('prev')
                }

                if (i == current-1) {
                    cards[i].classList.add('prev')
                }
                else if (i == current) {
                    cards[i].classList.add('active')
                }
                else if (i == current+1) {
                    cards[i].classList.add('next')
                }
            }
        }
    })

    return (
        <>
            <div className='page projects-page'>

                <h2 className='projects-header'>explore my projects:</h2>
                <div className='carousel-wrapper'>
                    <img src={left_arrow} className='arrow' id='prev-button'/>
                    <div className='carousel'>
                        <div className='card active'>
                            <SingleProject
                                title='animal crossing progress tracker'
                                langs='react, public api'
                                desc='keeps track of in-game collection & progress using local storage.'
                                demo=''
                                source='portfolio-website'
                                image={tracker}
                            />
                        </div>
                        <div className='card next'>
                            <SingleProject
                                title='nyt connections clone'
                                langs='vanilla javascript'
                                desc='a clone of the nyt connections game, made for my partner as an anniversary gift.
                                    comes with instructions to customize and make your own game!'
                                demo='nyt-connections-clone/'
                                source='nyt-connections-clone'
                                image={chrasia}
                            />
                        </div>
                        <div className='card'>
                            <SingleProject
                                title='google chrome dark mode extension'
                                langs='css'
                                desc='a downloadable extension to run the nyt connections game in dark mode on google chrome.'
                                demo=''
                                source='connections-dark-mode-extension'
                                image={extension}
                            />
                        </div>
                        <div className='card'>
                            <SingleProject
                                title='say hello'
                                langs='vanilla javascript, public api'
                                desc='a small web application to say hello in different languages.'
                                demo='say-hello/'
                                source='say-hello'
                                image={say_hello}
                            />
                        </div>
                    </div>
                    <img src={right_arrow} className='arrow' id='next-button'/>
                </div>            
            </div>
        </>
    )

}

export default Projects