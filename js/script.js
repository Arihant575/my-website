function searchProjects() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let projects = document.querySelectorAll('#projects li');
    projects.forEach(project => {
        let text = project.textContent.toLowerCase();
        project.style.display = text.includes(input) ? '' : 'none';
    });
}

function showLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
    let modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}