export default function LoginPage() {
  return (
    <div className="auth-shell">
      <section className="auth-card">
        <span className="section-kicker">Magic link stand-in</span>
        <h1>Work starts in sixty seconds.</h1>
        <p>
          This demo login sets a local session cookie so the protected workspace routes can
          behave like the App Router shell proposed in the report.
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
    </div>
  );
}
