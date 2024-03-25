import Link from 'next/link'
import "../style.css"
function User() {
  return (
    <div>
    <header className="header" id="pre_login">
    <nav className="header" id="pre_login">
        <ul>
          <a href="/fitAI">Home</a>
          <a href="/fitAI/about">About</a>
          <a href="/fitAI/contact">Contact</a>
          <a href="/fitAI/register">Register</a>
          <a href="/fitAI/login">Login</a>
        </ul>
      </nav>

    </header>
    </div>
  );
}

export default User;