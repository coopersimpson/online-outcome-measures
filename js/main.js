// Drop down menu
document.querySelectorAll('.dropdown-header').forEach(function(header) {
    header.addEventListener('click', function() {
      var content = this.querySelector('.dropdown-content');
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
  });