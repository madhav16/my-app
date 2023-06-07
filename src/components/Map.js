import React from "react";
import img from "./img/p2i1.png"
import img1 from "./img/p2i3.png"
import img2 from "./img/p2i2.png"
import './css/Map.css'
import { TiLocationOutline} from 'react-icons/ti';
import {FiPhoneForwarded,FiMail} from 'react-icons/fi';
function Map() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="mt-5">
                            <img src={img} className="img-fluid w-100 " />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0 custom-border">
                        <div className="row d-flex flex-column">
                            <div>
                                <div className="col-4">
                                    <div className="tdiv">
                                        <h1 className="t1">Contact</h1>
                                        <h1>Us</h1>

                                    </div>
                                </div>
                                <div className="col-4 w-100 d-flex justify-content-center p-0">
                                    <div className="">
                                        <img src={img1} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-4 w-100 p-0">
                                    <div className="ttdiv">
                                        <p className="line">Life <span className="line-after-e"></span> </p>
                                        <p>Is Short</p>
                                        <p>Book A Trip</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 p-0" >
                        <div className="h-100">
                            <div className="card border-0 d-flex justify-content-center w-100">
                                <div className="card-body h-100 ">

                                    <ul className="ull d-grid">
                                        <li>
                                            <TiLocationOutline size={20} className="icon" />
                                            <span className="txt-title">Company Address</span>
                                        </li>
                                        <li className="align-with-c">
                                            22 Cradle, EDI, Gandhinagar-Admedabad Rd, Next to Apollo Hospital, Bhat, Ahmedabad, Gujarat 382428
                                        </li>
                                        <li>
                                            <FiPhoneForwarded  size={20} className="icon" />
                                            <span className="txt-title">Contact Number</span>
                                        </li>
                                        <li className="align-with-c">
                                            99999 99999
                                        </li>
                                        <li>
                                            <FiMail size={20} className="icon" />
                                            <span className="txt-title">Customer Email ID</span>
                                        </li>
                                        <li className="align-with-c">
                                            info@webearl.com
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div>
                            <img src={img2} className="img-fluid w-100 mb-5 " />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Map;