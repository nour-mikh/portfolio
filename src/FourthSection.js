import shape from './media/shape.png'

const FourthSection = () => {
    return(
        <>
        <section id='fourthSection'>
            <div>
                <h1>You can contact me</h1>
                <ul>
                    <li>By email <a href='mailto:nourmikhael.nm@gmail.com'>nourmikhael.nm@gmail.com</a></li>
                    <li>Or</li>
                    <li>You can visit my LinkedIn profile on <a href='https://www.linkedin.com/in/nour-mikhael/'>linkedin.com/in/nour-mikhael/</a></li>
                    <li>You can also visit my Github Profile on <a href='https://github.com/nour-mikh'>github.com/nour-mikh</a></li>
                </ul>

                <h1>Thank you for your visit!</h1>
            </div>

            <div>
                <img src = {shape}></img>
            </div>
        </section>
        </>
    )
}

export default FourthSection;