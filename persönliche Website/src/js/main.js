'use strict';

document.getElementById('projectsBtn').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
});

document.getElementById('contactBtn').addEventListener('click', function() {
    console.log('Button geklickt');
    window.location.href = './contact.html';
});