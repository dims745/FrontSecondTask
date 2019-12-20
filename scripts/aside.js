const aside_click = (event) => {
    if(event.target.classList[0] === 'aside') {
        setVision(false);
    }
}

const setVision = (to) => {
    const elem = document.querySelector('.aside');
    if(to) elem.style.display = 'block';
    else elem.style.display = 'none';
}
