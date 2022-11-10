import travelApp from './media/travel-app.png';
import resume from './media/Nour_Mikhael_Resume.pdf';

const ThirdSection = () => {
    return(
        <>
        <main id="thirdSection">
            <section id="project">
                <h1>Here's my favorite project you can visit <a href='https://plan-your-trip-travel-app.web.app/index.html' target='_blank'>here</a></h1>
                <img src = {travelApp}></img>
                <h1>Here's also some stuff about me!</h1>
            </section>
            <main id = "thirdSectionCards">
                <div><b>Coding Trainer</b> <br/>
                    Python, Arduino, Scratch, HTML and CSS to teenagers.
                </div>
                <div><b>Assistant Under-Secretary General</b><br/>
                    I conduct research and develop content.
                </div>
                <div><b>President of Youth Club</b> <br/>
                    I conduct sessions and organizing missions.
                </div>
                <div><b>Github</b> <br/>
                    I have a github profile you can visit <a href='https://github.com/nour-mikh' target='_blank'> here.</a>
                </div>
                <div>
                    <b>I've made it to a few articles!</b> <br/>
                    <a href='https://www.lorientlejour.com/article/1315148' target='_blank'>L'Orient le Jour</a> <br/>
                    <a href='https://news.lau.edu.lb/2022/students-innovation-tops-google-solution-challenge.php' target='_blank'>LAU News</a> <br/>
                    <a href ='https://www.the961.com/lau-students-topped-google-solution-challenge-mena/' target='_blank'>The961</a> <br/>
                </div>
                <div>Here's also a copy of my Resume <br/>
                    <a href={resume} download = "Nour Mikhael Resume" target='_blank'>Resume</a>
                </div>     
            </main>
        </main>
        </>
    )
}

export default ThirdSection;