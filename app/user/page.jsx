import Link from 'next/link'

function User() {
  return (
    <div className="User">
        <Link href="/user/bodySurvey">Link to body Survey</Link>
        <h1>Log in or Sign up route</h1>
    </div>
  );
}

export default User;