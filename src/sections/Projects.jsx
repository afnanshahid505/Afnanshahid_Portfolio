function Projects() {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        <div className="project-card">
          <h2>Log Based threat detection system</h2>
          <p>
            A Cyber Security project, that detects the threats using regex patterns
            and also Ml anomaly detection 
          </p>
          <h4>Tech: Python|Log Detection|Threat detection</h4>

          <div className="project-buttons">
            <a href="https://github.com/afnanshahid505/Log-Based-Threat-Detection-System.git" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            
          </div>
        </div>

        <div className="project-card">
          <h2>JWT Auth Backend API</h2>
          <p>
            Secure backend authentication system with JWT, role-based access,
            FastAPI, SQLAlchemy, and PostgreSQL.
          </p>
          <h4>Tech: FastAPI, JWT, SQLite</h4>

          <div className="project-buttons">
            <a href="https://github.com/afnanshahid505/Wep_App.git" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            
          </div>
        </div>

        <div className="project-card">
          <h2>TicTacToe game</h2>
          <p>
            Worked on react.js basics and implemented that through making this  simple
            Tictactoe game.
          </p>
          <h4>Tech: React.js</h4>

          <div className="project-buttons">
            <a href="https://github.com/afnanshahid505/React-TicTacToe.git" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>
        <div className="project-card">
          <h2>Advance Password Cracker</h2>
          <p>
            A Cyber Security project (Team project), that cracks passwords using the wordlist
            made for only educational purpose
          </p>
          <h4>Tech: Python|Wordlist attack</h4>

          <div className="project-buttons">
            <a href="https://github.com/afnanshahid505/Advance-Password-Cracker.git" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;