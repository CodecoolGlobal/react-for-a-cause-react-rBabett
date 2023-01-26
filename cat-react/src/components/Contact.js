import Button from "./Button";
import Input from "./Input";
import { useState } from 'react';
import donatePage from "./Donate";

const Contact = (actvivePage) => {

  let currentPage = Object.values(actvivePage).join('');

  
  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [donateInput, setDonateInput] = useState('$');
  
  let firstNameOriginal = 'Hannibal';
  let lastNameOriginal = 'Lecter';
  let emailOriginal = 'hannibal.lecter@freshmeat.com';
  let subjectOriginal = 'Job inquiry';
  let messageOriginal = 'I have a question: Do you have any cute animal?';
  let donateOriginal = '$';
  
  const [firstNameExist, setFirstNameExist] = useState(firstNameOriginal);
  const [lastNameExist, setLastNameExist] = useState(lastNameOriginal);
  const [emailExist, setEmailExist] = useState(emailOriginal);
  const [subjectExist, setSubjectExist] = useState(subjectOriginal);
  const [messageExist, setMessageExist] = useState(messageOriginal);
  const [donateExist, setDonateExist] = useState(donateOriginal);
  
  
  const [submitPage, setSubmitPage] = useState(false);
  
  let empty = true;

  const contactInputs = [{
    name: 'First Name',
    placeholder: firstNameExist,
    size: 24,
    value: firstNameInput,
    change: (e) => setFirstNameExist(e),
    onInput: (e) => setFirstNameInput(e.target.value),
  }, {
    name: 'Last Name',
    placeholder: lastNameExist,
    size: 24,
    value: lastNameInput,
    change: (e) => setLastNameExist(e),
    onInput: (e) => setLastNameInput(e.target.value),
  }, {
    name: 'E-mail',
    placeholder: emailExist,
    size: 24,
    value: emailInput,
    change: (e) => setEmailExist(e),
    onInput: (e) => setEmailInput(e.target.value),
  }, {
    name: 'Subject',
    placeholder: subjectExist,
    size: 24,
    value: (currentPage === 'Donate') ? 'Donation' : subjectInput,
    change: (e) => setSubjectExist(e),
    onInput: (e) => setSubjectInput(e.target.value),
  }, {
    name: 'Message',
    placeholder: messageExist,
    size: 24,
    value: (currentPage === 'Donate') ? 
    `Hello my name is ${firstNameInput} ${lastNameInput} and I want to donate ${donateInput}` 
    : messageInput,
    change: (e) => setMessageExist(e),
    onInput: (e) => setMessageInput(e.target.value),
  }];
  
  let firstNameInputField = <Input placeholder={contactInputs[0].placeholder} size={contactInputs[0].size} value={contactInputs[0].value} onInput={contactInputs[0].onInput} className="contactInput"/>
  let lastNameInputField = <Input placeholder={contactInputs[1].placeholder} size={contactInputs[1].size} value={contactInputs[1].value} onInput={contactInputs[1].onInput} className="contactInput" />;
  let emailInputField = <Input placeholder={contactInputs[2].placeholder} size={contactInputs[2].size} value={contactInputs[2].value} onInput={contactInputs[2].onInput} className="contactInput"/>;
  let subjectInputField = <Input placeholder={contactInputs[3].placeholder} size={contactInputs[3].size} value={contactInputs[3].value} onInput={contactInputs[3].onInput} className="contactInput"/>;
  let messageInputField = <Input placeholder={contactInputs[4].placeholder} size={contactInputs[4].size} value={contactInputs[4].value} onInput={contactInputs[4].onInput} className="contactMessageInput"/>;


  let filteredValue = contactInputs.filter(input => (input.value));
  
  if (filteredValue.length === contactInputs.length) {
    empty = false;
  }


  let content = 
  <div className="contacform"><p>First Name:</p>
    {firstNameInputField}
    <p>Last Name:</p>
    {lastNameInputField}
    <p>E-mail:</p>
    {emailInputField}
    <p>Subject:</p>
    {subjectInputField}
    <p>Message:</p>
    {messageInputField}
    <br></br>
    <br></br>
    <Button className="submit_buttons" text='Submit' handleClick={submitKey}/></div>;

  if (currentPage === 'Donate'){
    donatePage(contactInputs, donateExist, donateInput, setDonateExist, setDonateInput);

    let donateInputField = <Input placeholder={contactInputs[5].placeholder} size={contactInputs[5].size} value={contactInputs[5].value} onInput={contactInputs[5].onInput} className="contactInput"/>;
    
    content = 
    <div className="contacform">

    <div className="input_segments">
    <p className="input">First Name:</p>
    {firstNameInputField}
    </div>

    <div className="input_segments">
    <p className="input">Last Name:</p>
    {lastNameInputField}
    </div>
    
    <div className="input_segments">
    <p className="input">E-mail:</p>
    {emailInputField}
    </div>

    <div className="input_segments">
    <p className="input">Donate:</p>
    {donateInputField}
    </div>
    
    <div className="input_segments">
    <p className="input">Subject:</p>
    {subjectInputField}
    </div>
    
    <div className="input_segments">
    <p className="input">Message:</p>
    {messageInputField}
    </div>
    <br></br>
    <Button className="submit_buttons" text='Submit' handleClick={submitKey}/></div>;
  }



  function submitKey() {

    
    
    for (let i = 0; i < contactInputs.length; i++){

      let legitEmail = contactInputs[2].value;
      
      
      if (contactInputs[i].value === '') {
        Object.values(contactInputs[i])[4](`Please fill ${contactInputs[i].name} section`);
      }
      
      if (
        legitEmail !== '' && ( 
        legitEmail.includes('@') === false ||
        legitEmail.indexOf('@') < 4 ||
        legitEmail.includes('.') === false ||
        legitEmail.indexOf('.') !== contactInputs[2].value.length - 4 ||
        legitEmail.match(/[A-Z]/) !== null)
        ){
        setEmailInput('');
        Object.values(contactInputs[2])[4](`Please give me a legit e-mail`)
      }
    }

    if (empty === false) {
      setSubmitPage(true);
      
      setTimeout(() => {
        setSubmitPage(false);
        setFirstNameInput('');
        setLastNameInput('');
        setEmailInput('');
        setSubjectInput('');
        setMessageInput('');
        setFirstNameExist(firstNameOriginal);
        setLastNameExist(lastNameOriginal);
        setEmailExist(emailOriginal);
        setSubjectExist(subjectOriginal);
        setMessageExist(messageOriginal);
      }, 10000);
    } 
  } 
  

  if (submitPage === true && currentPage === 'Contact') {
    contactForm(firstNameInput, lastNameInput, emailInput, subjectInput, messageInput);
    content = 
    <><div className="thank_you">
        <div id="contact_thanks">
        We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
      Have a great day!<br></br>
      ᓚᘏᗢ
      </div>
    </div>
    </>
  } else if (submitPage === true && currentPage === 'Donate') {
    content = 
    <><div className="thank_you">
      <div id="donate_thanks">
      Thank you for your donation!<br></br>
      Have a great day!<br></br>
      ᓚᘏᗢ
      </div>
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