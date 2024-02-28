import Link from 'next/link'

function userProfile() {
    return (
      <div className="userProfile">
          <Link href="/user/bodySurvey/userProfile/caloDiary">Link to calories diary</Link>
          <Link href="/user/bodySurvey/userProfile/caloDiary">Link to premium feature</Link>
          <Link href="/user/bodySurvey/userProfile/caloDiary">Link to workout plan</Link>

          <h1>this is user Profile page</h1>
      </div>
    );
  }
  
  export default userProfile;