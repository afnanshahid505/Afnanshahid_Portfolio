import {useState} from "react";
function Contact() {
      const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSend = (e) => {
  e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=afnanshahid744@gmail.com&su=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");

    setSuccessMessage(
        "Gmail opened in a new tab. Please click Send there to deliver your message."
    );

    setFormData({
        name: "",
        email: "",
        message: "",
    });
};
        return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <h1>Let’s Work Together </h1>
        <p>
          Open to Full Stack Development, Cybersecurity, internships, and
          exciting opportunities. Feel free to reach out.
        </p>

        <div className="contact-details">
            <a href="afnanshahid744@gmail.com" className="contact-card">
                afnanshahid744@gmail.com
            </a>

            <a
                href="https://www.linkedin.com/in/afnan-shahid-669302349/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
            >
                LinkedIn
            </a>

                <a
                    href="https://github.com/afnanshahid505/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                >
                    GitHub
                </a>
            </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSend}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        {successMessage && (
            <p className="success-message">{successMessage}</p>
        )}
      </div>
    </section>
  );
}

export default Contact;