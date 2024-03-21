
const studyIcon = document.getElementById('studyIcon');
const workIcon = document.getElementById('workIcon');
const study = document.getElementById('myEducation');
const work = document.getElementById('myCareer');

// for experience part - default button & change status
function changeEvent () {
    if (studyIcon.classList.contains('selected')) {
        study.style.display = 'none';
        work.style.display = 'flex';
        studyIcon.classList.remove('selected');
        workIcon.classList.add('selected');
    } else {
        study.style.display = 'flex';
        work.style.display = 'none';
        workIcon.classList.remove('selected');
        studyIcon.classList.add('selected');
    }
}