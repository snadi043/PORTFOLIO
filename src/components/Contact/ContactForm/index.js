import React from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import Card from '../../../Utilities/Card';

const ContactDetails = () => {
    return (
        <Wrapper style={{padding: '60px 0px'}}>
            <Card>
                <form className="row g-3 needs-validation was-validated" novalidate="" style={{padding: '15px 0px'}}>
                    <div className="col-md-6"  style={{padding: '5px 25px'}}>
                        <label htmlFor="validationCustom01" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="validationCustom01" value="Mark" required=""/>
                    </div>
                    <div className="col-md-6" style={{padding: '5px 25px'}}>
                        <label htmlFor="validationCustom02" className="form-label">Your Email</label>
                        <input type="text" className="form-control" id="validationCustom02" value="Otto" required=""/>
                    </div>
                    <div className="col-md"  style={{padding: '5px 25px'}}>
                        <label htmlFor="validationCustom03" className="form-label">Subject</label>
                        <input type="text" className="form-control" id="validationCustom03" value="Mark" required=""/>
                    </div>
                    <div  style={{padding: '5px 25px'}}>
                        <label htmlFor="validationCustom01" className="form-label">Message</label>
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows="10" columns="10"></textarea>
                    </div>
                    <div className="col-12"  style={{padding: '5px 25px'}}>
                        <button className="btn btn-primary" type="submit">Send Message</button>
                    </div>
                </form>
            </Card>
        </Wrapper>
    );
}

export default ContactDetails;