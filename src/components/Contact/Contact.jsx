import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import NearMeIcon from "@mui/icons-material/NearMe";
import GitHubIcon from "@mui/icons-material/GitHub";
import toast from "react-hot-toast";
import "./Contact.css";
import "./ContactError.css";

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        "service_ad47hgs",
        "template_iyte2hn",
        form.current,
        {
          publicKey: "MLiSyC-9GQmGpMwBq",
          reply_to: form.current.from_email.value,
        },
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.log(error.text);
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="section contact" id="contact">
      <div className="section-heading">
        <h2 data-aos="fade-left">Contact Me</h2>
        {/* <p data-aos="fade-right">Let's connect! 😎 </p> */}
      </div>

      <div className="contact-container">
        <div className="form-info">
          <h3 data-aos="fade-down">Talking with me...</h3>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            {/* Name Input */}
            <div data-aos="fade-up">
              <label htmlFor="name" className="form-lable">
                Name
              </label>
              <input
                className={
                  errors.from_name
                    ? "input-error contact-input"
                    : "contact-input"
                }
                {...register("from_name", { required: "Name is required" })}
                placeholder="Enter Your Name"
                id="name"
                autoComplete="name"
              />
              {errors.from_name && (
                <p className="error">{errors.from_name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div data-aos="fade-up">
              <label htmlFor="email" className="form-lable">
                Email
              </label>
              <input
                className={
                  errors.from_email
                    ? "input-error contact-input"
                    : "contact-input"
                }
                type="email"
                {...register("from_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Enter Your Email"
                id="email"
                autoComplete="email"
              />
              {errors.from_email && (
                <p className="error">{errors.from_email.message}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div data-aos="fade-up">
              <label htmlFor="message" className="form-lable">
                Message
              </label>
              <textarea
                className={
                  errors.message ? "input-error contact-input" : "contact-input"
                }
                {...register("message", { required: "Message is required" })}
                placeholder="Something you want to write for me ..."
                id="message"
                rows="8"
              />
              {errors.message && (
                <p className="error">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                className="contact-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <NearMeIcon />
              </button>
            </div>
          </form>
        </div>

        <div className="my-info" data-aos="zoom-out">
          <div className="info">
            <h1>Amr Khaled</h1>
            <i className="info-p">Frontend Developer & React Specialist</i>
          </div>
          <div className="my-contact-info">
            <p>
              <span>Email:</span>{" "}
              <a href="mailto:amro.khaled.eng@gmail.com">
                amro.khaled.eng@gmail.com
              </a>{" "}
            </p>
            <p>
              <span>Address:</span> Mit Ghamr, Dakahlia, Egypt
            </p>
            <p>
              <span>Github:</span>{" "}
              <a
                href="https://github.com/amrkhaled104"
                target="_blank"
                rel="noreferrer"
              >
                github.com/amrkhaled104
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
