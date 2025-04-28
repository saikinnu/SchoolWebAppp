import '../Styles/StudentAdmission.css';
import React, { useState } from 'react'; // <-- Add useState import

function StudentAdmission(){
    const [showInfo, setShowInfo] = useState(false);
    const [showInfo1, setShowInfo1] = useState(false);
    const [showInfo2, setShowInfo2] = useState(false);

    return(
        <div className="student-admission">
            <form>
            <div className="student-info-container" style={{borderLeft: "4px solid #333"}}> {/* Add solid left border */}
                <div 
                    className="dropdown-header" 
                    onClick={() => setShowInfo(!showInfo)}
                >
                    <span className='name-style'>Student Information</span>
                    <span>{showInfo ? "▲" : "▼"}</span>
                </div>
                {showInfo && (
                    <div>
                    <div className="admision-num">
                        <fieldset className='admision-fieldset'>
                            <legend>Admission Number</legend>
                            <input type="text" placeholder="Admission Number" className="adm-num"/>
                        </fieldset>
                    </div>
                    <div className="admision-num">
                        <fieldset className='admision-fieldset'>
                            <legend>Admission Date</legend>
                            <input type="date" className="adm-num"/>
                        </fieldset>
                    </div>
                    <div>
                        <input type='text' placeholder='Firs Name' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Middle Name' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Last Name' className='fname'/>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Date of Birth</legend>
                            <input type="date" className="adm-num"/>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Gender</legend>
                            <input type='radio' name='gender' value='male' className='gender'/> Male
                            <input type='radio' name='gender' value='female' className='gender'/> Female
                            <input type='radio' name='gender' value='other' className='gender'/> Other
                        </fieldset>
                    </div>
                    <div>
                        <input type='text' placeholder='Address' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='State' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Zip code' className='fname'/>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Mobile Number*</legend>
                            <input type="number" placeholder="Mobile Number" className="adm-num"/>
                        </fieldset>
                    </div>
                    <div>
                        <input type='text' placeholder='Email' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Previous School' className='fname previous-school'/>
                    </div>
                    </div>
                 )}
            </div>
            <div className="student-info-container" style={{borderLeft: "4px solid #333"}}> {/* Add solid left border */}
                <div 
                    className="dropdown-header" 
                    onClick={() => setShowInfo1(!showInfo1)}
                >
                    <span className='name-style'>Sibling Information</span>
                    <span>{showInfo1 ? "▲" : "▼"}</span>
                </div>
                {showInfo1 && (
                  <div className='sibling'>
                    <input type='checkbox' />In case of any sibling, click here
                  </div>  
                )}
            </div>
            <div className="student-info-container" style={{borderLeft: "4px solid #333"}}> {/* Add solid left border */}
                <div 
                    className="dropdown-header" 
                    onClick={() => setShowInfo2(!showInfo2)}
                >
                    <span className='name-style'>Family Information</span>
                    <span>{showInfo2 ? "▲" : "▼"}</span>
                </div>
                {showInfo2 && (
                  <div>
                    <fieldset className='admision-fieldset'>
                        <legend>Parental Status</legend>
                        <input type='radio' name='parent' value='father' className='gender'/> Father
                        <input type='radio' name='parent' value='mother' className='gender'/> Mother
                        <input type='radio' name='parent' value='both' className='gender'/> Both
                    </fieldset>
                    <div>
                        Father Information
                        <input type='text' placeholder='Mr' className='fname' disabled/>
                    </div>
                    <div>
                        <input type='text' placeholder='Firs Name' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Middle Name' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Last Name' className='fname'/>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Gender</legend>
                            <input type='radio' name='gender' value='male' className='gender'/> Male
                            <input type='radio' name='gender' value='female' className='gender'/> Female
                            <input type='radio' name='gender' value='other' className='gender'/> Other
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Date of Birth</legend>
                            <input type="date" className="adm-num"/>
                        </fieldset>
                    </div>
                    <div>
                        <input type='text' placeholder='Address' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='State' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Zip code' className='fname'/>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Mobile Number*</legend>
                            <input type="number" placeholder="Mobile Number" className="adm-num"/>
                        </fieldset>
                    </div>
                    <div>
                        <input type='text' placeholder='Email' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='School Name' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Medium of instruction' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Educational Qualification' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Annual Income' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Occupation' className='fname'/>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Proof of Qualification*</legend>
                            <input type="file" className="adm-num"/>
                        </fieldset>
                    </div>
                    <div>
                        Mother Information
                        <input type='text' placeholder='Mr' className='fname' disabled/>
                    </div>
                    <div>
                        <input type='text' placeholder='Firs Name' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Middle Name' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Last Name' className='fname'/>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Gender</legend>
                            <input type='radio' name='gender' value='male' className='gender'/> Male
                            <input type='radio' name='gender' value='female' className='gender'/> Female
                            <input type='radio' name='gender' value='other' className='gender'/> Other
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Date of Birth</legend>
                            <input type="date" className="adm-num"/>
                        </fieldset>
                    </div>
                    <div>
                        <input type='text' placeholder='Address' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='State' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Zip code' className='fname'/>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Mobile Number*</legend>
                            <input type="number" placeholder="Mobile Number" className="adm-num"/>
                        </fieldset>
                    </div>
                    <div>
                        <input type='text' placeholder='Email' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='School Name' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Medium of instruction' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Educational Qualification' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Annual Income' className='fname'/>
                    </div>
                    <div>
                        <input type='text' placeholder='Occupation' className='fname'/>
                    </div>
                    <div>
                        <fieldset className='admision-fieldset'>
                            <legend>Proof of Qualification*</legend>
                            <input type="file" className="adm-num"/>
                        </fieldset>
                    </div>
                  </div>
                )}
            </div>
            <div className='admin-button'>
                <input type='submit' value='New Admission' className='submit-btn'/>
            </div>
            </form>
        </div>
    )
}

export default StudentAdmission;