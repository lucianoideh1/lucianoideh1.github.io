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
