import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnjvdggd");

  if (state.succeeded) {
    return (
      <div className="contact-form">
        <p className="form-message success" role="alert">
          Thank you! Your message has been sent successfully.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
        />
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          aria-required="true"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        className="submit-button"
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
