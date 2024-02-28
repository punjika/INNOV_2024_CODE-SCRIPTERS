document.querySelector('.close').style.display = 'none';
document.querySelector('.icons').addEventListener("click",()=>{
    document.querySelector('.navbar').classList.toggle('navbarGo');
  if(document.querySelector('.navbar').classList.contains('navbarGo'))
  {
    document.querySelector('.close').style.display = 'none'
    document.querySelector('.ham').style.display = 'inline'
  }
  else{
      document.querySelector('.ham').style.display = 'none'
      setTimeout(() => {
        document.querySelector('.close').style.display = 'inline'
     
      }, 500);
      
  }
  
})

document.getElementById('ham').addEventListener("click",()=>{
  const targetElement = document.querySelector('.dimmed');
  targetElement.style.opacity = "0.5";
}
)
document.querySelector('.close').addEventListener("click", () => {
  const targetElement = document.querySelector('.dimmed');
  targetElement.style.opacity = "1";
});




// function openLogin() {
//     var modal = document.querySelector(".modal");
//     if (modal) {
//         modal.style.display = "block";
//     }
// }

// function closeModalLogin() {
//     var modal = document.querySelector(".modal");
//     if (modal) {
//         modal.style.display = "none";
//     }
// }

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Here you can add your login validation logic
    console.log("Username: " + username + ", Password: " + password);
});



  