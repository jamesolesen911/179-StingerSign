import "../style.css";
import "../style2.css";
import "../style3.css";

export default function Profile() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Profile</h2>
        <label htmlFor ="FirstName">First Name</label> <br></br>
        <input type="text" id="FirstName" name="fname" placeholder="First Name"></input><br></br><br></br>
        <label htmlFor="LastName">Last Name</label> <br></br>
        <input type="text" id="LastName" name="lname" placeholder="Last Name"></input><br></br><br></br>
        <label htmlFor ="MiddleName">Middle Name (Optional)</label> <br></br>
        <input type="text" id="MiddleName" name="mname" placeholder="Middle Name"></input><br></br><br></br>
        <label htmlFor ="email">Email </label> <br></br>
        <input type="text" id="email" name="email" placeholder="Email"></input><br></br><br></br>
        <label htmlFor ="nickname">Nickname </label> <br></br>
        <input type="text" id="nickname" name="nickname" placeholder="Nickname"></input><br></br><br></br>
        <label htmlFor ="phoneNumber">PhoneNumber </label> <br></br>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"></input><br></br><br></br>


      </main>
    );
  }

  