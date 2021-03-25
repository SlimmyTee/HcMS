 // Variables
 var ImageName, ImgUrl;
 var files = [];
 var reader;

 // Configuration
 var firebaseConfig = {
    apiKey: "AIzaSyC003a4RDfl_eSBfkEGuZ6Xg4Wr0xQyDJw",
    authDomain: "practicalwork-bc2b2.firebaseapp.com",
    databaseURL: "https://practicalwork-bc2b2-default-rtdb.firebaseio.com",
    projectId: "practicalwork-bc2b2",
    storageBucket: "practicalwork-bc2b2.appspot.com",
    messagingSenderId: "933839384927",
    appId: "1:933839384927:web:c380e4363debfe6e6f86ea",
    measurementId: "G-3NN5GWF6R7"
  };

  //Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 //Selection Process
 function selectImage(e) {

     var input = document.createElement('input');
     input.type= 'file';

     input.onchange = e => {
         files = e.target.files;
         reader = new FileReader();
         reader.onload = function() {
             document.getElementById("myimg").src = reader.result;  
         }
         reader.readAsDataURL(files[0]);
     }
     input.click();
 }

         //Upload Process

         // uploading Picture to Firebase Storage
     function uploadImage() {
         ImgName = document.getElementById('namebox').value;
         var uploadTask = firebase.storage().ref('HOD/'+ImgName).put(files[0]); 
         
         uploadTask.on('state_changed', function(snapshot){
             var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             document.getElementById('UpProgress').innerHTML = 'Upload'+progress+'%'; 
         },

     // error handling
         function(error) {
             alert('error in saving the image');
         },
 
     // submitting the image link to the database

         function(){
             uploadTask.snapshot.ref.getDownloadURL().then(function(url){
                 ImgUrl = url;


                 firebase.database().ref('HOD/'+ImgName).set({
                     Name: ImgName,
                     Link: ImgUrl
                 });
             alert('image added successfully');    
             location.reload();
             }
         );
     });
 } 

 // Retrieval Process
 document.getElementById('retrieve').onclick = function() {
     ImgName = document.getElementById('namebox').value;
     firebase.database().ref('HOD/' +ImgName).on('value', function(snapshot){
         document.getElementById('myimg').src = snapshot.val().Link; 
     });
 }