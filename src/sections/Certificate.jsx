function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <h1>Certifications</h1>

      <div className="cert-grid">
        <div className="cert-card">
          <h2>NPTEL</h2>
          <p>
            Completed certification on privacy and security in online social media .
          </p>
          <a
            href="/certificates/nptel.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>
          <div className="cert-card">
          <h2>Cybersecurity Hackathon</h2>
          <p>
            certificate of excellence provided during the Hackathon,
            in cybersecurity tool exposure. , conducted by Supraja Technologies.
          </p>
          <a
            href="/certificates/certificate_of_excellence.jpeg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>

        <div className="cert-card">
          <h2>Cybersecurity Internship</h2>
          <p>
            Internship completion certificate demonstrating practical SOC, VAPT,
            and cybersecurity tool exposure.
          </p>
          <a
            href="/certificates/Internship_completion.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Certifications;