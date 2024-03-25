import Link from 'next/link'

function bodySurvey() {
    return (
      <div className="bodySurvey">
          <Link href="/userProfile">Link to user Profile</Link>
          <h1>body survey page</h1>
          
      </div>
    );
  }
  
  export default bodySurvey;