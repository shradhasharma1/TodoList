let input = document.querySelector(".add-item");
let addButton = document.querySelector(".add-Btn");
let listBucket = document.querySelector(".list-bucket");

//add  button disabled
console.log("shradha")
if(input){
input.addEventListener("keyup", () => {
        if(input.value.trim() !== ""){
            addButton.classList.add("active");
        }else{
            addButton.classList.remove("active");
        }
})
}

//add new item to list bucket 

addButton.addEventListener("click", () => {
    if(input.value.trim() !== ""){
        let newItem = document.createElement("div");
        newItem.classList.add("list-item");
        newItem.innerHTML = `
        <div class="list-item">
        <p class="each-item">
            <i class="fa-regular fa-circle-check fa-xl"></i>
            ${input.value}
        </p>
        <div class="item-btn">
            <!-- <i class="fa-sharp fa-regular fa-up"></i> -->
            <i class="fa-solid fa-arrow-up fa-xl"></i>
            <i class="fa-solid fa-xmark fa-xl"></i>
        </div>
     </div> 
     ` ;
     listBucket.appendChild(newItem);
     input.value = '';

    }else{
        alert('Please enter a Task');
    }
})

//delete element from list
listBucket.addEventListener("click" , (e) => {
        if(e.target.classList.contains('fa-xmark')){
            e.target.parentElement.parentElement.remove();
        }
})

//sort the element
listBucket.addEventListener("click",(e) => {
    if(e.target.classList.contains('fa-arrow-up')){
      
    }
})