const cube = document.querySelector('.cube');

cube.addEventListener('mouseover', () => {
    cube.classList.add('is-hovered')
    cube.innerHTML = 'Nice Hover'
})

cube.addEventListener('mouseout', () => {
    cube.classList.remove('is-hovered')
    cube.innerHTML = '';
})