import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Contact() {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
    let localStorageData = localStorage.getItem("user-register");
    let userArray = [];
    const [userData, setUserData] = useState({
        id: "",
        fname: "",
        company: "",
        address: "",
        phone: "",
        email: "",
        description: "",
    });


    const addUser = (e) => {
        e.preventDefault();
        if (userData.fname === "" || userData.company === "" || userData.address === "" || userData.phone === "" || userData.email === "" || userData.password === "" || userData.description === "") {
            setErr(true);
        } else {
            if (localStorageData) {
                userArray = JSON.parse(localStorageData)
            }
            userArray.push(userData);
            localStorage.setItem("user-register", JSON.stringify(userArray));
            alert("Successfuly registered, continue to Login");
            navigate("/login");
            setUserData({
                fname: "",
                company: "",
                address: "",
                phone: "",
                email: "",
                description: "",
            });
            setErr(false);
        }

    }

    return (
        <div className="height">
            <div className="registerform">
                <form className="form" onSubmit={addUser}>
                    <div>
                        <input type="text" placeholder="Full Name" value={userData.fname} onChange={(e) => setUserData({ ...userData, firstname: e.target.value })} />
                        {err === true && userData.fname === "" ? <span>First name required</span> : null}
                    </div>
                    <div>
                        <input type="text" placeholder="Company Name" value={userData.lastname} onChange={(e) => setUserData({ ...userData, lastname: e.target.value })} />
                        {err === true && userData.company === "" ? <span>Last name required</span> : null}
                    </div>
                    <div>
                        <input type="text" placeholder="Company Address" value={userData.lastname} onChange={(e) => setUserData({ ...userData, lastname: e.target.value })} />
                        {err === true && userData.address === "" ? <span>Last name required</span> : null}
                    </div>
                    <div>
                        <input type="text" placeholder="Phone Number" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
                        {err === true && userData.phone === "" ? <span>Phone number required</span> : null}
                    </div>
                    <div>
                        <input type="email" placeholder="Email Address" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                        {err === true && userData.email === "" ? <span>Email required</span> : null}
                    </div>
                    <div>
                        <input type="text-area" placeholder="Enter order description" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                        {err === true && userData.description === "" ? <span>Pasword required</span> : null}
                    </div>
                    <button type="submit" >SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;