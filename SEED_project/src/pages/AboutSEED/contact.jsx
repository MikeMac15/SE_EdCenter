import { Form } from "react-router-dom";
import '../../Styles/contact.css'

export const Contact_us = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

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
                        <Form>
                            <div className="inputRow">
                                <div className="inputGroup">
                                    <label>Name</label>
                                    <input type="text" />
                                </div>
                                <div className="inputGroup">
                                    <label>Phone</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="inputRow">
                                <div class="inputGroup">
                                    <label>Email</label> 
                                    <input type="email"/>
                                </div>
                                <div class="inputGroup">
                                    <label>Students name</label> 
                                    <input type="text"/>
                                </div>
                            </div>
                            <label>Message</label>
                            <textarea rows="5" placeholder="Your message here."></textarea>
                            <button type='submit'  id="btn">Send</button>
                        </Form>
                    </div>

                <div className="divider"></div>

                <div className="conBodyRight">
                    <h2>Reach us. </h2>
                        
                        <table>
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
                                    <h5>Please visit our Facebook page @ https://www.facebook.com/SoaringEagleEdCenter</h5>
                                </tr>
                        </table>
                    </div>
                </div>

            </div>





        
        {/* </div> */}


        </>


 

    )
};



export default Contact_us;