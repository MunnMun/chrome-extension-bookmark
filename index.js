let myLeads= []

let inputEl = document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const leadsFromLocalStorage= JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener('dblclick',()=>{
    localStorage.clear()
    myLeads=[]
    renderLeads()
})

inputBtn.addEventListener('click',()=>{
    myLeads.push(inputEl.value)
    inputEl.value=""
    window.alert("your link has been added.Kindly open the extension again")
    (localStorage.setItem("myLeads",JSON.stringify(myLeads)))

    renderLeads()
    console.log(localStorage.getItem("myLeads"))
}) 
 
function renderLeads(){

    let listItems = ""
    for(let i=0; i<myLeads.length; i++){
        listItems+=`<li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}</a>
        </li>`
    }
    
    ulEl.innerHTML= listItems
}
