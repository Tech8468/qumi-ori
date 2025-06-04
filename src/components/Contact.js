import { useState } from "react";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
function Contact() {
  // const [err, setErr] = useState(false);
  // const navigate = useNavigate();
  // let localStorageData = localStorage.getItem("user-register");
  // let userArray = [];
  // const [userData, setUserData] = useState({
  //   id: "",
  //   fName: "",
  //   subject: "",
  //   email: "",
  //   message: "",
  // });

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   if (
  //     userData.fName === "" ||
  //     userData.subject === "" ||
  //     userData.email === "" ||
  //     userData.message === ""
  //   ) {
  //     setErr(true);
  //   } else {
  //     if (localStorageData) {
  //       userArray = JSON.parse(localStorageData);
  //     }
  //     userArray.push(userData);
  //     localStorage.setItem("user-register", JSON.stringify(userArray));
  //     alert("Successfuly registered, continue to Login");
  //     navigate("/login");
  //     setUserData({
  //       fName: "",
  //       subject: "",
  //       email: "",
  //       message: "",
  //     });
  //     setErr(false);
  //   }
  // };

  // const form = useRef();
  // const [err, setErr] = useState(false);
  // const emailSecret = process.env.REACT_APP_EMAIL_SECRET;

  const [userData, setUserData] = useState({
    id: "",
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

    formData.append("access_key", "0d8f3312-e712-4263-b738-2bb1059309a5");

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
    }
  };

  return (
    <div className="contactPoint">
      <div className="section1">
        <div className="col">
          <div>
            <img src="" alt="" />
            <h1>Email</h1>
          </div>
          <div>
            <p>qumiori.consumables@gmail.com</p>
          </div>
        </div>
        <div className="col">
          <div>
            <img src="" alt="" />
            <h1>Customer Care Line</h1>
          </div>
          <div>
            <p>+234-901-6454-261</p>
          </div>
        </div>
        <div className="col">
          <div>
            <img src="" alt="" />
            <h1>Office Address</h1>
          </div>
          <div>
            <p>#25, Olayinka street, Lagos</p>
          </div>
        </div>
      </div>
      <div className="section2">
        <form className="form" onSubmit={sendEmail}>
          <div>
            <input
              type="text"
              placeholder="Enter full name"
              name="name"
              value={userData.fName}
              onChange={(e) =>
                setUserData({ ...userData, fName: e.target.value })
              }
              required
            />
            {/* {err === true && userData.fName === "" ? (
              <span>Full name required</span>
            ) : null} */}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              required
            />
            {/* {err === true && userData.email === "" ? (
              <span>Email required</span>
            ) : null} */}
          </div>
          <div>
            <input
              name="phone"
              type="number"
              placeholder="Enter phone number"
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              required
            />
            {/* {err === true && userData.email === "" ? (
              <span>Email required</span>
            ) : null} */}
          </div>
          <div>
            <input
              name="company"
              type="text"
              placeholder="Enter company name"
              value={userData.company}
              onChange={(e) =>
                setUserData({ ...userData, company: e.target.value })
              }
              required
            />
            {/* {err === true && userData.email === "" ? (
              <span>Email required</span>
            ) : null} */}
          </div>
          <div>
            <input
              name="subject"
              type="text"
              placeholder="Enter subject"
              value={userData.subject}
              onChange={(e) =>
                setUserData({ ...userData, subject: e.target.value })
              }
              required
            />
            {/* {err === true && userData.subject === "" ? (
              <span>Subject required</span>
            ) : null} */}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Enter message"
              value={userData.message}
              onChange={(e) =>
                setUserData({ ...userData, message: e.target.value })
              }
              required
            />
            {/* {err === true && userData.message === "" ? (
              <span>Field required</span>
            ) : null} */}
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
      <div className="section3">
        <div className="workDays">
          <p>Mon. [8am - 5pm] |</p>
          <p>Tue. [8am - 5pm] |</p>
          <p>Wed. [8am - 5pm] |</p>
          <p>Thur.[8am - 5pm] |</p>
          <p>Fri. [8am - 5pm] </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
