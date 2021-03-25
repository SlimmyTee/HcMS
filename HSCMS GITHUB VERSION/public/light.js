
// confiquration
var firebaseConfig = {
  apiKey: "AIzaSyD1cMB6rPsd8460KhnueXtAhFt0PL5hAF8",
  authDomain: "hcms-87af6.firebaseapp.com",
  projectId: "hcms-87af6",
  storageBucket: "hcms-87af6.appspot.com",
  messagingSenderId: "217535495109",
  appId: "1:217535495109:web:6795df8f20f3cea7d329ac"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//   selection process 

    // UPLOAD PROCESS
    // document.getElementById('upload').onclick = function(){
    //     ImgName = document.getElementById('namebox').value;
       
    //     var uploadTask = firebase.storage().ref('Images/'+ ImgName+".png").put(files[0]);
    //     uploadTask.on('state_changed', function(snapshot){
    //     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     document.getElementById('UpProgress').innerHTML = 'upload'+progress+'%';
    //     },
    //     function(error){
    //         alert('error in saving the image');
    //     },  
    //     function(){
    //         uploadTask.snapshot.ref.getDownloadURL().then(function(url){
    //          ImgUrl = url;


    //             firebase.database().ref('Pictures/'+ImgName).set({
    //                 Name: ImgName,
    //                 Link: ImgUrl,
    //     }); 
    //     alert('image uploaded successfully');
    //         }  
    //         );

    //     });  
    //     }