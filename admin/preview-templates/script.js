document.addEventListener('DOMContentLoaded', () => {

    var modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    
    function toggleModal() {
        modal.classList.toggle("show-modal");
    }
    
    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
    window.addEventListener("click", windowOnClick);
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    
    
    
});