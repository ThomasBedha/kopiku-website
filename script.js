// buat hamburger bisa di klik
let hamburger = document.querySelector('.hamburger');
let navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    // toggle menu active
    navMenu.classList.toggle('active');
});

// klik link menu tutup hamburger
let navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
    });
});

// form validasi kode
let form = document.querySelector('.contact-form');
let nama = document.getElementById('name');
let email = document.getElementById('email');
let err_nama = document.getElementById('nameError');
let err_email = document.getElementById('emailError');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let ok = true;
    
    // cek nama kosong atau tidak
    if (nama.value.trim() == '') {
        err_nama.textContent = 'Nama tidak boleh kosong';
        ok = false;
    } else {
        err_nama.textContent = '';
    }
    
    // cek email
    if (email.value.trim() == '') {
        err_email.textContent = 'Email tidak boleh kosong';
        ok = false;
    } 
    else if (!email.value.includes('@')) {
        err_email.textContent = 'Email tidak valid';
        ok = false;
    } 
    else {
        err_email.textContent = '';
    }

    if (ok == true) {
        alert('Pesan berhasil dikirim!');
        form.reset();
        err_nama.textContent = '';
        err_email.textContent = '';
    }
});

// tombol pesan di menu
let tombolMenu = document.querySelectorAll('.menu-button');

for(let i = 0; i < tombolMenu.length; i++) {
    tombolMenu[i].addEventListener('click', function() {
        let card = this.closest('.menu-card');
        let namaMenu = card.querySelector('h3').textContent;
        alert('Kamu memesan ' + namaMenu + '!');
    });
}

// scroll ke menu pas klik lihat menu
let btnHero = document.querySelector('.hero-button');
let sectionMenu = document.getElementById('menu');

btnHero.addEventListener('click', function() {
    sectionMenu.scrollIntoView({ behavior: 'smooth' });
});
