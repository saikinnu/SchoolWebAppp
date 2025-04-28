import React from 'react';
import '../Styles/Homepage.css';
import {BrowserRouter, Link, Route, Routes, useNavigate} from 'react-router-dom';
import StudentRegistration from './StudentRegistration';
import StudentLogin from './StudentLogin';
import StudentAdmission from './StudentAdmission';
function Homepage(){
    return(
        <div className="container"><BrowserRouter>
            <div className='header-container'>
                <div className='header-img-container'>
                    <img src='/images/badge.png' className='header-img'/>
                </div>
                <div className='header-welcome'>Most Trusted School Plugin</div>
                <div className='header-sub-welcome'>#1 Selling Plugin On Codecanyon</div>
            </div>
            <div className='combo-container'>
            <div className='side-container'>
                <div className='side-img-container'>
                    <img src='/images/hat.png' className='side-img'/>
                </div>
                <div className='side-header-text'>WP School</div>
                <div className='side-header-text1'>WP School Management System</div>
                <div className='side-login-tab'></div>
                <div className='side-login'><Link to='/login' className='side-link'><div className='a1'>School Management Login</div></Link></div>
                <div className='side-login-tab'></div>
                <div className='side-login'><Link to='/s' className='side-link'><div className='a1'>Student Registration</div></Link></div>
                <div className='side-login-tab'></div>
                <div className='side-login'><Link to='/admision' className='side-link'><div className='a1'>Student Admission</div></Link></div>
            </div>
            <div className='main-container'>
                  <Routes>
                    <Route path="/s" element={<StudentRegistration />} />
                    <Route path="/login" element={<StudentLogin />} />
                    <Route path="/admision" element={<StudentAdmission />} />
                  </Routes>
            </div></div>
            </BrowserRouter>
        </div>
    )
}

export default Homepage;