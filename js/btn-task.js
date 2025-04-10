const taskAssigned = document.getElementById('task-assigned').innerText;
let convertedTaskAssigned = parseInt(taskAssigned);
const navTask = document.getElementById('nav-task').innerText;
let convertedNavTask = parseInt(navTask);

let buttons = document.getElementsByClassName('btn-class');

for (let i = 0; i <buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        alert('Board updated Successfully');
        convertedTaskAssigned -= 1;
        convertedNavTask += 1;
        document.getElementById('task-assigned').innerText = convertedTaskAssigned;
        document.getElementById('nav-task').innerText = convertedNavTask;
        this.disabled = true; 

        


        if(convertedTaskAssigned === 0){
            alert('congrats!!! You have completed all the current task');
        }
    })
    
    
    
}