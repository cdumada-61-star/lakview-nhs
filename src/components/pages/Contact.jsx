import React from 'react';

function Contact() {
  return (
    <main className="pt-0 mt-0">
      <section className="pt-0 mt-0">
        <div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <p >
                Ready to start your next project with us? Send us a message and we will get back to you as soon as possible!
              </p>
            </div>
          </div>

          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
              {/* SB Forms Contact Form (requires SB Forms API token to be functional) */}
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* Name input */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Full name</label>
                  <div className="invalid-feedback" data-sb-feedback="name:required">
                    A name is required.
                  </div>
                </div>

                {/* Email address input */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">Email address</label>
                  <div className="invalid-feedback" data-sb-feedback="email:required">
                    An email is required.
                  </div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>

                {/* Phone number input */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label htmlFor="phone">Phone number</label>
                  <div className="invalid-feedback" data-sb-feedback="phone:required">
                    A phone number is required.
                  </div>
                </div>

                {/* Message input */}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Enter your message here..."
                    style={{ height: "3rem" }}
                    data-sb-validations="required"
                  />
                  <label htmlFor="message">Message</label>
                  <div className="invalid-feedback" data-sb-feedback="message:required">
                    A message is required.
                  </div>
                </div>

                {/* Success / error messages (hidden by default) */}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>

                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button className="btn btn-primary btn-xl" id="submitButton" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

         
        </div>
      </section>
    </main>
  );
}

export default Contact;