import React, { useState } from "react";
import Feedback from "./feedback";
import emailjs from "@emailjs/browser";
import Spinner from "./spinner";

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    to_name: "Artem",
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });
  const [messageSend, setMessageSend] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send("service_t4r731i", "template_ia6j8sp", toSend, "mbyI7ZvGSZLs24uFu")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsLoading(false);
        setMessageSend(true);
        setToSend({
          to_name: "Artem",
          from_name: "",
          reply_to: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setIsLoading(false);
        setError(err);
      });
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="md:flex items-center py-20">
      <form className="md:w-6/12 w-9/12 m-auto md:m-0 text-black md:mr-5" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <input
            required
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
            placeholder="Name"
            type="text"
            className="w-full mb-3 p-3 mr-2 rounded"
          />
          <input
            required
            name="reply_to"
            value={toSend.reply_to}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full mb-3 p-3 ml-2 rounded"
          />
        </div>
        <input
          required
          name="subject"
          value={toSend.subject}
          onChange={handleChange}
          type="text"
          placeholder="Subject"
          className="w-full mb-3 p-3 rounded"
        />
        <textarea
          required
          name="message"
          value={toSend.message}
          onChange={handleChange}
          rows={10}
          placeholder="Message"
          className="w-full mb-3 p-3 rounded"
        ></textarea>
        <div className="flex">
          <button
            disabled={error.length > 0}
            type="submit"
            className="text-lg text-white bg-accent-3 p-3 rounded-lg w-full text-center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalFullscreen"
          >
            {isLoading ? (
              <span className="flex justify-center">
                <Spinner /> Sending...
              </span>
            ) : (
              "Send message"
            )}
          </button>
        </div>
        <span className="text-red-500">{error}</span>

        {messageSend && <Feedback setMessageSend={setMessageSend} />}
      </form>
      <div className="md:w-6/12 w-9/12 md:m-0 m-auto mt-8 md:mt-0 md:ml-5 text-xl">
        <p className="mb-5">
          Feel free to contact me, I’m most interested in job offers, freelance
          jobs, and security consultations.
        </p>
        <ul className="list-disc ml-5 mb-5">
          <li>Landing pages</li>
          <li>E-commerce apps</li>
          <li>Blog website</li>
          <li>Business website</li>
          <li>Event website</li>
          <li>Network security</li>
          <li>Cloud security</li>
          <li>Internet of Things (IoT) security</li>
          <li>Application security</li>
          <li>Critical infrastructure security</li>
        </ul>
        <p>
          You can contact me if none of the topics above is your subject, and I
          will respond asap.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
