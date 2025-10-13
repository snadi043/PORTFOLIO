import React, {useState} from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import Card from '../../../Utilities/Card';

const ContactDetails = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    };
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    const subjectChangeHandler = (e) => {
        setSubject(e.target.value)
    }
    const messageChangeHandler = (e) => {
       setMessage(e.target.value)
    }
    const submitChangeHandler = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }
    return (
        <Wrapper style={{padding: '60px 0px'}}>
            <Card>
                <form className="row g-3 needs-validation was-validated" noValidate="" style={{padding: '15px 0px'}}>
                    <div className="col-md-6"  style={{padding: '5px 25px'}}>
                        <label htmlFor="validationCustom01" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={nameChangeHandler} required=""/>
                    </div>
                    <div className="col-md-6" style={{padding: '5px 25px'}}>
                        <label htmlFor="validationCustom02" className="form-label">Your Email</label>
                        <input type="text" className="form-control" id="email" value={email} onChange={emailChangeHandler} required=""/>
                    </div>
                    <div className="col-md"  style={{padding: '5px 25px'}}>
                        <label htmlFor="validationCustom03" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="subject" value={subject} onChange={subjectChangeHandler} required=""/>
                    </div>
                    <div  style={{padding: '5px 25px'}}>
                        <label htmlFor="validationCustom01" className="form-label">Message</label>
                        <textarea className="form-control" placeholder="Leave a comment here" id="message" rows="10" columns="10" onChange={messageChangeHandler} value={message}></textarea>
                    </div>
                    <div className="col-12"  style={{padding: '5px 25px'}}>
                        <button className="btn btn-primary" type="submit" onSubmit={submitChangeHandler}>Send Message</button>
                    </div>
                </form>
            </Card>
        </Wrapper>
    );
}

export default ContactDetails;