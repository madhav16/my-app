import React from "react";
import img from './img/p4i4.png'
import img1 from './img/p4i1.png'
import img2 from './img/p4i2.png'
import img3 from './img/p4i3.png'
import img4 from './img/p4i7.png'
import img5 from './img/p4i5.png'
import img6 from './img/p4i6.png'
import { FaSearch } from 'react-icons/fa';
import './css/Blog.css'
function Blog() {
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="w-100 px-0">
                        <div className="col-12 px-0">
                            <div className="w-100">
                                <img src={img} className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <div className="col-12">
                            <div className="w-100 d-flex justify-content-center">
                                <div className="input-group rounded w-50 mt-3">
                                    <input type="text" className="form-control rounded " placeholder="Search Popular Places, What to do,Where to go.." />

                                    <FaSearch size={24} className="search-icon"
                                        style={{ marginLeft: '-6%', zIndex: '1', marginTop: '1%', color: 'lightgray' }}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <div className="col-12">
                            <div class=" d-flex justify-content-center mt-4">
                                <p className="top-text">Here's Some Travel Blogs to explore More</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <div className="col-12">
                            <div class=" d-flex justify-content-center ">
                                <p className="top-text1">FROM OUR ENTHUSIASTIC TRAVELLERS</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-row mt-3">
                    <div className="col-lg-4 col-md-12 col-sm-12 px-0">
                        <div >
                            <div className="row">
                                <div className="col-12 cus-padding">
                                    <div className="d-flex justify-content-center">
                                        <img src={img1} className="img-fluid img" />
                                    </div>
                                </div>
                                <div className="col-12 custom-margin">
                                    <div className="d-flex align-items-center">
                                        <img src={img4} className="img-fluid imgp" />
                                        <div className="d-flex flex-column name-text">
                                            <div className="bold">Brinda Sharma</div>
                                            <div>Travel Blogger</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <div>
                                        <p className="more-text">A Leh Ladakh Bike/Road Trip For Thoughtful Travellers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 px-0">
                        <div>
                            <div className="row">
                                <div className="col-12">
                                <div className="d-flex justify-content-center">
                                        <img src={img2} className="img-fluid img " />
                                    </div>
                                </div>
                                <div className="col-12 custom-margin">
                                    <div className="d-flex align-items-center">
                                        <img src={img6} className="img-fluid imgp" />
                                        <div className="d-flex flex-column name-text">
                                            <div className="bold">Anunay Sood</div>
                                            <div>Travel Vlogger</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <div>
                                        <p className="more-text">Insider's Guide to Goa: The Ultima-te Goa Travel Guide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12 col-sm-12 px-0">
                        <div>
                            <div className="row">
                                <div className="col-12">
                                <div className="d-flex justify-content-center">
                                        <img src={img3} className="img-fluid  img" />
                                    </div>
                                </div>
                                <div className="col-12 custom-margin">
                                    <div className="d-flex align-items-center">
                                        <img src={img5} className="img-fluid imgp" />
                                        <div className="d-flex flex-column name-text">
                                            <div className="bold">Shivam Sharma</div>
                                            <div>Adventurist</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 ">
                                    <div>
                                        <p className="more-text">Ooty Travel Guide: From Places to Visit to What to Pack</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-row mt-3">
                    <div className="col-lg-4 col-md-12 col-sm-12 px-0">
                        <div>
                            <div className="row">
                                <div className="col-12">
                                <div className="d-flex justify-content-center">
                                        <img src={img1} className="img-fluid img" />
                                    </div>
                                </div>
                                <div className="col-12 custom-margin">
                                    <div className="d-flex align-items-center">
                                        <img src={img4} className="img-fluid imgp" />
                                        <div className="d-flex flex-column name-text">
                                            <div className="bold">Brinda Sharma</div>
                                            <div>Travel Blogger</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <div>
                                        <p className="more-text">A Leh Ladakh Bike/Road Trip For Thoughtful Travellers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 px-0">
                        <div>
                            <div className="row">
                                <div className="col-12">
                                <div className="d-flex justify-content-center">
                                        <img src={img2} className="img-fluid img " />
                                    </div>
                                </div>
                                <div className="col-12 custom-margin">
                                    <div className="d-flex align-items-center">
                                        <img src={img6} className="img-fluid imgp" />
                                        <div className="d-flex flex-column name-text">
                                            <div className="bold">Anunay Sood</div>
                                            <div>Travel Vlogger</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <div>
                                        <p className="more-text">Insider's Guide to Goa: The Ultima-te Goa Travel Guide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 px-0">
                        <div>
                            <div className="row">
                                <div className="col-12">
                                <div className="d-flex justify-content-center">
                                        <img src={img3} className="img-fluid  img" />
                                    </div>
                                </div>
                                <div className="col-12 custom-margin">
                                    <div className="d-flex align-items-center">
                                        <img src={img5} className="img-fluid imgp" />
                                        <div className="d-flex flex-column name-text">
                                            <div className="bold">Shivam Sharma</div>
                                            <div>Adventurist</div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <div>
                                        <p className="more-text">Ooty Travel Guide: From Places to Visit to What to Pack</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <a className="btn custom-btn">learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Blog;