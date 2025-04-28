import '../Styles/StudentLogin.css';
import { ArrowDown, File, Smartphone } from "lucide-react";
function StudentLogin(){
    return(
        <div className="student-login-container">
            <div className="email-login">
                <input type="text" placeholder="Email" className="email"/>
                <input type="password" placeholder="Password" className="password"/>
            </div>
            <div className='check-box'>
                <input type='checkbox' className='check'/>
                <span className='check-text'>Remember Me</span>
            </div>
            <div className='or-login'>
                <button className='btn-tag'>Login</button>
                <div className='down-arrow'>Or Login As<ArrowDown /></div>
            </div>
            <div className='ppl-container'>
                <div className='stu'>
                    <div className='stu-icon'>
                        <img src='/images/student.png'  className='stu-icons' alt=''/>
                    </div>
                    <div className='st-name'>Student</div>
                </div>
                <div className='stu'>
                    <div className='stu-icon'>
                        <img src='/images/teacher.png'  className='stu-icons' alt=''/>
                    </div>
                    <div className='st-name'>Teacher</div>
                </div>
                <div className='stu'>
                    <div className='stu-icon'>
                        <img src='/images/parents.png'  className='stu-icons' alt=''/>
                        <div className='st-name'>Parents</div>
                    </div>
                </div>
                <div className='stu'>
                    <div className='stu-icon'>
                        <img src='/images/staff.png'  className='stu-icons' alt=''/>
                    </div>
                    <div className='st-name'>Staff</div>
                </div>
                <div className='stu'>
                    <div className='stu-icon'>
                        <img src='/images/admin.png'  className='stu-icons' alt=''/>
                    </div>
                    <div className='st-name'>Super Admin</div>
                </div>
            </div>
            <div className='help-container'>
                <div className='help help-attractive'><File className='file-color'/>Help Document</div>
                <div className='stu-app student-app-btn'><Smartphone />StudentAPP</div>
            </div>
        </div>
    )
}

export default StudentLogin;