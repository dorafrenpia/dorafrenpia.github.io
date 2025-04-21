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
  