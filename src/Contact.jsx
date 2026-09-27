import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <main className="contact-page">
            <section className="contact-container">
                <div className="contact-info">
                    <span className="contact-label">
                        GET IN TOUCH
                    </span>

                    <h1>
                        Let's talk about
                        <span> your idea.</span>
                    </h1>

                    <p>
                        Have a question, project idea or
                        just want to say hello? Send me
                        a message.
                    </p>

                    <div className="contact-items">
                        <div className="contact-item">
                            <div className="contact-icon">
                                ✉
                            </div>

                            <div>
                                <span>Email</span>
                                <strong>
                                    hello@example.com
                                </strong>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                ◉
                            </div>

                            <div>
                                <span>Location</span>
                                <strong>
                                    Available Worldwide
                                </strong>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                ⚡
                            </div>

                            <div>
                                <span>Response</span>
                                <strong>
                                    Usually within 24h
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-card">
                    <div className="form-heading">
                        <span>MESSAGE</span>
                        <h2>Send a message</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="input-box">
                                <label>Your Name</label>

                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                />
                            </div>

                            <div className="input-box">
                                <label>Email Address</label>

                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="input-box">
                            <label>Subject</label>

                            <input
                                type="text"
                                placeholder="What is this about?"
                                value={subject}
                                onChange={(e) =>
                                    setSubject(e.target.value)
                                }
                            />
                        </div>

                        <div className="input-box">
                            <label>Your Message</label>

                            <textarea
                                placeholder="Tell me about your idea..."
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="send-button"
                        >
                            Send Message
                            <span>→</span>
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}