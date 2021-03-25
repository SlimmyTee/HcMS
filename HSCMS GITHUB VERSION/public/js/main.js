// Initialize Firebase (ADD YOUR OWN DATA)
// Reference messages collection
var messagesRef = firebase.database().ref('Ceapcom');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('namee');
  var soo = getInputVal('soo');
  var nationality = getInputVal('nationality');
  var company = getInputVal('company');
  var sex = getInputVal('sex');
  var age = getInputVal('age');
  var phone = getInputVal('phone');
  var pml = getInputVal('pml');
  var psl = getInputVal('psl');
  var medic = getSelection('medic');
  var nameOfDrug = getSelection('message1')
  var daily = getSelection('daily');
  var name1 = getSelection('message2')
  var smokeOption = getSelection('smokeOption');
  var name2 = getSelection('message3')
  var alcoholOption = getSelection('alcoholOption');
  var name3 = getSelection('message4')
  var sleepOption = getSelection('sleepOption');
  var name4 = getSelection('message5')
  // Save message
  saveMessage(name, soo, nationality, sex, age, phone, pml, psl, medic, nameOfDrug, daily, name1, smokeOption, name2, alcoholOption, name3, sleepOption, name4);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, soo, nationality, sex, age, phone, pml, psl, medic, nameOfDrug, daily, name1, smokeOption, name2, alcoholOption, name3, sleepOption, name4){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    state:soo,
    nationality:nationality,
    sex:sex,
    age:age,
    phone: phone,
    pml:pml,
    psl:psl,
    medic:medic,
    nameOfDrug:nameOfDrug,
    daily:daily,
    name1: name1,
    smokeOption : smokeOption,
    name2: name2,
    alcoholOption: alcoholOption,
    name3: name3,
    sleepOption: sleepOption,
    name4: name4
  });
}






