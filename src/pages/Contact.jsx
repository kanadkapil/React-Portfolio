import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-Z\s]{2,50}$/.test(form.name)) {
      newErrors.name = 'Name should be 2-50 letters only';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!/^\d{10,15}$/.test(form.contact)) {
      newErrors.contact = 'Contact number must be 10-15 digits';
    }

    if (form.subject.trim().length < 3) {
      newErrors.subject = 'Subject is too short';
    }

    if (form.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoLink = `mailto:your@email.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nContact: ${form.contact}\n\n${form.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="min-h-screen p-6 backdrop-blur-md container mx-auto rounded-xl text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4  p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 rounded text-2xl bg-slate-50 text-lime-900"
                required
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 rounded text-2xl bg-slate-50 text-lime-900"
                required
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                className="w-full p-3 rounded text-2xl bg-slate-50 text-lime-900"
                required
              />
              {errors.contact && <p className="text-red-400 text-sm mt-1">{errors.contact}</p>}
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 rounded text-2xl bg-slate-50 text-lime-900"
                required
              />
              {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
            </div>
          </div>
          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded text-2xl bg-slate-50 text-lime-900"
              required
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-lime-700 rounded hover:bg-purple-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Personal Info Card */}
        <div className="mt-10 p-6 rounded-lg shadow-lg  space-y-2">
          <h3 className="text-2xl font-semibold mb-4">My Contact Info</h3>
          <p><strong>Email:</strong> your@email.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p><strong>Address:</strong> 123 Your Street, City, Country</p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
