// Add event listeners to each element after the DOM has loaded
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.element').forEach(element => {
        element.addEventListener('click', function () {
            // Clear previous descriptions
            document.querySelectorAll('.description').forEach(desc => {
                desc.style.display = 'none';
            });
            // Show description for the clicked element
            let elementId = this.id;
            let description = document.getElementById(`${elementId}_description`);
            description.style.display = 'block';
        });
    });
});