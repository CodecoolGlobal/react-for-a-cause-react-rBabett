import Button from "./Button";
import { useState } from 'react';


function Contact(){
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const [error, setError] = useState(true);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);



  const [submitPage, setSubmitPage] = useState(false);
  

  let content = 
  <><p>First Name:</p>
  <input placeholder="Hannibal" size={24} value={firstNameInput} onInput= {e => setFirstNameInput(e.target.value)}></input>
  {(firstNameError === true) ? <div>Please fill first name section</div> : <div></div>}
  <p>Last Name:</p>
  <input placeholder="Lecter" size={24} value={lastNameInput} onInput= {e => setLastNameInput(e.target.value)}></input>
  {(lastNameError === true) ? <div color="red">Please fill last name section</div> : <div></div>}
  <p>E-mail:</p>
  <input placeholder="hannibal.lecter@freshmeat.com" size={24} value={emailInput} onInput= {e => setEmailInput(e.target.value)}></input>
  {(emailError === true) ? <div>Please fill e-mail section</div> : <div></div>}
  <p>Subject:</p>
  <input placeholder="Job inquiry" size={24} value={subjectInput} onInput= {e => setSubjectInput(e.target.value)}></input>
  {(subjectError === true) ? <div>Please fill subject section</div> : <div></div>}
  <p>Message:</p>
  <input placeholder=" I have a question: Do you have any cute animal?"  size={24} value={messageInput} onInput= {e => setMessageInput(e.target.value)}></input>
  {(messageError === true) ? <div>Please say something</div> : <div></div>}
  <br></br>
  <br></br>
  <Button className="submit_buttons" text='Submit' handleClick={submitKey}/></>;

  function submitKey() {

    if (firstNameInput === '') {
      setFirstNameError(true)
      setError(true);
    } else {
      setFirstNameError(false);
      setError(false)
    }

    if (lastNameInput === '') {
      setLastNameError(true);
      setError(true)
    } else {
      setLastNameError(false);
      setError(false)
    }

    if (emailInput === '') {
      setEmailError(true);
      setError(true)
    } else {
      setEmailError(false);
      setError(false)
    }

    if (subjectInput === '') {
      setSubjectError(true);
      setError(true)
    } else {
      setSubjectError(false);
      setError(false)
    }

    if (messageInput === '') {
      setMessageError(true);
      setError(true)
    } else {
      setMessageError(false);
      setError(false)
    }

    if (error === false) {
      setSubmitPage(true);
  
      setTimeout(() => {
        setSubmitPage(false)
      }, 10000);
    }
  } 
  
  console.log(submitPage);

  if (submitPage === true) {
    contactForm(firstNameInput, lastNameInput, emailInput, subjectInput, messageInput);
    content = 
    <><div>
    We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
    Have a great day!
    </div>
    </>
  }
  return (content);
}

function contactForm (firstNameInput, lastNameInput, emailInput, subjectInput, messageInput) {
  let form ={
    firstName: firstNameInput,
    lastName: lastNameInput,
    email: emailInput,
    subject: subjectInput,
    message: messageInput,
  }

  return console.log(form)
}

export default Contact;