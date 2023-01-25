import Button from "./Button";
import Input from "./Input";
import { useState } from 'react';


function Contact(){
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  /* const [error, setError] = useState(true); */
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [submitPage, setSubmitPage] = useState(false);

  let error = true;

  const contactInputs = [{
    placeholder: "Hannibal",
    size: 24,
    value: firstNameInput,
    onInput: (e) => setFirstNameInput(e.target.value),
  }, {
    placeholder: "Lecter",
    size: 24,
    value: lastNameInput,
    onInput: (e) => setLastNameInput(e.target.value),
  }, {
    placeholder: "hannibal.lecter@freshmeat.com",
    size: 24,
    value: emailInput,
    onInput: (e) => setEmailInput(e.target.value),
  }, {
    placeholder: "Job inquiry",
    size: 24,
    value: subjectInput,
    onInput: (e) => setSubjectInput(e.target.value),
  }, {
    placeholder: "I have a question: Do you have any cute animal?",
    size: 24,
    value: messageInput,
    onInput: (e) => setMessageInput(e.target.value),
  }];

  let filteredValue = contactInputs.filter(input => (input.value));

  if (filteredValue.length === 5) {
    error = false;
  }
 
  let firstNameInputField = <Input placeholder={contactInputs[0].placeholder} size={contactInputs[0].size} value={contactInputs[0].value} onInput={contactInputs[0].onInput} />
  let lastNameInputField = <Input placeholder={contactInputs[1].placeholder} size={contactInputs[1].size} value={contactInputs[1].value} onInput={contactInputs[1].onInput} />;
  let emailInputField = <Input placeholder={contactInputs[2].placeholder} size={contactInputs[2].size} value={contactInputs[2].value} onInput={contactInputs[2].onInput} />;
  let subjectInputField = <Input placeholder={contactInputs[3].placeholder} size={contactInputs[3].size} value={contactInputs[3].value} onInput={contactInputs[3].onInput} />;
  let messageInputField = <Input placeholder={contactInputs[4].placeholder} size={contactInputs[4].size} value={contactInputs[4].value} onInput={contactInputs[4].onInput} />;
  
  let content = 
    <><p>First Name:</p>
    {firstNameInputField}
    {(firstNameError === true) ? <div>Please fill first name section</div> : <div></div>}
    <p>Last Name:</p>
    {lastNameInputField}
    {(lastNameError === true) ? <div>Please fill last name section</div> : <div></div>}
    <p>E-mail:</p>
    {emailInputField}
    {(emailError === true) ? <div>Please fill e-mail section</div> : <div></div>}
    <p>Subject:</p>
    {subjectInputField}
    {(subjectError === true) ? <div>Please fill subject section</div> : <div></div>}
    <p>Message:</p>
    {messageInputField}
    {(messageError === true) ? <div>Please say something</div> : <div></div>}
    <br></br>
    <br></br>
    <Button className="submit_buttons" text='Submit' handleClick={submitKey}/></>;


  function submitKey() {

    if (firstNameInput === '') {
      setFirstNameError(true)
    } else {
      setFirstNameError(false);
    }

    if (lastNameInput === '') {
      setLastNameError(true)
    } else {
      setLastNameError(false);
    }

    if (emailInput === '') {
      setEmailError(true)
    } else {
      setEmailError(false);
    }

    if (subjectInput === '') {
      setSubjectError(true)
    } else {
      setSubjectError(false);
    }

    if (messageInput === '') {
      setMessageError(true)
    } else {
      setMessageError(false);
    }

    if (error === false) {
      setSubmitPage(true);
  
      setTimeout(() => {
        setSubmitPage(false)
      }, 10000);
    } 

  } 
  
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