import React from 'react';

import Wrapper from '../../../Utilities/Wrapper';
import Card from '../../../Utilities/Card';

    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

// import './style.scss';

const ContactDetails = () => {
    return (
        <Wrapper style={{padding: '60px 0px'}}>
            <Card>
                <form class="row g-3 needs-validation was-validated" novalidate="" style={{padding: '15px 0px'}}>
                    <div class="col-md-6"  style={{padding: '5px 25px'}}>
                        <label for="validationCustom01" class="form-label">Your Name</label>
                        <input type="text" class="form-control" id="validationCustom01" value="Mark" required=""/>
                    </div>
                    <div class="col-md-6" style={{padding: '5px 25px'}}>
                        <label for="validationCustom02" class="form-label">Your Email</label>
                        <input type="text" class="form-control" id="validationCustom02" value="Otto" required=""/>
                    </div>
                    <div class="col-md"  style={{padding: '5px 25px'}}>
                        <label for="validationCustom03" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="validationCustom03" value="Mark" required=""/>
                    </div>
                    <div  style={{padding: '5px 25px'}}>
                        <label for="validationCustom01" class="form-label">Message</label>
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows="10" columns="10"></textarea>
                    </div>
                    <div class="col-12"  style={{padding: '5px 25px'}}>
                        <button class="btn btn-primary" type="submit">Send Message</button>
                    </div>
                </form>
            </Card>
        </Wrapper>
    );
}

export default ContactDetails;