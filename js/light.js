
// confiquration
var firebaseConfig = {
  apiKey: "AIzaSyBeBO_cp1OgwQkppA2ZhzeBmK28B_C-dFw",
  authDomain: "hcms-86a06.firebaseapp.com",
  databaseURL: "https://hcms-86a06-default-rtdb.firebaseio.com",
  projectId: "hcms-86a06",
  storageBucket: "hcms-86a06.appspot.com",
  messagingSenderId: "1086929543598",
  appId: "1:1086929543598:web:5dc094783d5b61a3f8e83f"
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