import React from "react";
import './contact.css'

export default function Contact(props){

    return (
        <div className="modal fade contact-form " id="contactModal" tabIndex="-3" aria-labelledby="cancelModalLabel" aria-hidden="true" style={{borderRadius: '45px'}}>
            <div className="modal-dialog">
                <div className="modal-content" >
                    <div className="modal-header" style={{display: 'flex', justifyContent: 'center'}}>
                        <h5 className="modal-title mx-5">Fill Out the Field Below</h5>
                        <button type="button" className="btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <form  name="contact" method="POST" >
                            <div className="mt-2 text-start">
                                <label  className=" form-label">First Name</label>
                                <input name="firstName" type="text" className="form-control" placeholder="John" />
                            </div>
                            <div className="mt-2 text-start">
                                <label  className="form-label">Last Name</label>
                                <input name="lastName" type="text" className="form-control" placeholder="Doe" />
                            </div>
                            <div className="mt-2 text-start">
                                <label  className="form-label">Email</label>
                                <input autoComplete="" name="email" type="email" className="form-control" placeholder="JohnD@yahoo.comm" />
                            </div>
                            <div className="mt-2">
                                <textarea name="message" id=""  rows="8" className="form-control rounded" placeholder="What're you reaching out for today?"></textarea>
                            </div>
                            <button type={'submit'} className="btn bg-primary mt-3 px-5 text-light">Submit</button>
                        </form>
                    </div>
                    <div className="modal-footer text-center" style={{border: 'none', display: 'flex', justifyContent: 'center', fontSize: '1rem'}}>
                    <a href="mailto:ownmindtm@icloud.com?Subject=Customer Support" rel="noreferrer"  target={"_top"} className="text-dark"><i className="bi bi-instagram"></i></a>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}