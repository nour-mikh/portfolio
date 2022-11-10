import profile from './media/profile.jpg'
import Spline from '@splinetool/react-spline';

const FirstSection = (props) => {
    return(
        <>
        <section id = "firstSection">
            <div>
                    <h1>
                        Hello, I'm Nour!
                    </h1>
                    <h2>
                        I turn coffee into code and do some other stuff.
                    </h2>
            </div>
            
            <div id = "animation">
                <img className='profile' src= {profile} /> 
            </div>
        </section>
        </>
    )
}

export default FirstSection;