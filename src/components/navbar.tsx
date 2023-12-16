import  React  from "react";
import Logo from "./logo";

class Navbar extends React.Component {
 render() {
  return (<div className="container">
   <Logo/>

   <ul className="rec">
    <li>Home</li>
    <li>Skills</li>
    <li>About Us</li>
    <li>Pricing</li>
    <li>Contacts</li>
   </ul>
   <button className="btn">Let's Talk</button>
  </div>
  )

 }
}
export default Navbar