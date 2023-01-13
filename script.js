const icon     = document.querySelectorAll(".questionIcon")
const toolTip  = document.querySelectorAll(".toolTip") 
const button1  = document.querySelector(".button1") 
const button2  = document.querySelector(".button2") 

const platform = document.querySelector(".platformPlan")
const firewall = document.querySelector(".firewallPlan")


button1.style = `
background: black; 
color: white;
`
button2.style = `
background: white; 
color: black
`
platform.style = `
opacity: 1;
`
firewall.style = `
opacity: 0; 
`

button1.addEventListener("click", () => {
    button1.style = `
        background: black; 
        color: white;
    `
    button2.style = `
        background: white; 
        color: black
    `
    platform.style = `
        opacity: 1;
    `
    firewall.style = `
        opacity: 0; 
    `
})

button2.addEventListener("click", () => {
    button2.style = `
        background: black; 
        color: white;
    `
    button1.style = `
        background: white; 
        color: black
    `
    platform.style = `
        opacity: 0;
    `
    firewall.style = `
        opacity: 1; 
    `
})

for(let i = 0; i < icon.length; i++){
    icon[i].addEventListener("mouseover", () => { toolTip[i].style = `opacity: 1` })
    icon[i].addEventListener("mouseout",  () => { toolTip[i].style = `opacity: 0` })
}