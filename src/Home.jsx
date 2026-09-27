export default function Home() {
    return (
        <main className="home">
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-label">WELCOME TO REACTSPACE</span>
                    <h1>Build something<span> amazing.</span></h1>
                    <p>A simple React project where ideas become beautiful digital experiences.</p>
                    <div className="hero-buttons">
                        <a href="/contact" className="primary-button">Contact Me<span>→</span></a>
                        <a href="#about" className="secondary-button">Explore</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="glow"></div>

                    <div className="code-card">
                        <div className="window-top">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="code-content">
                            <p><b>&lt;React&gt;</b></p>
                            <p className="indent">Build<span>_</span></p>
                            <p className="indent">Learn<span>_</span></p>
                            <p className="indent">Create<span>_</span></p>
                            <p><b>&lt;/React&gt;</b></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features" id="about">
                <div className="feature">
                    <div className="feature-icon">⚡</div>
                    <h3>Fast Learning</h3>
                    <p>Learn React step by step and build real projects.</p>
                </div>

                <div className="feature">
                    <div className="feature-icon">◈</div>
                    <h3>Modern Design</h3>
                    <p>Create clean and beautiful interfaces for your projects. </p>
                </div>

                <div className="feature">
                    <div className="feature-icon">⌘</div>
                    <h3>Build & Create</h3>
                    <p>Turn your ideas into useful applications.</p>
                </div>
            </section>
        </main>
    );
}