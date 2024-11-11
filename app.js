const btn = document.querySelector('.btn-toggle')
btn.addEventListener('click', function() {
    console.log("toggle clicked")
    document.body.classList.toggle('dark-theme')
})

const mobileBtn = document.querySelector('.mobile-btn-toggle')
mobileBtn.addEventListener('click', function() {
    console.log("toggle clicked")
    document.body.classList.toggle('dark-theme')
})

document.getElementById('download-btn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = './resume.pdf'; 
    link.download = 'Esteban-Vazquez-CV.pdf'; // Suggested filename
    link.click(); // Trigger the download
  });