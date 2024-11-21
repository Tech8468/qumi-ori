// import {Link} from "react-router-dom";
import Pix1 from "./img/qumi-logo.png";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";


function About() {


    return (
        <div className="aboutWrapper ">
            <div className="container">
                <div className="col1">
                    <div className="para1">
                        <h1>
                            What we do
                        </h1>
                        <h5>
                            We are a solutions company, providing Supplies, Distribution and Maintanance 
                            solutions to organisation's printing challenges with quality toner 
                            cartridges, ensuring quality and sharp print desired, as well
                             as reducing printing costs thereby, effectively contributing to a reduction in 
                             printing budgets.
                        </h5>
                        <p>
                            Every year, OEM-Printing Machines, are replaced with new models, we offer an
                            alternative solution to both old and new printers. Our trusted Brand, has
                            continued to come in all toner cartridge types to suit your printing needs.
                        </p>
                    </div>
                    <div className="para2">
                        <h1>Vision Statement</h1>
                        <p>Qumi-Ori Resources, proactively taking steps to become that top brand providing quality printing solutions to printing challenges within Africa's business sector.</p>
                    </div>
                    <div className="para3">
                        <h1>Brand Statement</h1>
                        <p>Quality, Efficient, Timely and Competitive service delivery are reasons you will rather patronise Qumi-Ori Resources.</p>
                    </div>
                </div>
                <div className="col2">
                    <div><img src={Pix1} alt="" /></div>
                </div>
            </div>
            {/* <div>
                <Link to="/register">Register to Sign-up</Link>
            </div> */}
        </div>
    )

}
export default About;