categories =document.querySelector(".category ul");
tasks = document.querySelector(".task-list ul");
document.addEventListener("DOMContentLoaded",() => {
    let taskUL =document.querySelector(".task-list ul");
    fetch("task.json")
    .then(response => response.json ())
    .then(tasks => {
    tasks.forEach(task => {
        let LI = document.createElement('LI');
        LI.innerHTML =generateTaksLi(task)
        taskUL.appendChild(LI)


    });

});
});






function generateTaksLi(task){
    let li =`
    <div class="task">
        <input type="checkbox"  name="${task.name}"/>
        <label>${task.name}</label>
    
        <div class="desc">
          <span>${task.categories}</span>
          <span>${task.create_at}</span>
        </div>
    </div>
`;
return li;

}
document.addEventListener("DOMContentLoaded",() => {
    let taskLU =document.querySelector(".category ul");
    fetch("navleftTask.json")
    .then(response => response.json ())
    .then(taskss => {
    taskss.forEach(navleftTask => {
        let IL = document.createElement('IL');
        IL.innerHTML =generateTaksIL(navleftTask)
        taskLU.appendChild(IL)


    });

})
});






function generateTaksIL(navleftTask){
    let a =`<li onclick="Fillter_task('${navleftTask.Taskname}')">

    <div class="main-cat">
    <span class="material-symbols-outlined">
    ${navleftTask.logo}
    </span>
        <span>${navleftTask.Taskname}</span>
    </div>

    <div class="badgth">${navleftTask.bedght}</div>
  </li>
`;
return a;

}






// // search

let searchDom = document.querySelector(".nav-left .search input[type='text']");
searchDom.addEventListener("keyup", function(e){
    searchText = e.target.value;
    tasks.innerHTML = "";
    fetch("task.json")
        .then((response) => { 
            return response.json();
        })
        .then((data) => {
            data.forEach((task) => {
                LI = document.createElement("LI");
                if(task["name"].includes(searchText)) {
                    LI.innerHTML = generateTaksLi(task);
                    tasks.appendChild(LI);

                }
           });
        });

 });



 //add new task
 let btnaddNewTask = document.querySelector(".add-new-task");
    // console.log(btnaddNewTask );
btnaddNewTask.addEventListener("click",function (e){
    btnaddNewTask.innerHTML= "";
    let inputtaskname = document.createElement("input");
    let inputcheckname=document.createElement("input");
    
    inputcheckname.setAttribute("type","Checkbox");
    inputtaskname.setAttribute("type","text");
    inputtaskname.setAttribute("placeholder","Enter New Task....");
    // let ddp= document.getElementById('taskcat').value 
    // fetch('task.json')
    // .then((response)=> response.json())
    // .then(json => {
    //     json.forEach(task => { 
    //         if (Number(task.sta)==ddp {
    //             btnaddNewTask.setAttribute
    //         }

    //     })
    // })
    btnaddNewTask.appendChild(inputcheckname);
    btnaddNewTask.appendChild(inputtaskname);


    inputtaskname.focus();
    inputtaskname.addEventListener("keyup", function(e){
        if(e.key == "Enter" ){
            const cuDtae= "dd-mmm-yyy"
            // let cat=`z`
            //  let cate=`${task.categories}`
            let new_task_name=e.target.value;
            let task = {
                name : new_task_name,
                categories: "N/A",
                // categories:`${task.categories}`,
                create_at : cuDtae,
                
            };
            let LI = document.createElement("LI");
            LI.innerHTML = generateTaksLi(task);
            tasks.appendChild(LI);

            inputtaskname.value ="";
        }
        

    });
});
///add dropdown option for select when add new task
// fetch('navleftTask.json') 
//     .then((response) => response.json())
//     .then(json =>{
//         json.forEach(task => {
//             let get = document.createElement('option');
//             get.setAttribute("value",`${task.sta}`);
//             // get.innerHTML +=`${task.categories}`
//             document.getElementById('taskcat').appendChild(get);
//         } ) ;
//     });

// Filtertask
function Fillter_task (name){ 
    tasks.innerHTML = "";
    fetch("./task.json")
    .then((response) => { 
        return response.json();
    })
    .then((data) => {
        data.forEach((task) => {
            if(name == "All Task"){
                LI = document.createElement("LI");
                LI.innerHTML = generateTaksLi(task);
                tasks.appendChild(LI);
            }
            if(task.categories == name){
                LI = document.createElement("LI");
                LI.innerHTML = generateTaksLi(task);
                tasks.appendChild(LI);

            }
            
  
            
       });
    });

}


// add new category
let btnAddNewcategory=document.querySelector(".Add");

btnAddNewcategory.addEventListener("click", function (e) {
    let NewcategoryLI = document.createElement("LI");
    NewcategoryLI.innerHTML = `<li onclick= "Filter_task=('')">

    <div class="main-cat">
    <span class="material-symbols-outlined">
     home
    </span>
        <input type="text">
    </div>
   

  </li>`;
  categories.appendChild (NewcategoryLI);
  NewcategoryInput = NewcategoryLI.querySelector("input");
  NewcategoryInput.setAttribute("Value","");
NewcategoryInput.focus();

   
   
});



