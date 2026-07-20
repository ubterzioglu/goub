export default function SignupPage() {
  return (
    <div className="auth-shell">
      <section className="auth-card">
        <span className="section-kicker">Self-serve start</span>
        <h1>Create a secure workspace shell.</h1>
        <p>
          In production this page would bind to Supabase Auth, org creation, and workspace
          membership setup. For now it mirrors the report and routes to the demo workspace.
        </p>
        <form className="auth-form" action="/api/auth/demo" method="post">
          <label htmlFor="signup-email">
            Work email
            <input
              id="signup-email"
              name="email"
              type="email"
              placeholder="ops@goub.net"
              required
            />
          </label>
          <input type="hidden" name="redirectTo" value="/workspace/atlas-procurement" />
          <button className="submit-button" type="submit">
            Workspace olustur
          </button>
        </form>
      </section>
    </div>
  );
}
