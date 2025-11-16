const aboutStudents = [];
function creatTask() {
    const studentName = document.querySelector("#studentName");
    const studentAge = document.querySelector("#studentAge");
    const studentId = document.querySelector("#studentId");
    const aboutStudent = {
        name:"Name :" + studentName.value,
        age:"Age :" + studentAge.value,
        id:"Id :" + studentId.value
    }
    aboutStudents.push(aboutStudent);
    renderTasks(aboutStudents);
}
document.querySelector("#addTask").onclick = creatTask
const taskContainer = document.querySelector(".task-container");
console.log(taskContainer);

function renderTasks(aboutStudents) {
    taskContainer.innerHTML = ""
    for (let i = 0; i < aboutStudents.length; i++) {
        taskContainer.innerHTML += `


        <div class="task-container">
            <h1>${aboutStudents[i].name}</h1>
            <p class="age">${aboutStudents[i].age}</p>
            <p class="id">${aboutStudents[i].id}</p>
        </div>
        
        `
        console.log(aboutStudents[i])
    }


}