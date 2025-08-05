"use strict";

const downloadResumeBtn = document.querySelector('.button .btn:nth-child(1)');
const visitGithubBtn = document.querySelector('.button .btn:nth-child(2)');
const projectsDropdownContent = document.getElementById('projects-dropdown');
const projectsNavLink = document.getElementById('projects-link');
const contactDropdownContent = document.getElementById('contact-dropdown');
const contactNavLink = document.getElementById('contact-link');
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const footerHome = document.getElementById('footer-home');
const footerAbout = document.getElementById('footer-about');
const footerContact = document.getElementById('footer-contact');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('*').forEach(element => {
        element.draggable = false;
    });
});

document.addEventListener('dragstart', (e) => e.preventDefault());
document.addEventListener('selectstart', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    e.preventDefault();
});

if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = './Assets/resume.pdf';
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

if (visitGithubBtn) {
    visitGithubBtn.addEventListener('click', () => {
        window.open('https://github.com/venomxspiderman', '_blank');
    });
}

function toggleDropdown(dropdownElement, event) {
    event.preventDefault();
    event.stopPropagation();
    
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        if (dropdown !== dropdownElement) {
            dropdown.classList.remove('show-dropdown');
        }
    });
    
    if (dropdownElement) {
        dropdownElement.classList.toggle('show-dropdown');
    }
}

if (projectsNavLink && projectsDropdownContent) {
    projectsNavLink.addEventListener('click', (event) => {
        toggleDropdown(projectsDropdownContent, event);
    });
}

if (contactNavLink && contactDropdownContent) {
    contactNavLink.addEventListener('click', (event) => {
        toggleDropdown(contactDropdownContent, event);
    });
}

document.addEventListener('click', (event) => {
    if (projectsNavLink && projectsDropdownContent && 
        !projectsNavLink.contains(event.target) && 
        !projectsDropdownContent.contains(event.target)) {
        projectsDropdownContent.classList.remove('show-dropdown');
    }
    
    if (contactNavLink && contactDropdownContent && 
        !contactNavLink.contains(event.target) && 
        !contactDropdownContent.contains(event.target)) {
        contactDropdownContent.classList.remove('show-dropdown');
    }
});

if (homeLink) {
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

if (aboutLink) {
    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.open('https://in.linkedin.com/in/tathagata06', '_blank');
    });
}

if (footerHome) {
    footerHome.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

if (footerAbout) {
    footerAbout.addEventListener('click', (event) => {
        event.preventDefault();
        window.open('https://in.linkedin.com/in/tathagata06', '_blank');
    });
}

if (footerContact) {
    footerContact.addEventListener('click', (event) => {
        event.preventDefault();
        if (contactNavLink) {
            contactNavLink.click();
        }
    });
}

document.querySelectorAll('.dropdown-content a').forEach(item => {
    item.addEventListener('click', () => {
        if (projectsDropdownContent) projectsDropdownContent.classList.remove('show-dropdown');
        if (contactDropdownContent) contactDropdownContent.classList.remove('show-dropdown');
    });
});
