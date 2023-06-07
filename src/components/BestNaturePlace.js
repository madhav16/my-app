import React from "react";
import img from "./img/p7i1.png";
import img1 from "./img/p7i2.png";
import img2 from "./img/p7i3.png";
import img3 from "./img/p7i4.png";
import { FaStar } from 'react-icons/fa';
import './css/BestNaturePlace.css';
function BestNaturePlace() {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div>
                        <div className="col-12 text-center mt-4">
                            <p className="best-top-text">Best Nature Places (India)</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="col-3 border me-3 rounded">
                                <div>
                                    <div className="row mt-3">
                                        <div className=" col-lg-6 col-md-6 col-sm-12">
                                            <div className="ps-4">
                                                <p className="best-side-text-top">Short By</p>
                                                <div class="form-check best-side-text-chk1 mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        High to Low
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk1 mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Low To High
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk1 mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Popularity
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="d-flex justify-content-end pe-4">
                                                <p className="best-side-text-top">Reset</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className=" col-12">
                                            <div className="ps-4">
                                                <p className="best-side-text-top">Type Of Destination</p>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        India
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        international
                                                    </label>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className=" col-12">
                                            <div className="ps-4 mb-4">
                                                <p className="best-side-text-top border-bottom d-inline">Filter</p>
                                            </div>
                                        </div>
                                        <div className=" col-12">
                                            <div className="ps-4">
                                                <p className="best-side-text-top">Duration (in Days)</p>
                                                <select class="form-select form-select-sm best-select-w">
                                                    <option selected>1 to 3</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>


                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className=" col-12">
                                            <div className="ps-4">
                                                <p className="best-side-text-top">Budget per Person</p>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        less then 10000
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        10000 to 20000
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        20000 to 30000
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        30000 to 40000
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        40000 to 50000
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        50000 to 60000
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        60000 to 70000
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        70000 to 80000
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Above 80000
                                                    </label>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="row mt-3 mb-3">
                                        <div className=" col-12">
                                            <div className="ps-4">
                                                <p className="best-side-text-top">Month of Travel</p>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Jan-Mar
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Apr-Jun
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Jul-Sep
                                                    </label>
                                                </div>
                                                <div class="form-check best-side-text-chk mt-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Oct-Dec
                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-9">
                                <div className="border rounded">
                                    <div className="row">
                                        
                                            <div className="col-lg-6 col-sm-12 px-0">
                                                <div className="row d-flex flex-column m-0 border px-0 rounded-4 me-3">
                                                    <div className="col-3 w-100 best-star-margin1 px-0">
                                                        <p className="d-flex justify-content-end best-star-margin"><FaStar className="star" /> 4.3</p>
                                                    </div>
                                                    <div className="col-3 w-100 px-0">
                                                        <img src={img} className="img-fluid w-100" />
                                                    </div>
                                                    <div className="col-3 2-100 d-flex flex-row w-100 px-0">
                                                        <p className="best-sub-text1">Himachal</p>
                                                        <div className="d-flex flex-column align-items-end w-100 me-3">
                                                            <p className="best-sub-text2 m-0">Rs 6k to 40k</p>
                                                            <p className="best-sub-text3 m-0">per person</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-3 w-100 px-0">
                                                        <a className="btn best-btn-more rounded-3 w-100">More Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12 px-0">
                                                <div className="row d-flex flex-column m-0 border px-0 rounded-4 me-3">
                                                    <div className="col-3 w-100 best-star-margin1 px-0">
                                                        <p className="d-flex justify-content-end best-star-margin"><FaStar className="star" /> 4.3</p>
                                                    </div>
                                                    <div className="col-3 w-100 px-0">
                                                        <img src={img1} className="img-fluid w-100" />
                                                    </div>
                                                    <div className="col-3 2-100 d-flex flex-row w-100 px-0">
                                                        <p className="best-sub-text1">Kerala</p>
                                                        <div className="d-flex flex-column align-items-end w-100 me-3">
                                                            <p className="best-sub-text2 m-0">Rs 9k to 60k</p>
                                                            <p className="best-sub-text3 m-0">per person</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-3 w-100 px-0">
                                                        <a className="btn best-btn-more rounded-3 w-100">More Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12 px-0">
                                                <div className="row d-flex flex-column m-0 border px-0 rounded-4 me-3">
                                                    <div className="col-3 w-100 best-star-margin1 px-0">
                                                        <p className="d-flex justify-content-end best-star-margin"><FaStar className="star" /> 4.3</p>
                                                    </div>
                                                    <div className="col-3 w-100 px-0">
                                                        <img src={img2} className="img-fluid w-100" />
                                                    </div>
                                                    <div className="col-3 2-100 d-flex flex-row w-100 px-0">
                                                        <p className="best-sub-text1">Ladakh</p>
                                                        <div className="d-flex flex-column align-items-end w-100 me-3">
                                                            <p className="best-sub-text2 m-0">Rs 12k to 60k</p>
                                                            <p className="best-sub-text3 m-0">per person</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-3 w-100 px-0">
                                                        <a className="btn best-btn-more rounded-3 w-100">More Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-sm-12 px-0">
                                                <div className="row d-flex flex-column m-0 border px-0 rounded-4 me-3">
                                                    <div className="col-3 w-100 best-star-margin1 px-0">
                                                        <p className="d-flex justify-content-end best-star-margin"><FaStar className="star" /> 4.3</p>
                                                    </div>
                                                    <div className="col-3 w-100 px-0">
                                                        <img src={img3} className="img-fluid w-100" />
                                                    </div>
                                                    <div className="col-3 2-100 d-flex flex-row w-100 px-0">
                                                        <p className="best-sub-text1">Sikkim</p>
                                                        <div className="d-flex flex-column align-items-end w-100 me-3">
                                                            <p className="best-sub-text2 m-0">Rs 20k to 80k</p>
                                                            <p className="best-sub-text3 m-0">per person</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-3 w-100 px-0">
                                                        <a className="btn best-btn-more rounded-3 w-100">More Details</a>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BestNaturePlace;