import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Contcat(props) {
  authschema = {
    name: yup.string().required("please Enter your name"),
    email: yup.string().required("please Enter email").email("please Enter Valid email"),
    password: yup.string().required("Enter your Password").min(8),
}

init = {
  name: '',
  email: '',
  password: '',
}

    let schema = yup.object().shape(appoinschema);

       const formik = useFormik({
            initialValues: initapp,
            validationSchema: schema,
             onSubmit: values => {
            console.log(values);
        },
    });

    const { handleChange, errors, handleSubmit ,touched,OnBlur} = formik;



    return (
        <div>
            <section id="contact" classname="contact">
  <div classname="container">
    <div classname="section-title">
      <h2>Contact</h2>
      <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
    </div>
  </div>
  <div classname="container">
    <div classname="row mt-5">
      <div classname="col-lg-4">
        <div classname="info">
          <div classname="address">
            <i classname="bi bi-geo-alt">
              <h4>Location:</h4>
              <p> F-505, Inovative Plazza New Delhi, India</p>
            </i></div><i classname="bi bi-geo-alt">
            <div classname="email">
              <i classname="bi bi-envelope">
                <h4>Email:</h4>
                <p>cityhospital@example.com</p>
              </i></div><i classname="bi bi-envelope">
              <div classname="phone">
                <i classname="bi bi-phone">
                  <h4>Call:</h4>
                  <p>+91 9988776655</p>
                </i></div><i classname="bi bi-phone">
              </i></i></i></div><i classname="bi bi-geo-alt"><i classname="bi bi-envelope"><i classname="bi bi-phone">
            </i></i></i></div><i classname="bi bi-geo-alt"><i classname="bi bi-envelope"><i classname="bi bi-phone">
            <div classname="col-lg-8 mt-5 mt-lg-0">
              <form action method="post" role="form" classname="php-email-form">
                <div classname="row">
                  <div classname="col-md-6 form-group">
                    <input type="text" name="name" classname="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div classname="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" classname="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div classname="form-group mt-3">
                  <input type="text" classname="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div classname="form-group mt-3">
                  <textarea classname="form-control" name="message" rows="{5}" placeholder="Message" required defaultvalue="{&quot;&quot;}" defaultValue={"                                </div>\n                                <div className=\"my-3\">\n                                    <div className=\"loading\">Loading</div>\n                                    <div className=\"error-message\" />\n                                    <div className=\"sent-message\">Your message has been sent. Thank you!</div>\n                                </div>\n                                <div className=\"text-center\"><button type=\"submit\">Send Message</button></div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </section>\n"} /></div></form></div></i></i></i></div></div></section>

        </div>
    );
}

export default Contcat;