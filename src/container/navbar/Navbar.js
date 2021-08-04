import React from 'react';
import "./Navbar.css";
import Dropdown from "../../assets/Dropdown";
import Home from "../../assets/Home";
import Cross from "../../assets/Cross";
import Mail from "../../assets/Mail";

function NAvbar() {
    return (
        <div>
         <navbar className="navbar">
         <div className="navbar__title">
            <div className="navbar__title--SVG">
            <svg width="66" height="36" viewBox="0 0 66 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.578125 35V0.875H11.5703C14.5859 0.875 17.2969 1.5625 19.7031 2.9375C22.1094 4.29688 23.9844 6.22656 25.3281 8.72656C26.6875 11.2109 27.375 14 27.3906 17.0938V18.6641C27.3906 21.7891 26.7266 24.5938 25.3984 27.0781C24.0859 29.5469 22.2266 31.4844 19.8203 32.8906C17.4297 34.2812 14.7578 34.9844 11.8047 35H0.578125ZM8.80469 7.22656V28.6719H11.6641C14.0234 28.6719 15.8359 27.8359 17.1016 26.1641C18.3672 24.4766 19 21.9766 19 18.6641V17.1875C19 13.8906 18.3672 11.4062 17.1016 9.73438C15.8359 8.0625 13.9922 7.22656 11.5703 7.22656H8.80469Z" fill="#85171A"/>
            <path d="M46.8109 25.9297C46.8109 24.7266 46.3813 23.7891 45.5219 23.1172C44.6781 22.4453 43.1859 21.75 41.0453 21.0312C38.9047 20.3125 37.1547 19.6172 35.7953 18.9453C31.3734 16.7734 29.1625 13.7891 29.1625 9.99219C29.1625 8.10156 29.7094 6.4375 30.8031 5C31.9125 3.54688 33.475 2.42188 35.4906 1.625C37.5063 0.8125 39.7719 0.40625 42.2875 0.40625C44.7406 0.40625 46.9359 0.84375 48.8734 1.71875C50.8266 2.59375 52.3422 3.84375 53.4203 5.46875C54.4984 7.07812 55.0375 8.92188 55.0375 11H46.8344C46.8344 9.60938 46.4047 8.53125 45.5453 7.76562C44.7016 7 43.5531 6.61719 42.1 6.61719C40.6313 6.61719 39.4672 6.94531 38.6078 7.60156C37.7641 8.24219 37.3422 9.0625 37.3422 10.0625C37.3422 10.9375 37.8109 11.7344 38.7484 12.4531C39.6859 13.1562 41.3344 13.8906 43.6938 14.6562C46.0531 15.4062 47.9906 16.2188 49.5063 17.0938C53.1938 19.2188 55.0375 22.1484 55.0375 25.8828C55.0375 28.8672 53.9125 31.2109 51.6625 32.9141C49.4125 34.6172 46.3266 35.4688 42.4047 35.4688C39.6391 35.4688 37.1313 34.9766 34.8813 33.9922C32.6469 32.9922 30.9594 31.6328 29.8188 29.9141C28.6938 28.1797 28.1313 26.1875 28.1313 23.9375H36.3813C36.3813 25.7656 36.85 27.1172 37.7875 27.9922C38.7406 28.8516 40.2797 29.2812 42.4047 29.2812C43.7641 29.2812 44.8344 28.9922 45.6156 28.4141C46.4125 27.8203 46.8109 26.9922 46.8109 25.9297Z" fill="#DC2025"/>
            <path d="M65.6219 35H57.4188V0.875H65.6219V35Z" fill="#FEBA08"/>
            </svg>
            </div>
            <div>
                <p className="navbar__title--text navbar__title--text--1">INDONESIA</p>
                <p className="navbar__title--text  navbar__title--text--2">SAMSARA</p>
                <p className="navbar__title--text  navbar__title--text--3">DWIDASA</p>
            </div>
        </div>
        <div className="navbar__items">
            <div className="navbar__items--item">
                <p>Service</p>
            </div>
            <div className="navbar__items--item">
                <p>Product</p>
            </div>
            <div className="navbar__items--item">
                <p>Technology</p>
            </div>
            <div className="navbar__items--item">
                <p>About  {Dropdown}</p>
            </div>
            <div className="navbar__items--item">
                <p>Client  {Dropdown}</p>
            </div>
            <div className="navbar__items--item">
                <p>Partner</p>
            </div>
        </div>
        <div>
            <div className="navbar__icon--home">
            <div className="navbar__icon--item">
                {Home}
            </div>
            <div className="navbar__icon--item">
                {Mail}
            </div>
            <div className="navbar__icon--item">
                {Cross}
            </div>
            </div>
        </div>
        <div className="navbar__menu">
        <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 2.71429V0H0V2.71429H25Z" fill="#455A64"/>
        <path d="M25 5.42857V8.14286H8.33333V5.42857H25Z" fill="#455A64"/>
        <path d="M25 13.5714V10.8571H0V13.5714H25Z" fill="#455A64"/>
        <path d="M25 19V16.2857H8.33333V19H25Z" fill="#455A64"/>
        </svg>

        </div>
       </navbar>
        </div>
    )
}

export default NAvbar
