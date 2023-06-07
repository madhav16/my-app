import React from "react";
import img from "./img/Rectangle 350.png"
import './css/Body.css'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
function Body() {
    return (
        <div className="container">
            <div className="row text-center mt-2 ">
                <div className="col-12 title px-0 ">
                    <h1>My Packages</h1>
                </div>
            </div>
            <div className="row mt-2 border rounded-4">
                <div className="col-lg-6 col-md-12 col-sm-12 px-0 ">
                    <img src={img} className="img-fluid w-100" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 px-0 ">
                  
                  <div className="d-flex justify-content-center inc-h">
                    <div class="card mt-4 card-test rounded-3 ">
                        <div class="card-header text-center fs-3 title-card rounded-top-3 ">
                            Ahmedabad To Goa
                        </div>
                        <div class="card-body lh-1">
                            <p class="card-text">Trip/Package ID :<span> 123456</span></p>
                            <p class="card-text">Booking Date :<span> 22/08/2023 to 26/08/2023</span></p>
                            <p class="card-text">Agency Contact No :<span> 8780457514</span> </p>
                            <p class="card-text">Total Person : <span>5</span></p>
                            <p class="card-text">Contact Person : <span>utsav</span></p>
                            <p class="card-text"><a href="#">View more Details</a></p>
                            <div className="d-flex justify-content-evenly mt-4">
                            <a href="#" class="btn btn-primary btn-cnf">Confirm</a>
                            <a href="#" class="btn btn-primary btn-cnc">Cancel Package</a>
                            </div>
                        </div>

                    </div>
                    
                  </div>
                </div>
            </div>
            
            {/* <div className="row mt-5 border rounded-4">
                <div className="col-md-6 col-sm-12 px-0 ">
                    <img src={img} className="img-fluid w-100" />
                </div>
                <div className="col-md-6 col-sm-12 px-0 ">
                    <div className="d-flex justify-content-evenly">
                    <div class="card mt-4 card-test rounded-top-3 ">
                        <div class="card-header text-center fs-3 title-card rounded-top-3 ">
                            Ahmedabad To Goa
                        </div>
                        <div class="card-body lh-1">
                            <p class="card-text">Trip/Package ID :<span> 123456</span></p>
                            <p class="card-text">Booking Date :<span> 22/08/2023 to 26/08/2023</span></p>
                            <p class="card-text">Agency Contact No :<span> 8780457514</span> </p>
                            <p class="card-text">Total Person : <span>5</span></p>
                            <p class="card-text">Contact Person : <span>utsav</span></p>
                            <p class="card-text"><a href="#">View more Details</a></p>
                            <div className="d-flex justify-content-evenly">
                            <a href="#" class="btn btn-primary btn-cnf">Confirm</a>
                            <a href="#" class="btn btn-primary btn-cnc">Cancel Package</a>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </div> */}
            <div className="row mt-5 border rounded-4">
                <div className="col-lg-6 col-md-12 col-sm-12 px-0 ">
                    <img src={img} className="img-fluid w-100" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 px-0 ">
                  
                  <div className="d-flex justify-content-center inc-h">
                    <div class="card mt-4 card-test rounded-3 ">
                        <div class="card-header text-center fs-3 title-card rounded-top-3 ">
                            Ahmedabad To Goa
                        </div>
                        <div class="card-body lh-1">
                            <p class="card-text">Trip/Package ID :<span> 123456</span></p>
                            <p class="card-text">Booking Date :<span> 22/08/2023 to 26/08/2023</span></p>
                            <p class="card-text">Agency Contact No :<span> 8780457514</span> </p>
                            <p class="card-text">Total Person : <span>5</span></p>
                            <p class="card-text">Contact Person : <span>utsav</span></p>
                            <p class="card-text"><a href="#">View more Details</a></p>
                            <div className="d-flex justify-content-evenly mt-4">
                            <a href="#" class="btn btn-primary btn-cnf">Confirm</a>
                            <a href="#" class="btn btn-primary btn-cnc">Cancel Package</a>
                            </div>
                        </div>

                    </div>
                    
                  </div>
                </div>
            </div>
            <div className="row mt-5 border rounded-4">
                <div className="col-lg-6 col-md-12 col-sm-12 px-0 ">
                    <img src={img} className="img-fluid w-100" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 px-0 ">
                  
                  <div className="d-flex justify-content-center inc-h">
                    <div class="card mt-4 card-test rounded-3 ">
                        <div class="card-header text-center fs-3 title-card rounded-top-3 ">
                            Ahmedabad To Goa
                        </div>
                        <div class="card-body lh-1">
                            <p class="card-text">Trip/Package ID :<span> 123456</span></p>
                            <p class="card-text">Booking Date :<span> 22/08/2023 to 26/08/2023</span></p>
                            <p class="card-text">Agency Contact No :<span> 8780457514</span> </p>
                            <p class="card-text">Total Person : <span>5</span></p>
                            <p class="card-text">Contact Person : <span>utsav</span></p>
                            <p class="card-text"><a href="#">View more Details</a></p>
                            <div className="d-flex justify-content-evenly mt-4">
                            <a href="#" class="btn btn-primary btn-cnf">Confirm</a>
                            <a href="#" class="btn btn-primary btn-cnc">Cancel Package</a>
                            </div>
                        </div>

                    </div>
                    
                  </div>
                </div>
            </div>
           
            
        </div>
    );
}
export default Body;