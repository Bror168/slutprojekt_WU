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

function initDropdown({ toggleSelector, menuSelector, activeClassTargetSelector, dropdownActive}) {
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.querySelector(toggleSelector);
        const dropdownMenu = document.querySelector(menuSelector);
        const activeClassTarget = document.querySelector(activeClassTargetSelector);

        if (!toggleButton || !dropdownMenu || !activeClassTarget) return;

        toggleButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling to window
            dropdownMenu.classList.toggle('show');
            activeClassTarget.classList.toggle(dropdownActive);
        });

        window.addEventListener('click', (e) => {
            if (!e.target.closest(toggleSelector) && !e.target.closest(menuSelector)) {
                dropdownMenu.classList.remove('show');
                activeClassTarget.classList.remove(dropdownActive);
            }
        });
    });
}

setInterval(createBubble, 1000);
setInterval(createBubble2, 1000);



initDropdown({
    toggleSelector: ".dropdown-toggle", menuSelector: ".dropdown-menu", activeClassTargetSelector: "body", dropdownActive:"dropdown-active"
  });
  initDropdown({
    toggleSelector: ".dropdown-toggle2", menuSelector: ".dropdown-menu2", activeClassTargetSelector: "body",dropdownActive:"dropdown-active2"
});
initDropdown({
    toggleSelector: ".dropdown-toggle3", menuSelector: ".dropdown-menu3", activeClassTargetSelector: "body",dropdownActive:"dropdown-active3"
});

