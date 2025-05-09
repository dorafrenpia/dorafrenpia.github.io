document.addEventListener("DOMContentLoaded", function () {
  function toggleSidebar() {
    const sideNav = document.querySelector('.side-nav');
    if (sideNav) {
      sideNav.classList.toggle('active');
    }
  }

  function toggleMore(btn) {
    const moreContent = btn.previousElementSibling;
    if (moreContent) {
      if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btn.textContent = "Sembunyikan";
      } else {
        moreContent.style.display = "none";
        btn.textContent = "Lihat Selengkapnya";
      }
    }
  }

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".side-nav a");

  // Menambahkan event listener untuk klik pada setiap link
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      // Menghapus kelas 'active' dari semua link
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });

      // Menambahkan kelas 'active' ke link yang diklik
      e.target.classList.add('active');
    });
  });

  window.addEventListener("scroll", () => {
    let current = "";

    // Mengecek posisi scroll dan menentukan section aktif
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      // Menentukan apakah bagian ini dalam jangkauan scroll
      if (pageYOffset >= sectionTop - 100 && pageYOffset < sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    // Kondisi untuk scroll paling atas
    if (window.scrollY <= 0) {  
      current = "home"; // ID untuk "Beranda"
    } 
    // Kondisi untuk scroll paling bawah
    else if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      current = "contact"; // ID untuk "Kontak"
    }
    // Kondisi untuk scroll agak kebawah, tapi tidak terlalu bawah
    else if (window.scrollY >= document.body.scrollHeight - (document.body.scrollHeight * 0.2) && window.scrollY < document.body.scrollHeight - (document.body.scrollHeight * 0.1)) {      
      current = "certificates"; // ID untuk "Sertifikat"
    }

    // Mengupdate class active untuk menandai link yang aktif
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Jika kamu pakai tombol untuk toggle sidebar, kamu bisa bind event-nya di sini juga
  const toggleBtn = document.querySelector('#toggleSidebar');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleSidebar);
  }
});

function toggleSidebar() {
  const sideNav = document.querySelector('.side-nav');
  if (sideNav) {
    sideNav.classList.toggle('active');
  }
}

function toggleMore(btn) {
  const moreContent = btn.previousElementSibling;
  if (moreContent) {
    if (moreContent.style.display === "none") {
      moreContent.style.display = "block";
      btn.textContent = "Sembunyikan";
    } else {
      moreContent.style.display = "none";
      btn.textContent = "Lihat Selengkapnya";
    }
  }
}
function toggleSidebarRight() {
  const sidebar = document.getElementById("rightSidebar");
  const button = document.querySelector(".toggle-btn-rightbar");
  const img = button.querySelector("img");

  sidebar.classList.toggle("fullscreen");
  button.classList.toggle("fullscreen");

  // Ganti gambar jika kamu punya dua ikon berbeda
  const imagePath = sidebar.classList.contains("fullscreen")
    ? "images/IconGerak.png"
    : "images/IconGerak.png";

  img.src = imagePath;
}
