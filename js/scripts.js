// multiple bg color btn.
const themes = [
    'bg-gray-100',
    'bg-gray-800',
    'bg-blue-500',
    'bg-[#0369A1]',
    'bg-purple-600',
    'bg-violet-500',
    'bg-red-600',
    'bg-amber-500',
    'bg-[#F4F7FF]'
];

let currentIndex = 0;
document.getElementById('theme-toggle').addEventListener('click', function(){
    const body = document.body;
    body.classList.remove(themes[currentIndex]);
    if(currentIndex < themes.length){
        currentIndex++;
    }
    else{
        currentIndex = 0;
    }
    body.classList.add(themes[currentIndex]);
});


// adding the day
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const today = new Date().getDay();
const currentDayName = weekDays[today];
document.getElementById('current-day').innerText = currentDayName;

// adding date to the table head
const todayDate = new Date();
const date = todayDate.toLocaleDateString();
document.getElementById("table-h-date").innerText = date;


//  adding the discover today page
document.getElementById('discover-page').addEventListener('click', function(){
window.location.href = "../discover-today.html"
})


