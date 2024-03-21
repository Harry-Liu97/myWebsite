const headerContainer = document.querySelector('.headerContainer')
const mainContainer = document.querySelector('.mainContainer')
const footerContainer = document.querySelector('.footerContainer')

// daylight <-> moon for mylist
const nightButton1 = document.getElementById('nightSwitch1');
const moonIcon1 = document.getElementById('moonIcon1');
const sunIcon1 = document.getElementById('sunIcon1');

nightButton1.addEventListener('click', function () {
    headerContainer.classList.toggle('dayMode');
    headerContainer.classList.toggle('nightMode');
    mainContainer.classList.toggle('dayMode');
    mainContainer.classList.toggle('nightMode');
    footerContainer.classList.toggle('dayMode');
    footerContainer.classList.toggle('nightMode');

    if (moonIcon1.style.display != 'none') {
        moonIcon1.style.display = 'none';
        sunIcon1.style.display = 'inline-block';
    } else {
        sunIcon1.style.display = 'none';
        moonIcon1.style.display = 'inline-block';
    }
})


// daylight <-> moon for dropdown
const nightButton2 = document.getElementById('nightSwitch2');
const moonIcon2 = document.getElementById('moonIcon2');
const sunIcon2 = document.getElementById('sunIcon2');

nightButton2.addEventListener('click', function () {
    headerContainer.classList.toggle('dayMode');
    headerContainer.classList.toggle('nightMode');
    mainContainer.classList.toggle('dayMode');
    mainContainer.classList.toggle('nightMode');
    footerContainer.classList.toggle('dayMode');
    footerContainer.classList.toggle('nightMode');

    if (moonIcon2.style.display != 'none') {
        moonIcon2.style.display = 'none';
        sunIcon2.style.display = 'inline-block';
    } else {
        sunIcon2.style.display = 'none';
        moonIcon2.style.display = 'inline-block';
    }
})