import { useState } from "react";
import "./TopNav.css";
import "./DesktopNav.css";
import { BsJournalCode } from "react-icons/bs";
import { LiaBloggerB } from "react-icons/lia";
// import { GrProjects } from "react-icons/gr";
import { PiQrCodeBold } from "react-icons/pi";
// import { BiSolidUserCircle } from "react-icons/bi";
import { LuContact2 } from "react-icons/lu";
import { FcAbout } from "react-icons/fc";
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";



const TopNav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMenu(!showMenu);
        document.querySelector("body").classList.toggle("body-overflow-visible");
    };

    const handleOverlayClick = () => {
        if (setShowMenu) {
            setShowMenu(false);
        }
    }

    return (
        <>
            <nav className="top_nav x_axis_center">
                <div className="nav_elements y_axis_center">
                    <div className="logo x_y_axis_center">
                        {/* <div className="icon x_y_axis_center">
                            <div className="icon_box .x_y_axis_center">
                                <img src={logo} alt="logo_icon" />
                            </div>
                        </div> */}
                        <NavLink to="/" className="company_name x_y_axis_center">
                            <h1>
                                <span className="logo_techset">Study</span>
                                <span className="logo_code">Smart</span>
                            </h1>
                        </NavLink>
                    </div>

                    <div className="github_n_nav_icon">




                        <div className="desktop_nav_elements">
                            <NavLink to="/login" className="nav_link">LogIn</NavLink>

                            <NavLink to="/library" className="nav_link">Library</NavLink>

                            <NavLink to="/blogs" className="nav_link">Blogs</NavLink>

                            <NavLink to="/contact" className="nav_link">Contact</NavLink>

                            <NavLink to="/About" className="nav_link">About</NavLink>
                        </div>

                        <div className="nav_icon y_axis_center">
                            <div className="menu_icon x_y_axis_center">
                                <div className="only-mobile mobile-menu-button-wrapper">
                                    <button
                                        className={`hamburger hamburger--3dx x_y_axis_center ${showMenu ? "is-active" : ""
                                            }`}
                                        type="button"
                                        onClick={toggleMobileMenu}
                                    >
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            <div
                className={`navigation_section y_axis_center navigation_style ${showMenu ? "overlay" : ""
                    }`}
                id="Navigation"
            >
                <div className="nav_links">
                    <NavLink to="/Authenticate" className="nav_sub_section y_axis_center">
                        <div className="section_icon x_y_axis_center">
                            <BiUserCircle />
                        </div>
                        <h1 className="section_name">LogIn</h1>
                    </NavLink>

                    <NavLink to="/Register" className="nav_sub_section y_axis_center">
                        <div className="section_icon x_y_axis_center">
                            <PiQrCodeBold />
                        </div>
                        <h1 className="section_name">Admission</h1>
                    </NavLink>

                    <div className="nav_sub_section y_axis_center">
                        <div className="section_icon x_y_axis_center">
                            <LiaBloggerB />
                        </div>
                        <h1 className="section_name">Library</h1>
                    </div>
                    <div className="nav_sub_section y_axis_center">
                        <div className="section_icon x_y_axis_center">
                            <BsJournalCode />
                        </div>
                        <h1 className="section_name">Case Studies</h1>
                    </div>
                    {/* <div className="nav_sub_section y_axis_center">
                        <div className="section_icon x_y_axis_center">
                            <PiQrCodeBold />
                        </div>
                        <h1 className="section_name">Projects</h1>
                    </div> */}
                    <div className="nav_sub_section y_axis_center">
                        <div className="section_icon x_y_axis_center">
                            <LuContact2 />
                        </div>
                        <h1 className="section_name">Contact</h1>
                    </div>
                    <NavLink to="/About" className="nav_sub_section y_axis_center">
                        <div className="section_icon x_y_axis_center">
                            <FcAbout />
                        </div>
                        <h1 className="section_name">About Us</h1>
                    </NavLink>
                </div>

                <div
                    className="overlay_box"
                    onClick={handleOverlayClick}
                ></div>
            </div>
        </>
    );
};

export default TopNav;
