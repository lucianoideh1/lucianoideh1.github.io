

document.getElementById('download-btn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = './resume.pdf'; 
    link.download = 'Esteban-Vazquez Full stack developer.pdf'; // Suggested filename
    link.click(); // Trigger the download
  });