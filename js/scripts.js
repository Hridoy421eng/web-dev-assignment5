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




// adding date to the table head
const today = new Date();
const date = today.toLocaleDateString();
document.getElementById("table-h-date").innerText = date;
