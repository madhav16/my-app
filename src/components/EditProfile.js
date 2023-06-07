import React from "react";
import img from "./img/p3i1.png"
import img1 from "./img/p3i2.png"
import { MdFlight } from 'react-icons/md';
import { FaCamera } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import './css/EditProfile.css';
function EditProfile() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 px-0">
                        <div className="w-100 mt-4">
                            <img src={img} className="img-fluid w-100 p-0" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 px-0">
                        <div className=" d-flex justify-content-center">
                            <a className="btn border w-100 me-2 mt-3"><MdFlight />My Booking</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 px-0">
                        <div className=" d-flex justify-content-center">
                            <a className="btn border w-100 mt-3"><FiEdit2 />Change Password</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container border rounded mt-4 mb-3">
                <div className="row mt-5 mb-3">
                    <div className="d-flex flex-row px-0 ">
                        <div className="col-6 px-0 ">
                            <div>
                                <p className="custom-titile ">Edit Profile</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-column align-items-end ">
                                <img src={img1} className="img-fluid custom-img" />
                                <FaCamera className="custom-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="">
                            <div className="input-group custom-margin-left d-flex flex-column custom-size">
                                <label className="form-label row1-text">First Name</label>
                                <input type="text" placeholder="Chirag" className="form-control rounded w-100 eml-in " />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <div className="input-group custom-margin-right d-flex flex-column custom-size">
                                <label className="form-label row1-text">Last Name</label>
                                <input type="text" placeholder="bansal" className="form-control rounded w-100 eml-in " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="">
                            <div className="input-group one-custom-margin d-flex flex-column custom-size">
                                <label className="form-label row1-text">Email</label>
                                <input type="email" placeholder="chiragbansal@gmail.com" className="form-control rounded w-100 eml-in " />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="">
                            <div className="input-group one-custom-margin d-flex flex-column custom-size">
                                <label className="form-label row1-text">Address</label>
                                <input type="email" placeholder="22, Cradle, Bhat, Ahmedabad" className="form-control rounded w-100 eml-in " />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="">
                            <div className="input-group one-custom-margin d-flex flex-column custom-size">
                                <label className="form-label row1-text">Contact Number</label>
                                <input type="email" placeholder="8752415762" className="form-control rounded w-100 eml-in " />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="">
                            <div className="input-group custom-margin-left d-flex flex-column custom-size">
                                <label className="form-label row1-text">City</label>
                                <input type="text" placeholder="Ahmedabad" className="form-control rounded w-100 eml-in " />
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div>
                            <div className="input-group custom-margin-right d-flex flex-column custom-size">
                                <label className="form-label row1-text">State</label>
                                <input type="text" placeholder="Gujarat" className="form-control rounded w-100 eml-in " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="">
                            <div className="input-group one-custom-margin d-flex flex-column custom-size">
                                <label className="form-label row1-text">Password</label>
                                <input type="password" placeholder="bansal@123" className="form-control rounded w-100 eml-in " />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-4">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-margin-left">
                            <a className="btn w-100 btn-cancle ">Cancle</a>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="custom-margin-right">
                        <a className="btn w-100 btn-save">Save</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EditProfile;