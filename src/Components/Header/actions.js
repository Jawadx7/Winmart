const menuBtn = document.querySelector('.menuBtn')
const closeBtn = document.querySelector('.closeBtn')
const nav = document.querySelector('.nav')

export function showNav(){
    menuBtn.addEventListener("click", ()=>{
        nav.style.right = 0
    })
    // nav.classList.add('active')
    // console.log(menuBtn)
}

export function closeNav(){
    closeBtn.addEventListener("click", ()=>{
        nav.style.right = "-100%"
    })
    // nav.classList.remove('active')
    // console.log(closeBtn)
}