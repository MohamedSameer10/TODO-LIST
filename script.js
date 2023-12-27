let btn = document.querySelector("button")
let container = document.querySelector(".todo-container")
let input = document.getElementById("userinput")

function todo(){
    let input = document.getElementById("userinput").value
    if(input === ""){
        alert("You have to enter something")
    }
    else{
        let div = document.createElement("div")
        let spanele = document.createElement("span")
        let radio  = document.createElement("input")
        div = document.createElement("div")
        spanele = document.createElement("span")
        radio  = document.createElement("input")
        radio.setAttribute("type","checkbox") 
        let listvalue = document.createElement("label")
        listvalue.innerText = input

        spanele.innerHTML = `<button id="del" onclick = "dele(event)">X</button>`
        
        radio.setAttribute("id",input)  
        listvalue.setAttribute("for",input)
        container.appendChild(div)
        div.classList.add("ans")
        listvalue.classList.add("list")
        radio.classList.add("input")
        div.appendChild(radio)
        div.appendChild(listvalue)
        div.appendChild(spanele)
    }
}

btn.addEventListener("click",todo)

function dele(event){
    event.target.parentNode.parentNode.remove()
}

input.addEventListener("keyup",(event)=>{
    if(event.key=="Enter"){
        todo()
    }
})









