import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "A name is required.";
    if (!form.email.trim()) {
      newErrors.email = "An email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!form.phone.trim()) newErrors.phone = "A phone number is required.";
    if (!form.message.trim()) newErrors.message = "A message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Form submitted:", form);
    }
  };

  return (
    <main className="page-section" id="contact" style={{ paddingTop: "50px"}}>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">Let's Get In Touch!</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">
              Ready to start your next project with us? Send us a message and we
              will get back to you as soon as possible!
            </p>
          </div>
        </div>

        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <form id="contactForm" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form-floating mb-3">
                <input
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  value={form.name}
                  onChange={handleChange}
                />
                <label htmlFor="name">Full name</label>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              {/* Email */}
              <div className="form-floating mb-3">
                <input
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email address</label>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              {/* Phone */}
              <div className="form-floating mb-3">
                <input
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={form.phone}
                  onChange={handleChange}
                />
                <label htmlFor="phone">Phone number</label>
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone}</div>
                )}
              </div>

              {/* Message */}
              <div className="form-floating mb-3">
                <textarea
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  id="message"
                  placeholder="Enter your message here..."
                  style={{ height: "10rem" }}
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">Message</label>
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              {/* Submit messages */}
              {submitted && !Object.keys(errors).length && (
                <div className="text-center mb-3 fw-bolder text-success">
                  Form submission successful!
                </div>
              )}

              {/* Submit button */}
              <div className="d-grid">
                <button className="btn btn-primary btn-xl" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
