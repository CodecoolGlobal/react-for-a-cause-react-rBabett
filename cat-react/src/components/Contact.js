import Button from "./Button";
import Input from "./Input";
import { useState } from 'react';

const Contact = (props) => {

  let currentPage = Object.values(props)[0];

  /* let currentPage = Object.values(props.actvivePage).join(''); */

  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [subjectInput, setSubjectInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [donateInput, setDonateInput] = useState('$');
  
  const [firstNameExist, setFirstNameExist] = useState('Hannibal');
  const [lastNameExist, setLastNameExist] = useState('Lecter');
  const [emailExist, setEmailExist] = useState('hannibal.lecter@freshmeat.com');
  const [subjectExist, setSubjectExist] = useState('Job inquiry');
  const [messageExist, setMessageExist] = useState('I have a question: Do you have any cute animals?');
  const [phoneExist, setPhoneExist] = useState('06123456789');
  const [donateExist, setDonateExist] = useState('$');
  
  const [submitPage, setSubmitPage] = useState(false);
  
  let empty = true;
  let typeMiss = true;

  let contentContain = [];

  const contactInputs = [{
    name: 'First Name',
    placeholder: firstNameExist,
    size: 24,
    value: firstNameInput,
    type: 'text',
    change: (e) => setFirstNameExist(e),
    onInput: (e) => setFirstNameInput(e.target.value),
  }, {
    name: 'Last Name',
    placeholder: lastNameExist,
    size: 24,
    value: lastNameInput,
    type: 'text',
    change: (e) => setLastNameExist(e),
    onInput: (e) => setLastNameInput(e.target.value),
  }, {
    name: 'E-mail',
    placeholder: emailExist,
    size: 24,
    value: emailInput,
    type: 'email',
    change: (e) => setEmailExist(e),
    onInput: (e) => setEmailInput(e.target.value),
  }, {
    name: 'Subject',
    placeholder: subjectExist,
    size: 24,
    type: 'text',
    value: (currentPage === 'Donate') ? 'Donation' : subjectInput,
    change: (e) => setSubjectExist(e),
    onInput: (e) => setSubjectInput(e.target.value),
  }, {
    name: 'Message',
    placeholder: messageExist,
    size: 24,
    type: 'text',
    value: (currentPage === 'Donate') ? 
    `Hello my name is ${firstNameInput} ${lastNameInput} and I want to donate ${donateInput}` 
    : messageInput,
    change: (e) => setMessageExist(e),
    onInput: (e) => setMessageInput(e.target.value),
  }];
  
  if (currentPage === 'Donate'){
    
    let money = {
      name: 'Donate',
      placeholder: donateExist,
      size: 24,
      value: donateInput,
      type: 'text',
      change: (e) => setDonateExist(e),
      onInput: (e) => setDonateInput(e.target.value),
    };

    let phone = {
      name: 'Phone',
      placeholder: phoneExist,
      size: 24,
      value: phoneInput,
      type: 'tel',
      change: (e) => setPhoneExist(e),
      onInput: (e) => setPhoneInput(e.target.value),
  }

    let messageIndex = contactInputs.findIndex(messageIndex => messageIndex.name === 'Message');
    let emailIndex = contactInputs.findIndex(emailIndex => emailIndex.name === 'E-mail');

    contactInputs.splice(messageIndex, 1, money);
    contactInputs.splice(emailIndex + 1, 0, phone)

  } 

  let inputFields = contactInputs.map((input) => (
    <Input 
      name={input.name}
      placeholder={input.placeholder}
      size={input.size} 
      value={input.value}
      onInput={input.onInput}
      type={input.type}
      className="contactInput"
      />
      ));

  for (let i = 0; i < inputFields.length; i++) {

    let fieldInclude = inputFields[i].props.name;

    contentContain.push(
      <div className="input_segments">
        <p className="input">{fieldInclude}:</p>
        {inputFields[i]}
        </div>)
  }

  let filteredValue = contactInputs.filter(input => (input.value));
  
  if (filteredValue.length === contactInputs.length) {
    empty = false;
  }

  let content = 
    <div className="contacform">
      {contentContain}
      <br></br>
      <Button className="submit_buttons" text='Submit' handleClick={submitKey}/></div>;

  function submitKey() {

    for (let i = 0; i < contactInputs.length; i++){

      if (contactInputs[i].value === '') {
        Object.values(contactInputs[i])[4](`Please fill ${contactInputs[i].name} section`);
      }else {
        typeMiss = false;
      }
    }

    if (empty === false && typeMiss === false) {
      setSubmitPage(true);
      
      setTimeout(() => {
        props.switchPage()
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