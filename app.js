document.addEventListener('scroll', function(){
    const scrollPosition = window.scrollY;
    const nameSpan = document.getElementById('name');
    const descSpan = document.getElementById('desc');

    nameSpan.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    descSpan.style.transform = `translateY(${scrollPosition * 0.4}px)`;
});

let innerCursor = document.querySelector(".inner_cursor");
let outerCursor = document.querySelector(".outer_cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
let buttons = Array.from(document.querySelectorAll("button"));

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        innerCursor.classList.add("grow");
    });
    link.addEventListener('mouseleave', () => {
        innerCursor.classList.remove("grow");
    });
});
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        innerCursor.classList.add("grow");
    });
    button.addEventListener('mouseleave', () => {
        innerCursor.classList.remove("grow");
    });
});

document.getElementById("toggleTheme").addEventListener("click", function(){
    const body = document.body;
    const toggleButton = document.getElementById("toggleTheme");
    
    body.classList.toggle("lightMode");

    if (body.classList.contains("lightMode")) {
        toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        toggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

    const scrollbarStyles = document.createElement('style');
    scrollbarStyles.id = 'scrollbar-styles';
    if (body.classList.contains('lightMode')) {
        scrollbarStyles.innerHTML = `
            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                background-color: #F7F3F5;
                box-shadow: inset 0 0 10px #0B0D0C20;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #0B0D0C;
                transition: 0.3s;
            }
            ::-webkit-scrollbar-thumb:hover {
                background-color: #9DFF00;
            }
        `;
    } else {
        scrollbarStyles.innerHTML = `
            ::-webkit-scrollbar {
                width: 10px;
            }
            ::-webkit-scrollbar-track {
                background-color: #0B0D0C;
                box-shadow: inset 0 0 10px #F7F3F520;
            }
            ::-webkit-scrollbar-thumb {
                background-color: #F7F3F5;
                transition: 0.3s;
            }
            ::-webkit-scrollbar-thumb:hover {
                background-color: #9DFF00;
            }
        `;
    }

    document.head.appendChild(scrollbarStyles);

    if (body.classList.contains("lightMode")) {
        body.style.backgroundImage = `repeating-linear-gradient(
            to right,
          #0B0D0C20 0px,
          #0B0D0C20 1px,
            transparent 1px,
            transparent 160px
        )`;
    }
    else{
        body.style.backgroundImage = `repeating-linear-gradient(
            to right,
          #F7F3F520 0px,
          #F7F3F520 1px,
            transparent 1px,
            transparent 160px
        )`;
    }

    if (body.classList.contains("")) {
        body.style.backgroundImage = `repeating-linear-gradient(
            to right,
          #F7F3F520 0px,
          #F7F3F520 1px,
            transparent 1px,
            transparent 160px
        )`;
    }
    else{
        body.style.backgroundImage = `repeating-linear-gradient(
            to right,
          #0B0D0C20 0px,
          #0B0D0C20 1px,
            transparent 1px,
            transparent 160px
        )`;
    }
});
