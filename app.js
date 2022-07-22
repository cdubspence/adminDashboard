const contentarea = document.querySelector('.content');
const project = document.createElement('div');

function addProject() {
    const title = prompt('Project Name: ');
    const description = prompt('Project Description: ');
    if (title == '') {
        return
    }
    project.innerHTML = `<h3>${title}</h3>
    <p>${description}</p>`;
    project.className = 'card'
    contentarea.append(project);
}