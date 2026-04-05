"use client";

import { useState } from "react";

const inquirySubjects: Record<string, string> = {
  schools: "School or NGO inquiry",
  partners: "Partnership or sponsor inquiry",
  media: "Media inquiry",
  applicants: "Applicant inquiry",
  general: "General inquiry",
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("general");
  const [message, setMessage] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = inquirySubjects[inquiry] ?? inquirySubjects.general;
    const body = [
      `Name: ${name || "-"}`,
      `Organization: ${organization || "-"}`,
      `Email: ${email || "-"}`,
      `Inquiry type: ${inquiry}`,
      "",
      message || "-",
    ].join("\n");

    window.location.href = `mailto:hello@projectgrid.org?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__grid">
        <label className="field">
          <span className="field__label font-mono">Name</span>
          <input
            className="field__input"
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            type="text"
            value={name}
          />
        </label>

        <label className="field">
          <span className="field__label font-mono">Organization</span>
          <input
            className="field__input"
            onChange={(event) => setOrganization(event.target.value)}
            placeholder="School, company, or publication"
            type="text"
            value={organization}
          />
        </label>

        <label className="field">
          <span className="field__label font-mono">Email</span>
          <input
            className="field__input"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            type="email"
            value={email}
          />
        </label>

        <label className="field">
          <span className="field__label font-mono">Routing</span>
          <select
            className="field__input"
            onChange={(event) => setInquiry(event.target.value)}
            value={inquiry}
          >
            <option value="general">General inquiry</option>
            <option value="schools">Schools and NGOs</option>
            <option value="partners">Sponsors and partners</option>
            <option value="media">Media</option>
            <option value="applicants">Applicants</option>
          </select>
        </label>
      </div>

      <label className="field">
        <span className="field__label font-mono">Message</span>
        <textarea
          className="field__input field__input--textarea"
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us what you are reaching out about."
          rows={7}
          value={message}
        />
      </label>

      <button className="page-cta contact-form__button" type="submit">
        Open email draft
      </button>
    </form>
  );
}
