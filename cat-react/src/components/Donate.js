
function donatePage(contactInputs, donateExist, donateInput, setDonateExist, setDonateInput) {

  let money = {
    name: 'Donate',
    placeholder: donateExist,
    size: 24,
    value: donateInput,
    change: (e) => setDonateExist(e),
    onInput: (e) => setDonateInput(e.target.value),
  }

  return contactInputs.push(money);
}

export default donatePage