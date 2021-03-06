// mobile nav menu
const hamburger =document.querySelector('.ham-icon')
const closeIcon = document.querySelector('.close-icon')
const link = document.querySelector('.links')

// hamburger icon 
hamburger.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{   
        link.classList.add('showMenu')    
        closeIcon.style.display='block'
        hamburger.style.display='none'
    }  
})

//close icon
closeIcon.addEventListener('click',()=>{
    if(link.classList.contains('showMenu')){
        link.classList.remove('showMenu')
        closeIcon.style.display='none'
        hamburger.style.display='block'
    }else{
            link.classList.add('showMenu')
            closeIcon.style.display='block'
            hamburger.style.display='none'
    } 
})

//progress bar
const progress = document.querySelector('.progress-done')

setTimeout(()=>{
    progress.style.width=progress.getAttribute('data-done') + '%'
    progress.style.opacity=1
}, 500)



// back this project btn
const leftBtn = document.querySelector('.btn-left')
const modalWrap= document.querySelector('.modal-wrapper')
modalClose = document.querySelector('.close-modal')

leftBtn.addEventListener('click',()=>{
    if(modalWrap.style.display=='none'){
        modalWrap.style.display='flex'
    }else{
        modalWrap.style.display='none'
    }
})
modalClose.addEventListener('click',()=>{
    if(modalWrap.style.display=='flex'){
        modalWrap.style.display='none'
    }
})

const bottomBtns = document.querySelector('.bottom-btn')
const modal= document.querySelector('.modal-wrapper')
modalX = document.querySelector('.close-modal')

bottomBtns.addEventListener('click',()=>{
    if(modal.style.display=='none'){
        modal.style.display='flex'
    }else{
        modal.style.display='none'
    }
})
modalX.addEventListener('click',()=>{
    if(modal.style.display=='flex'){
        modal.style.display='none'
    }
})

//success modal
const successBtn = document.querySelector('.second-btn')
const modalColumn = document.querySelector('.modal-wrapper')
const successWrap = document.querySelector('.thanks-wrapper')


successBtn.addEventListener('click',()=>{
    
        modalColumn.style.display='none'
        successWrap.style.display='flex'
    
})

//success button
const thanksBtn=document.querySelector('.thanks-btn')
const successWrapper=document.querySelector('.thanks-wrapper')

thanksBtn.addEventListener('click',()=>{
    successWrap.style.display='none';
})


//radio button
const inputs = document.querySelectorAll("input[type=radio]");
const modalCards = document.querySelectorAll(".pledge-item");
for(let i=0;i<inputs.length;i++){
    let pledgeLower = modalCards[i].querySelector(".pledge-lower"); 
    document.addEventListener("change",function(e){
        if(inputs[i].checked){
            modalCards[i].style.borderColor = "hsl(176, 50%, 47%)";
            if(inputs[i].checked){
                pledgeLower.style.display = "flex";
            }else{
                modalCards[i].style.borderColor = "#eee";
            }
            
        }
        else{
            inputs[i].checked=false
            modalCards[i].style.borderColor=''
            pledgeLower.style.display='none' 
        }
        })
    }