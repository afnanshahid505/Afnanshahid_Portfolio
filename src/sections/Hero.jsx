import profile from "../assets/profile.jpeg";
function Hero(){
    return (
        <section className="hero" id="home">
            <div className="hero-left">
                <h1>Hello I am Afnanshahid</h1>
                <h2>Full stack Developer | Cybersecurity Analyst</h2>
                <p>
                I build scalable web applications and secure digital systems with modern
                development and cybersecurity practices.
                </p>
                <div className="hero-buttons">
                   <a href="#projects"> <button>View Projects</button></a>
                    <a href="AfnanShahidResume.pdf" download><button>Download Resume</button></a>
                </div>
           </div> 
            <div className="hero-right">
            <img src={profile} alt="profile" />
            </div>
        </section>

    );
}
export default Hero;