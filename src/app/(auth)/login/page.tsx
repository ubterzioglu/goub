export default function LoginPage() {
  return (
    <div className="auth-shell">
      <section className="auth-stage">
        <div className="auth-editorial">
          <span className="section-kicker">Access the room</span>
          <h1>Documents come in messy. Decisions should not.</h1>
          <p>
            Sign into the GOUB workspace to review offers, surface risk, and export clean,
            executive-ready outputs from one disciplined operating surface.
          </p>
          <div className="auth-signal-list">
            <span>Private-by-default storage</span>
            <span>Evidence-backed answers</span>
            <span>Luxury-grade compare views</span>
          </div>
        </div>

        <section className="auth-card">
          <span className="section-kicker">Magic link stand-in</span>
          <h2 className="auth-form-title">Enter the workspace.</h2>
          <p>
            This demo login sets a local session cookie so the protected routes behave like
            the final App Router shell.
          </p>
          <form className="auth-form" action="/api/auth/demo" method="post">
            <label htmlFor="email">
              Work email
              <input id="email" name="email" type="email" placeholder="team@goub.net" required />
            </label>
            <input type="hidden" name="redirectTo" value="/workspace/atlas-procurement" />
            <button className="submit-button" type="submit">
              Magic link gonder
            </button>
          </form>
        </section>
      </section>
    </div>
  );
}
