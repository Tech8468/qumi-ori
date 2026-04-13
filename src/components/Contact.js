import { useState } from "react";
import Swal from "sweetalert2";
function Contact() {
  const [userData, setUserData] = useState({
    fName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const sendEmail = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
        "0d8f3312-e712-4263-b738-2bb1059309a5"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
      setUserData({
        fName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    } else {
      Swal.fire({
        title: "Unable to send",
        text: "Please try again in a few moments.",
        icon: "error",
      });
    }
  };

  return (
    <main className="page-main">
      <div className="container">
        <section className="section">
          <h2>Contact us</h2>
          <p className="section-intro">
            Send your product request and our team will respond with pricing,
            availability, and delivery options.
          </p>
          <div className="contact-layout">
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email</strong>
                <span>qumiori.consumables@gmail.com</span>
              </div>
              <div className="contact-item">
                <strong>Customer care line</strong>
                <span>+234-901-6454-261</span>
              </div>
              <div className="contact-item">
                <strong>Office address</strong>
                <span>25 Olayinka Street, Lagos</span>
              </div>
              <div className="contact-item">
                <strong>Business hours</strong>
                <span>Monday - Friday, 8:00 AM to 5:00 PM</span>
              </div>
            </div>

            <form className="card contact-form" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Full name"
                name="name"
                value={userData.fName}
                onChange={(e) =>
                  setUserData({ ...userData, fName: e.target.value })
                }
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone number"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                required
              />
              <input
                name="company"
                type="text"
                placeholder="Company name"
                value={userData.company}
                onChange={(e) =>
                  setUserData({ ...userData, company: e.target.value })
                }
                required
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={userData.subject}
                onChange={(e) =>
                  setUserData({ ...userData, subject: e.target.value })
                }
                required
              />
              <textarea
                name="message"
                placeholder="How can we help?"
                value={userData.message}
                onChange={(e) =>
                  setUserData({ ...userData, message: e.target.value })
                }
                required
              />
              <button type="submit" className="btn btn-primary">
                Submit request
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
