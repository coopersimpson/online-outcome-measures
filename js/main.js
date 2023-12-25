// Drop down menu
document.querySelector('.dropdown-header').addEventListener('click', function() {
    var content = this.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    if (content.style.display === 'block') {
        this.style.backgroundColor = '#f9f9f9';
    } else {
        this.style.backgroundColor = '';
    }
});
