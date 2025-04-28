import '../Styles/StudentRegistration.css';
function StudentRegistration() {
    return(
        <div className="student-container">
            <form>
                <div className='first-name'>
                <fieldset className="field-tag">
                    <legend>Class Name*</legend>
                    <select>
                        <option value="Select-class">Select Class</option>
                        <option value="class1">Class 1</option>
                        <option value="class2">Class 2</option>
                        <option value="class3">Class 3</option>
                        <option value="class4">Class 4</option>
                    </select>
                </fieldset>
                <input type="text" placeholder="First Name" className='first-input-tag'/>
                </div>
                <div className='last-name'>
                    <input type='text' placeholder='Middle Name' className='input-tag'/>
                    <input type='text' placeholder='Last Name' className='input-tag'/>
                </div>
                <div className='dob'>
                    <fieldset className="field-tag">
                        <legend>Gender*</legend>
                        <input type='radio' className='radio-tag'/> Male
                        <input type='radio' className='radio-tag'/> Female
                        <input type='radio' className='radio-tag'/> Others
                    </fieldset>
                    <fieldset className='field-tag'>
                        <legend>Date of Birth*</legend>
                        <input type='date' className='input-tag'/>
                    </fieldset>
                </div>
                <div className='addr'>
                    <input type='text' placeholder='Address*' className='input-tag'/>
                    <input type='text' placeholder='City*' className='input-tag'/>
                </div>
                <div className='state'>
                    <input type='text' placeholder='State*' className='input-tag'/>
                    <input type='text' placeholder='Zip Code*' className='input-tag'/>
                </div>
                <div className='mobile-num'>
                    <fieldset className='field-tag'>
                        <legend>Mobile Number*</legend>
                        <input type='tel' placeholder='+91' className='input-tag'/>
                    </fieldset>
                    <fieldset className='field-tag'>
                        <legend>Alternate Mobile Number*</legend>
                        <input type='tel' placeholder='+91' className='input-tag'/>
                    </fieldset>
                </div>
                <div className='email-tag'>
                    <input type='email' placeholder='Email*' className='input-tag'/>
                    <input type='password' placeholder='Password*' className='input-tag'/>
                </div>
                <div>
                    <input type='file' className='file-tag'/>
                </div>
                <div><h4>Documnet Details</h4></div>
                <div className='doc'>
                    <input type='text' className='doc-input-tag' placeholder='Documnet Title'/>
                    <fieldset className='field-tag'>
                        <legend>Documnet File*</legend>
                        <input type='file' className='file-tag'/>
                    </fieldset>
                </div>
                <div className='btn'>
                    <button className='btn-tag'>Registration</button>
                </div>
            </form>
        </div>
    )
}

export default StudentRegistration;