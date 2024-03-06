const outgoing = document.querySelector('.outgoing');
const receiving = document.querySelector('.receiving');
var fromElement = document.getElementById("from");
var toElement = document.getElementById("to");
var to2Element = document.getElementById("address");
var from2Element = document.getElementById("from2");



function spintoBack(){
    receiving.style.animation = 'spintoBack 1s ease-in-out forwards';
}

function spintoFront(){
    receiving.style.animation = 'spintoFront 1s ease-in-out forwards';
}

function toggleDivs() {
    if (outgoing.style.visibility === 'hidden') {
      receiving.style.visibility = 'visible';
      receiving.style.animation = 'fadeIn 1s ease-in-out';
    } else {
        outgoing.style.animation = 'fadeOut 1s ease-in-out';
        setTimeout(function() {
            outgoing.style.visibility = 'hidden';
        }, 980);
    }
  }

fromElement.addEventListener("input", function() {
    toElement.innerHTML = "To. " + fromElement.value;
});

to2Element.addEventListener("input", function() {
    from2Element.innerHTML = to2Element.value;
});

//랜덤 색 지정

const predefinedColors = ['#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * predefinedColors.length);
    return predefinedColors[randomIndex];
  }

function applyRandomColors(inputText) {
    const outputDiv = document.getElementById('sitename');
    outputDiv.innerHTML = '';

    for (let i = 0; i < inputText.length; i++) {
        const span = document.createElement('span');
        span.textContent = inputText[i];
        span.classList.add('random-color');
        span.style.color = getRandomColor();
        outputDiv.appendChild(span);
      }
    }

//캔버스
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('jsCanvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    function startDrawing(e) {
        isDrawing = true;
        draw(e);
    }

    function draw(e) {
        if (!isDrawing) return;

        context.lineWidth = 5;
        context.lineCap = 'round';
        context.strokeStyle = '#000';

        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function stopDrawing() {
        isDrawing = false;
        context.beginPath();  // 새로운 선을 시작하기 위해 path 초기화
    }
});


  