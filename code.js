slider = document.getElementById('myRange');

function show(){
    document.getElementById('sliderValue').innerHTML = slider.value;
}


document.getElementById('myRange').addEventListener("input", () => {
    show();
});