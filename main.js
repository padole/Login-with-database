const home_page = document.querySelector('.home_page');

home_page.onclick = ()=>{
    home_page.classList.add('home_page'); //show info box
}


// const firebaseConfig = {
//     apiKey: "AIzaSyCDrOM7pVf3au7JqFIS6NbU7h_jj_rSTjM",
//     authDomain: "login-with-firebase-data-6d54a.firebaseapp.com",
//     projectId: "login-with-firebase-data-6d54a",
//     storageBucket: "login-with-firebase-data-6d54a.appspot.com",
//     messagingSenderId: "445213611559",
//     appId: "1:445213611559:web:6866cb6541db39a5aea002"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const database = getDatabase(app);
//   const auth = getAuth();

// sighUp.addEventListener('click',(e) => {

//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//   var username = document.getElementById('username').value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//      // Signed in 
//       const user = userCredential.user;

//       // set(ref(database, 'users/' + user.uid),{
//       //     username: username,
//       //     email: email
//       // })

//       alert('user created!');
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       alert(errorMessage);
//     // ..
//     });

// });