// close form when submiting
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    //back end 
    $('#exampleModal').modal('hide');
    this.reset();
});

//close navigation
const closeBtn = document.getElementById(".sidebar-inner .close-nav-btn");
const mainContainer = document.getElementById(".main-container");
closeBtn.addEventListener('click', function(){
   mainContainer.classList.add("close-custom")
})
console.log(closeBtn);
console.log(mainContainer);
