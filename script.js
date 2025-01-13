// function toggleMenu(){
//     const menu =document.querySelector('.menu-links')
//     const icon =document.querySelector('.hamburger-icon')
//     menu.classList.toggle('open')
//     icon.classList.toggle('open')
// }




const githubBtn=document.querySelector('.github-btn')
const textMsg=document.querySelector('.text-msg')
 

githubBtn.addEventListener('click',()=>{
 

    setTimeout(()=>{
       githubMsg(textMsg) 
    }
      
   , 1000);
      
})



function githubMsg(element){
    element.innerHTML="*Project under construction..."  
    element.style.color="Red"
    element.style.fontSize="10px"
    element.style.visibility="visible"


    setTimeout(() => {
        textMsg.innerHTML = ""
    },1000 );
}
const demoBtn=document.querySelector('.demo-btn')
demoBtn.addEventListener('click',()=>{
    alert("Live will be available soon...")
 })


 const submitBtns=document.querySelectorAll('.submit-btn ')
 
 submitBtns.forEach((submitBtn)=>{
    submitBtn.addEventListener('click',()=>{
        alert("Your info have been submitted.")
     })
 })
 const cvBtn=document.querySelector('.btn-color-1')
 const aTag=document.querySelectorAll('a')
 const buttons=document.querySelectorAll('button')
  
const logo=document.querySelector('.logo')
 
 const  changeBgModeDark=function (){

    document.body.style.backgroundColor="#212121"
    document.body.style.color="white"
     aTag.forEach((a)=>{
        a.style.color="white"
     })

     buttons.forEach((btn)=>{
        btn.style.color="white"
     })
     
      bgModeLight.style.display="block"
      bgModeDark.style.display="none"
      document.body.style.transition = "background-color 0.5s ease-in-out, color 0.6s ease-in-out";
      

 }


 const bgModeDark=document.querySelector('.bg-mode-dark')
bgModeDark.addEventListener('click',()=>{
    changeBgModeDark()
 })


 const bgModeLight=document.querySelector('.bg-mode-light')
 bgModeLight.addEventListener('click',()=>{
    changeBgModeLight()
 })


 function  changeBgModeLight(){
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
     aTag.forEach((a)=>{
        a.style.color="black"
     })

     buttons.forEach((btn)=>{
        btn.style.color="black"
     })
      cvBtn.style.color="white"
      bgModeLight.style.display="none"
      bgModeDark.style.display="block"
      document.body.style.transition = "background-color 0.5s ease-in-out, color 0.6s ease-in-out";
      
 }






