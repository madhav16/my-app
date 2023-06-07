import React from "react";
import img from "./img/p5i1.png"
import { FaStar } from 'react-icons/fa';
import './css/BookingDetails.css'
function BookingDetails() {
    return (
        <>
            <div className="container mt-3">

                <div className="row mt-3 mb-4">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="h-100">
                            <div className="row d-flex flex-column">
                                <div className="col-lg-4 w-100 rounded top-c">
                                    <div className="d-flex mt-3 ">
                                        <p>Ahmedabad to Mumbai</p>
                                        <FaStar className="star custom-padding" /> <FaStar className="star" /> <FaStar className="star" /> <FaStar className="star" /> <FaStar className="star" /> <FaStar className="star" /> <p>(11,000)</p>
                                    </div>
                                    <div>
                                        <p>Rs 18,000 </p>
                                        <p>Per Person on Twin sharing</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 w-100">
                                    <div className="">
                                        <div className="row border rounded  ">
                                            <div className="mt-3">
                                                <div className="col-12">

                                                    <p className="text-center b-text mb-4">Booking Details</p>

                                                    <div class="form-floating mb-3">
                                                        <input type="text" class="form-control rounded-0 custom-input" id="inputField" placeholder="Label" required />
                                                        <label for="inputField">First Name</label>
                                                    </div>

                                                </div>
                                                <div className="col-12">
                                                    <div>
                                                        <div class="form-floating mb-3">
                                                            <input type="text" class="form-control rounded-0 custom-input" id="inputField" placeholder="Label" required />
                                                            <label for="inputField">Departure</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div>
                                                        <div class="form-floating mb-3">
                                                            <input type="text" class="form-control rounded-0 custom-input" id="inputField" placeholder="Label" required />
                                                            <label for="inputField">Email Id </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div>
                                                        <div class="form-floating mb-3">
                                                            <input type="text" class="form-control rounded-0 custom-input" id="inputField" placeholder="Label" required />
                                                            <label for="inputField">Mobile Number</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-6">
                                                        <div>
                                                            <p>Adults:1</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div>
                                                            <p>Infant:0</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div>
                                                            <p>Child:0</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div>
                                                            <p>Total:1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 w-100 px-0 mt-4 mb-4">
                                    <div className="w-100">
                                        <a className="btn w-100 custom-btn">Proceed to Pay</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 ">
                        <div>
                            <img src={img} className="img-fluid w-100" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default BookingDetails;