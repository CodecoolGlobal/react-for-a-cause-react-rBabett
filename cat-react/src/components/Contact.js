import Button from "./Button";
import { useState } from 'react';


function Contact(){
  const [submitPage, setSubmitPage] = useState(false);

  let content;

  function submitKey() {

    setSubmitPage(true);

    setTimeout(() => {
      setSubmitPage(false)
    }, 10000);
  } 
  
  if (submitPage === true) {

    content = 
    <><div>Thank You</div>
    </>
  } else {

    content = 
  <><p>First Name:</p>
  <input placeholder="Hannibal" size={24}></input>
  <p>Last Name:</p>
  <input placeholder="Lecter" size={24}></input>
  <p>E-mail:</p>
  <input placeholder="hannibal.lecter@freshmeat.com" size={24}></input>
  <p>Subject:</p>
  <input placeholder="Job inquiry" size={24}></input>
  <p>Message:</p>
  <input placeholder=" I have a question: Do you have any cute animal?"  size={24} height="100px"></input>
  <br></br>
  <br></br>
  <Button className="submit_buttons" text='Submit' handleClick={submitKey}/></>;
  }

  return (content);
}


export default Contact;