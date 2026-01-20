const translations = {
  en: {
    home: "Home",
    about: "About Us",
    products: "Products",
    catalog: "Catalog",
    contact: "Contact",
    hero_title: "Delivering Sweet Moments Worldwide",
    hero_desc: "Ares International Group is a trusted distributor of high-quality confectionery products.",
    about_title: "About Us",
    about_desc: "We operate with international standards in food distribution.",
    products_title: "Our Products",
    biscuits: "Biscuits",
    cakes: "Cakes",
    sweets: "Sweets",
    lollipops: "Lollipops",
    gum: "Gum & Confectionery",
    catalog_title: "Product Catalog",
    contact_title: "Contact Us",
    send: "Send Message",
    location_title: "Our Location",
  },

  ar: {
    home: "الرئيسية",
    about: "من نحن",
    products: "المنتجات",
    catalog: "الكتالوج",
    contact: "اتصل بنا",
    hero_title: "نقدم لحظات حلوة حول العالم",
    hero_desc: "مجموعة آريس الدولية متخصصة في توزيع منتجات الحلويات عالية الجودة.",
    about_title: "من نحن",
    about_desc: "نعمل وفق المعايير الدولية في توزيع المنتجات الغذائية.",
    products_title: "منتجاتنا",
    biscuits: "بسكويت",
    cakes: "كيك",
    sweets: "حلويات",
    lollipops: "مصاصات",
    gum: "علكة وحلويات",
    catalog_title: "كتالوج المنتجات",
    contact_title: "تواصل معنا",
    send: "إرسال",
    location_title: "موقعنا",
  }
};

let currentLang = "en";

// ===== Burger Menu =====
const burger = document.getElementById("burgerBtn");
const navMenu = document.getElementById("navMenu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when clicking a link (Mobile UX)
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// ===== Language Buttons =====
const langBtnMobile = document.getElementById("langToggle");
const langBtnDesktop = document.getElementById("langToggleDesktop");

function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";

  document.documentElement.lang = currentLang;
  document.body.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[currentLang][el.dataset.i18n];
  });

  updateLangButtons();
}

function updateLangButtons() {
  const text = currentLang === "en" ? "AR" : "EN";
  langBtnMobile.textContent = text;
  langBtnDesktop.textContent = text;
}

langBtnMobile.addEventListener("click", toggleLanguage);
langBtnDesktop.addEventListener("click", toggleLanguage);
