import React from "react";
import './css/SideBar.css';
import { FaTachometerAlt,FaClipboard } from 'react-icons/fa';
import { MdHome } from 'react-icons/md';
import { AiOutlineTable,AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiGrid  } from 'react-icons/bi';

function SideBar() {
    return (
        <>
            <div className="container-fluid cus">
                <div className="row flex-nowrap">
                    <div className="bg-dark col-auto col-md-4 col-lg-3 min-vh-100">
                        <div className="bg-dark p-2">
                            <a className="d-flex text-decoration-none align-item-center text-white">
                                <span className="fs-4 d-none d-sm-inline"> SideMenu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mt-2">
                                <li className="nav-item py-3 py-sm-0">
                                    <a href="#" className="nav-link text-white">
                                        <FaTachometerAlt className="fs-5" /><span className="fs-4 ms-3 d-none d-sm-inline"> Dashboard</span>
                                    </a>
                                </li>
                                <li className="nav-item py-3 py-sm-0">
                                    <a href="#" className="nav-link text-white">
                                        <MdHome className="fs-5" /><span className="fs-4 ms-3 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li className="nav-item py-3 py-sm-0">
                                    <a href="#" className="nav-link text-white">
                                        <AiOutlineTable className="fs-5" /><span className="fs-4 ms-3 d-none d-sm-inline">Articles</span>
                                    </a>
                                </li>
                                <li className="nav-item py-3 py-sm-0">
                                    <a href="#" className="nav-link text-white">
                                        <BiGrid  className="fs-5" /><span className="fs-4 ms-3 d-none d-sm-inline">Products</span>
                                    </a>
                                </li>
                                <li className="nav-item py-3 py-sm-0">
                                    <a href="#" className="nav-link text-white">
                                        <FaClipboard className="fs-5" /><span className="fs-4 ms-3 d-none d-sm-inline">Orders</span>
                                    </a>
                                </li>
                                <li className="nav-item py-3 py-sm-0">
                                    <a href="#" className="nav-link text-white">
                                        <AiOutlineUsergroupAdd className="fs-5" /><span className="fs-4 ms-3 d-none d-sm-inline">Customers</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SideBar;