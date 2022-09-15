// Initialize Firebase
var config = {
  databaseURL: "https://hcms-86a06-default-rtdb.firebaseio.com/"
};

 //Initialize Firebase
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('Ceapcom');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  const name = getInputVal('namee');
  const soo = getInputVal('soo');
  const nationality = getInputVal('nationality');
  const sex = getInputVal('sex');
  const age = getInputVal('age');
  const phone = getInputVal('phone');
  const pml = getInputVal('pml');
  const psl = getInputVal('psl');
  const medic = getSelection('medic');
  const nameOfDrug = getSelection('message1')
  const daily = getSelection('daily');
  const name1 = getSelection('message2')
  const smokeOption = getSelection('smokeOption');
  const name2 = getSelection('message3')
  const alcoholOption = getSelection('alcoholOption');
  const name3 = getSelection('message4')
  const sleepOption = getSelection('sleepOption');
  const name4 = getSelection('message5')
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






