import React, { Component } from 'react';
// import { saveAs } from 'file-saver';

// import styling 
import '../styling/form-master.scss';
import './BasicForm.scss';

//import application components

export default class BasicForm extends Component {

    buildJSON(e) {
        e.preventDefault();
        let basics = {
            "name": e.target.userName.value,
            "label": e.target.userTitle.value,
            "email": e.target.userEmail.value,
            "website": e.target.userWebsite.value,
            "telephone": e.target.userTelephone.value,
            "location": {
                "address": e.target.userStreet.value,
                "postalCode": e.target.userPostcode.value,
                "city": e.target.userCity.value,
                "region": e.target.userProv.value
            },
            "summary": e.target.userSummary.value

        };
        // let output = JSON.stringify({ basics });

        localStorage.setItem('basics', JSON.stringify({ basics }));
        // var file = new File([localStorage.getItem('basics')], 'JSH.json');
        // saveAs(file);
        console.log(localStorage.getItem('basics'));
    }

    render() {
        return (
            <section className="contact">
                <form className="contact__form form-layout" id="inputCapture" onSubmit={this.buildJSON}>   
                    <section className="contact__intro">
                        <h1>Resume Builder - Contact Info</h1>
                    </section>
                    <div className="contact__form-name form-div">
                        <label className="contact__name-label form-label" htmlFor="name">Enter your name:</label>
                        <input className="contact__name-field form-field" type="text" name="name" id="userName"></input>
                    </div>
                    <div className="contact__form-title form-div">
                        <label className="contact__title-label form-label" htmlFor="title">Enter your job title:</label>
                        <input className="contact__title-field form-field" type="text" name="title" id="userTitle"></input>
                    </div>
                    <div className="contact__form-email form-div">
                        <label className="contact__email-label form-label" htmlFor="email">Enter your email address:</label>
                        <input className="contact__email-field form-field" type="email" name="email" id="userEmail" required/>
                    </div>
                    <div className="contact__form-website form-div">
                        <label className="contact__website-label form-label" htmlFor="website">Enter your portfolio website:</label>
                        <input className="contact__website-field form-field" type="text" name="website" id="userWebsite" required/>
                    </div>
                    <div className="contact__form-location">
                        <label className="contact__location-label form-label" htmlFor="address">Enter your address:</label>
                        <input className="contact__location-street form-field" type="text" name="address" id="userStreet" required/>
                        <label className="contact__city-label form-label" htmlFor="city">Enter your city:</label>
                        <input className="contact__location-city form-field" type="text" name="city" id="userCity" required/>
                        <label className="contact__prov-label form-label" htmlFor="province">Enter your province:</label>
                        <input className="contact__location-prov form-field" type="text" name="province" id="userProv" required/>
                        <label className="contact__postcode-label form-label" htmlFor="postcode">Enter your postal code:</label>
                        <input className="contact__location-postcode form-field" type="text" name="postcode" id="userPostcode" required/>
                    </div>
                    <div className="contact__form-telephone form-div">
                        <label className="contact__telephone-label form-label" htmlFor="telephone">Enter your telephone number:</label>
                        <input className="contact__telephone-field form-field" type="number" name="telephone" id="userTelephone" required/>
                    </div>
                    <div className="contact__form-summary form-div">
                        <label className="contact__summary-label form-label" htmlFor="summary">Provide a summary of your objectives:</label>
                        <textarea className="contact__summary-field form-field" type="text" name="summary" id="userSummary" required/>
                    </div>
                    <button className="contact__button" name="contact-button">Save Changes</button>
                </form>
            </section>
        );
    }
}

