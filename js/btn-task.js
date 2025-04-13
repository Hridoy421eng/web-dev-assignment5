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

        if(this.disabled = true){
            
            const container = document.getElementById('parent-div');
            const card = this.closest('.card-body');
            const cardHeading = card.querySelector('.card-head').innerText;
            const p = document.createElement("p");
            const currentTime = new Date().toLocaleTimeString();
            
            p.innerText = `
            You have completed the task ${cardHeading} at ${currentTime} 
            `
            p.classList.add('mx-5', 'my-5', 'bg-[#F4F7FF]', 'rounded-xl', 'p-5');
            container.appendChild(p);
        }
        document.getElementById('clear-history-btn').addEventListener('click', function(){
            const container = document.getElementById('parent-div');
            container.innerHTML = "";
        })
       

        if(convertedTaskAssigned === 0){
            alert('congrats!!! You have completed all the current task');
        }
    })
    
    
    
}