function initDropdown({ toggleSelector, menuSelector, activeClassTargetSelector, dropdownActive}) {
    document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.querySelector(toggleSelector);
        const dropdownMenu = document.querySelector(menuSelector);
        const activeClassTarget = document.querySelector(activeClassTargetSelector);

        if (!toggleButton || !dropdownMenu || !activeClassTarget) return;

        toggleButton.addEventListener('click', (e) => {
            e.stopPropagation();
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

initDropdown({
    toggleSelector: ".dropdown-toggle", menuSelector: ".dropdown-menu", activeClassTargetSelector: "body", dropdownActive:"dropdown-active"
  });
  initDropdown({
    toggleSelector: ".dropdown-toggle2", menuSelector: ".dropdown-menu2", activeClassTargetSelector: "body",dropdownActive:"dropdown-active2"
});
initDropdown({
    toggleSelector: ".dropdown-toggle3", menuSelector: ".dropdown-menu3", activeClassTargetSelector: "body",dropdownActive:"dropdown-active3"
});
