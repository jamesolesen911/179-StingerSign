import "../style.css";
import "../style2.css";
import "../style3.css";


export default function Signature() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Profile</h2>
        <label for ="FirstName">First Name</label> <br></br>
        <input type="text" id="FirstName" name="fname" placeholder="First Name"></input><br></br><br></br>
        <label for ="LastName">Last Name</label> <br></br>
        <input type="text" id="LastName" name="lname" placeholder="Last Name"></input><br></br><br></br>
        <label for ="MiddleName">Middle Name (Optional)</label> <br></br>
        <input type="text" id="MiddleName" name="mname" placeholder="Middle Name"></input><br></br><br></br>
        <label for ="email">Email </label> <br></br>
        <input type="text" id="email" name="email" placeholder="Email"></input><br></br><br></br>
        <label for ="nickname">Nickname </label> <br></br>
        <input type="text" id="nickname" name="nickname" placeholder="Nickname"></input><br></br><br></br>
        <label for ="phoneNumber">PhoneNumber </label> <br></br>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"></input><br></br><br></br>


      </main>
    );
  }
