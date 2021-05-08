const toggleButton = document.getElementsByClassName('toggle-button')[0]


const navigationLinks = document.getElementsByClassName('navigation-links')[0]

toggleButton.addEventListener('click', () => {
    navigationLinks.classList.toggle('active')
})
