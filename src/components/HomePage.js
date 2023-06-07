import React from "react";
import './css/HomePage.css'
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaStar } from 'react-icons/fa';

import img from './img/p6i1.png';
import img2 from './img/p6i2.png';
import img3 from './img/p6i3.png';
import img4 from './img/p6i4.png';
import img5 from './img/p6i5.png';
import img6 from './img/p6i6.png';
import img7 from './img/p6i7.png';
import img8 from './img/p6i8.png';
import img9 from './img/p6i9.png';
import img10 from './img/p6i10.png';
import img11 from './img/p6i11.png';
import img12 from './img/p6i12.png';
import img13 from './img/p6i13.png';
import img14 from './img/p6i14.png';
import img15 from './img/p6i15.png';
import img16 from './img/p6i16.png';
import img17 from './img/p6i17.png';
function HomePage() {
    return (
        <>
            <div className="container">
                <div className="w-100">
                    <div className="row mt-5">
                        <div>
                            <div className="col-4 text-center w-100">
                                <div>
                                    <p className="h-text">Choose your Travel</p>
                                </div>
                            </div>
                            <div className="col-4 text-center w-100">
                                <div>
                                    <p className="h-text"><span className="det-text">Destination</span> as per your comfort!</p>
                                </div>
                            </div>
                            <div className="col-4 text-center w-100">
                                <div>
                                    <p className="h-text1">WITH CUSTOMIZED PACKAGES</p>
                                </div>
                            </div>
                            <div className="col-12 text-center mt-5">
                                <div>
                                    <a className="btn h-t-btn rounded-3">CREATE CUSTOM PACKAGES</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <div class="btn-group" role="group" aria-label="Button Group">
                                <a href="#" class="btn h-btn"><FaMapMarkerAlt />Select Destination</a>
                                <a href="#" class="btn h-btn"><FaClock />Select Duration</a>
                                <a href="#" class="btn h-btn"><FaCalendarAlt />Select Month</a>
                                <a href="#" class="btn h-s-btn">Explore</a>

                            </div>

                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <p className="h-r2-text">Are you looking for?</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        
                        <div className="col-12 h-1-cus-w px-0">
                            <div className="d-flex custom-over px-0">
                                <div className="me-3">
                                    <img src={img5} className="img-1 rounded-5" />
                                    <p className="img-1-text text-center">Nature</p>
                                </div>
                                <div className="me-3">
                                    <img src={img2} className="img-1 rounded-5" />
                                    <p className="img-1-text text-center">Pilgrimage</p>
                                </div>
                                <div className="me-3">
                                    <img src={img4} className="img-1 rounded-5" />
                                    <p className="img-1-text text-center">Wildlife</p>
                                </div>
                                <div className="me-3">
                                    <img src={img3} className="img-1 rounded-5" />
                                    <p className="img-1-text text-center">Adventure</p>
                                </div>
                                <div className="me-3">
                                    <img src={img} className="img-1 rounded-5" />
                                    <p className="img-1-text text-center">Honeymoon</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 text-center">
                            <p className="h-r2-text">Most Loved Destination!</p>
                        </div>
                        <div className="col-12 h-1-cus-w px-0">
                            <div className="d-flex custom-over">
                                <div className="me-3">
                                    <img src={img7} className="rounded-5" />
                                    <p className="img-2-text text-center">Delhi</p>
                                </div>
                                <div className="me-3">
                                    <img src={img7} className="rounded-5" />
                                    <p className="img-2-text text-center">Delhi</p>
                                </div>
                                <div className="me-3">
                                    <img src={img8} className="rounded-5" />
                                    <p className="img-2-text text-center">Goa</p>
                                </div>
                                <div className="me-3">
                                    <img src={img9} className="rounded-5" />
                                    <p className="img-2-text text-center">Masoori</p>
                                </div>
                                <div className="me-3">
                                    <img src={img9} className=" rounded-5" />
                                    <p className="img-2-text text-center">Delhi</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <p className="h-y-text">Your Safety Is Our Priority</p>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <p className="h-y-text1">We are actively with our holiday partners to maintain the safety measures for providing you a risk free vacation.</p>
                            </div>
                        </div>

                    </div>
                    <div className="d-flex justify-content-center">
                    <div className="row mt-5 h-1-cus-w d-flex justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="">
                                <img src={img10} className="img-fluid w-100 rounded-3" />
                                <p className="text-center img-3-text">Regular Temperature Checks</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="">
                                <img src={img11} className="img-fluid w-100 rounded-3" />
                                <p className="text-center img-3-text">Availability of Protection Gear</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="">
                                <img src={img12} className="img-fluid w-100 rounded-3" />
                                <p className="text-center img-3-text">Social Distancing Measures</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-7 col-md-12">
                            <div className="d-flex flex-column">
                                <div className="bar1 mb-1">.</div>
                                <div className="bar2 mb-1">.</div>
                                <div className="bar3 mb-1">.</div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="">
                                <p className="">Pick the most over the top total and best accomodation recommandation that you need to make your vacation charming.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="h-tor-r">Top Rated Hotels</p>
                        </div>
                        <div className="col-12 px-0">
                            <div className="d-flex custom-over">
                                <div className="me-3">
                                    <img src={img16} className="rounded-5" />
                                    <div className="d-flex flex-column h-hotel-margin">
                                        <div className="d-flex">
                                            <p>Maldives</p><FaStar className="star h-custom-padding" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" />
                                        </div>
                                        <p>Pacific Hotels</p>
                                    </div>
                                </div>
                                <div className="me-3">
                                    <img src={img17} className="rounded-5" />
                                    <div className="d-flex flex-column h-hotel-margin">
                                        <div className="d-flex">
                                            <p>Goa</p><FaStar className="star h-custom-padding" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" />
                                        </div>
                                        <p>Pacific Hotels</p>
                                    </div>
                                </div>
                                <div className="me-3">
                                    <img src={img15} className="rounded-5" />
                                    <div className="d-flex flex-column h-hotel-margin">
                                        <div className="d-flex">
                                            <p>Rajasthan</p><FaStar className="star h-custom-padding" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" />
                                        </div>
                                        <p>Pacific Hotels</p>
                                    </div>
                                </div>
                                <div className="me-3">
                                    <img src={img14} className="rounded-5" />
                                    <div className="d-flex flex-column h-hotel-margin">
                                        <div className="d-flex">
                                            <p>Punjab</p><FaStar className="star h-custom-padding" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" />
                                        </div>
                                        <p>Pacific Hotels</p>
                                    </div>
                                </div>
                                <div className="me-3">
                                    <img src={img16} className=" rounded-5" />
                                    <div className="d-flex flex-column h-hotel-margin">
                                        <div className="d-flex">
                                            <p>Ladakh</p><FaStar className="star h-custom-padding" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" /><FaStar className="star" />
                                        </div>
                                        <p>Pacific Hotels</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid h-full-background">
                <div className="h-offer-margin mt-5 mb-5">
                    <p className="h-offer-t1">How We Work?</p>
                    <p className="h-offer-t2">We Offer Best Services</p>
                    <p className="h-offer-t3">Customer Service</p>
                    <ul className="pb-5">
                        <li className="mt-1 h-offer-text">Customized occasion visit bundle assists you with doing
                            the things in your as own would prefer.</li>
                        <li className="mt-1 h-offer-text">Just travel at your own speed with your preferred carrier
                            and we will work with all that you want.</li>
                        <li className="mt-1 h-offer-text">Choice of lodgings will likewise be yours and various cooking styles that you
                            generally love to investigate would show up for you to pick.</li>
                        <li className="mt-1 h-offer-text">You can pick an individual vehicle or need to accompany other worldwide
                            voyagers at seat-in-mentor office, your decision our need.</li>
                        <li className="mt-1 h-offer-text">Just pick the range of spots you need to go. Accompany your
                            friends and family and investigate the world.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default HomePage;