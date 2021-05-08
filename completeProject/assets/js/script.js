/* Grabs toggle-button class for hamburger menu */ 
const toggleButton = document.getElementsByClassName('toggle-button')[0]

/* Grabs navigation links. Returns array index of 0 b/c only one navigation-links on page */ 
const navigationLinks = document.getElementsByClassName('navigation-links')[0]

/* Added event listener so when user clicks the 'toggle-button' aka hamburger menu, it runs the following function: */
toggleButton.addEventListener('click', () => {
    /* Toggles between hide() and show() for the selected hamburger menu */
    navigationLinks.classList.toggle('active')
})
