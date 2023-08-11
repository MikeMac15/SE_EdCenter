
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../../Styles/contact.css'

export const Contact_us = () => {

        const [success, setSuccess] = useState(null)
        const form = useRef();
///// Modal
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
///// Modal     
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_zp94zsn', 'template_jw6q8gd', form.current, 'zB32I6I3ggkV8vlA2')
            .then((result) => {
                console.log(result.text);
                setShow(true)
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setSuccess(false)
            });
        };

    

    return (
        <>
        {/* <div className="fullContact"> */}
            <div className="contactBox">
                {/* <div className="conBoxHeader">
                    <h1>Connect with us!</h1>
                    <p>Please email us using the form bellow</p>
                </div> */}

                <div className="conBoxBody">
                    <div className="conBodyLeft">
                        <h2>Send us a message.</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="inputRow">
                                <div className="inputGroup">
                                    <label>Name</label>
                                     <input type="text" name="parent_name"/> {/* /// */}
                                </div>
                                <div className="inputGroup">
                                    <label>Phone</label>
                                    <input type="text" name="phone"/>  {/* /// */}
                                </div>
                            </div>
                            <div className="inputRow">
                                <div className="inputGroup">
                                    <label>Email</label> 
                                    <input type="email" name="email"/>  {/* /// */}
                                </div>
                                <div className="inputGroup">
                                    <label>Students name</label> 
                                    <input type="text" name="child_name"/>  {/* /// */}
                                </div>
                            </div>
                            <label>Message</label>
                            <textarea rows="5" placeholder="Your message here." name="message"></textarea>  {/* /// */}
                            <button type='submit'  id="btn">Send</button>
                            {success &&
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Your message was sent successfuly!</Modal.Title>
                                            </Modal.Header>
                                                <Modal.Body>We will get back to you soon. Thank you for reaching out to Soaring Eagle Educational Center.</Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>}
                        </form>
                    </div>

                <div className="divider"></div>

                <div className="conBodyRight">
                    <h2>Reach us. </h2>
                        
                        <table>
                            <tbody>

                            <tr>
                                <td>Email:</td>
                                <td>contact@seecntr.org</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>(509)738-9129</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>475 S Meyers St
                                    Kettle Falls, WA 99141</td>
                                </tr>
                                <tr>
                                    <td colSpan={3}>

                                        Please visit our Facebook page @{' '} 
                                        
                                        <a href="https://www.facebook.com/SoaringEagleEdCenter" target="_blank">SoaringEagleEdCenter</a>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        {/* </div> */}

        </>

    )
};



export default Contact_us;