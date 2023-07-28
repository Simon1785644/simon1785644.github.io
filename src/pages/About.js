const About = () => {
    return (
        <div class="about-border">
            <img src="images/pexels_idea.jpg" alt="idea" style={{maxWidth:"100%"}}/>
            <p>I'm start learning linux and program languages in february, 2023.<br/>
                Still newbie in programing. 
                At least I can get rid of Microsoft OS.
            </p>
            <h2>Skills</h2>
            <div>
                <label>
                    html<br/> <progress value="70" max="100"></progress><br/>
                    css<br/> <progress value="50" max="100"></progress><br/>                    
                    Reactjs<br/> <progress value="30" max="100"></progress><br/>                    
                    JAVA<br/> <progress value="20" max="100"></progress>
                </label>
            </div> 
        </div>
    );
}

export default About;