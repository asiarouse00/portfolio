import '../css/Project.css'

function SingleProject(props) {
        
    return(
        <>
            <div className='project'>
                <img src={props.image} />
                <ul id='project-ul'>
                    <li><h3>{props.title}</h3></li>
                    <li><h4>made with: {props.langs}</h4></li>
                    <li><p>{props.desc}</p></li>
                    <a href={`https://www.github.com/asiarouse00/${props.source}`} target='_blank'>
                        <li className='project-link'>source code</li>
                    </a>
                    <a style={{ opacity: props.demo == '' ? 0 : 1 }} href={`https://asiarouse00.github.io/${props.demo}`} target='_blank'>
                        <li className='project-link'>live demo</li>
                    </a>
                </ul>
                {   
                    //<a href={props.demo}><button className='button link'>Live Demo</button></a>
                }
            </div>
        </>
    )
}

export default SingleProject