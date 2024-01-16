import {React,useState} from 'react';
import Profile from '../../assets/images/profile.jpg'
import { FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FaPlusCircle } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Card = () => {
    const [recipient, setRecipient] = useState('sujonhowlader67@gmail.com');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const handleSendEmail = () => {
        const mailtoLink = `https://mail.google.com/mail/?view=cm&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
      };
    const contactBtn=()=>{
        window.open('https://mail.google.com/', '_blank');
    }
    return (
            <>
                <div className='card shadow-lg border rounded-sm border-0 mb-5'>
                    <img className='img-fluid w-50 rounded-circle mb-3 img-thumbnail shadow-sm mx-auto my-5' src={Profile} alt="images"/>
                    <div className='mx-auto text-center'>
                        <h5 className='text-uppercase'>Sadrul Hasan</h5>
                        <div>
                            <span className='text-muted'>Digital Marketing Specialist</span><br/>
                            <span className='text-muted'><FaMapMarkerAlt className='text-primary' size={12}/>  Mirpur,Dhaka,Bangladesh</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center mb-3'>
                        <button onClick={contactBtn}  className='text-decoration-none text-white button p-2 w-50 mt-4 mb-3 text-center'><FaPlusCircle/> Hire Me</button>
                        <button  className='text-decoration-none text-white button p-2 w-50 text-center' data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><CgMail size={20}/> Messages</button>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <h5>Find Me : </h5>
                        <ul className='list-inline'>
                            <li className='list-inline-item '><NavLink to="https://www.behance.net/damiaogiovani/projects" ><FaFacebookSquare className="bg-primary p-2 rounded-circle border" size={30}/></NavLink></li>
                            <li className='list-inline-item '><NavLink to={"https://www.linkedin.com/feed"}><FaLinkedin className="bg-primary p-2 rounded-circle border" size={30}/></NavLink></li>
                            <li className='list-inline-item'><NavLink to={"https://www.behance.net/damiaogiovani/projects"}><FaInstagramSquare className="bg-primary p-2 rounded-circle border" size={30}/></NavLink></li>
                        </ul>
                    </div>
                    <div className='sm:hidden border border-primary m-4 rounded p-2 text-muted'>
                        <h5 className='text-uppercase'>About Me</h5>
                        <hr className='text-primary'/>
                        <ul className='list-unstyled mt-2'>
                            <li className='mb-2'><FaBirthdayCake className='text-primary' size={20}/> Birthdate: 20 Jan, 2000</li>
                            <li className='mb-2'><MdEmail className='text-primary ' size={20}/> Email: sadrul.hasan@qcoom.com</li>
                            <li className='mb-2'><FaPhoneAlt className='text-primary ' size={15}/> Phone: +880 017088-71793</li>
                            
                        </ul>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
                                        <input readOnly={true} type="email" className="form-control" 
                                            id="recipient"
                                            value={recipient}
                                            onChange={(e) => setRecipient(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">subject:</label>
                                        <input type="text" className="form-control"
                                                id="subject"
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                            />
                                    </div>      
                                    <div className="mb-3">
                                        <label htmlFor="message-text" className="col-form-label">Message:</label>
                                        <textarea className="form-control"  id="body"
                                            value={body}
                                            onChange={(e) => setBody(e.target.value)}></textarea>
                                    </div>
                                </form>
                            </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" onClick={handleSendEmail} className="btn btn-primary">Send message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sm:hidden m-3'>
                        <p>I am a Marketer with specialization in digitalmarketing, media planning, Strategic Planning,
                            Communication & Media buying and social mediamarketing. I am currently work as Head of Digital
                            Marketing and Media Buying at Qcoom Ltd</p>
                    </div>
                </div>
            </>
    );
};

export default Card;