"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
  const [toastMessage, setToastMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/saad.procoder@gmail.com", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setToastMessage("Message sent successfully!");
      setTimeout(() => setToastMessage(""), 4000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="section bg-alt">
      <div className="container">
        <h2 className="section-title"><span className="highlight">Contact</span> Me</h2>
        <p className="contact-subtitle">Feel free to contact me anytime!</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-form-container glass-panel"
        >
          {/* FormSubmit makes this fully operational without backend code */}
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="hidden" name="_subject" value="New message from Portfolio!" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" required placeholder="Hi Saad, I'd like to work with you..." rows="5"></textarea>
            </div>

            <button type="submit" className="submit-btn" aria-label="Send Message">
              <FaPaperPlane className="btn-icon" /> Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Muhammad Saad. All Rights Reserved.</p>
      </footer>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="toast-notification"
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
              color: 'white',
              padding: '16px 24px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
              zIndex: 9999,
              fontWeight: 500,
              fontSize: '1rem'
            }}
          >
            <FaCheckCircle size={20} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
