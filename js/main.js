function createBubble() {
    const bubble = document.createElement("div");
    const size = Math.random() * 4 + 10;
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random()*7}px`;
    bubble.style.bottom= "0px";
    bubble.style.animationDuration = `${10}s`;
    
    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

function createBubble2() {
    const bubble = document.createElement("div");
    const size = Math.random() * 4 + 10;
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.right = `${Math.random()*7}px`;
    bubble.style.bottom= "0px";
    bubble.style.animationDuration = `${10}s`;
    
    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

setInterval(createBubble, 1000);
setInterval(createBubble2, 1000);


