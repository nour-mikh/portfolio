import explaining from './media/explaining.jpg';


const SecondSection = () => {
    return(
        <>
        <div id = "secondSection" >
            <Card/>
        </div>
        </>
    )
}

const Card = (props) => {
    return(
        <>   
        <div>
            <h1 id='about-me'>About Me</h1>
            <p>I've always loved the logic behind programming and wrote my first code at the age of 14.
            Dynamic and motivated, I'm a 19-year-old web developer who loves to challenge herself and acquire new skills. I have thus used what I acquired to win <b>1st place in the Google Solution Challenge - MENA Region. </b><br/>
            I'm interested in hardware and learning how computers work, as well as international politics and human rights.
            I love being in charge, having responsibilities, and working in a team. This made me pursue Google's Project Management Program.<br/>
            Additionally, I'm a fast learner and I enjoy discovering new technologies.
            I speak Arabic natively, I'm also fluent in French and English, and currently learning Spanish. 
            No matter what circumstances life puts me in, especially that I live in Lebanon, ambition, curiosity and determination keep me going. 
            <br/><em><b>Oh, and by the way, this is a picture of me explaining to a class!</b></em></p>
        </div>

        <img src={explaining}/>
        </>
    )
}


export default SecondSection;
