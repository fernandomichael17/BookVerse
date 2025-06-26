// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Book data
const booksData = {
  "atomic-habits": {
    title: "Atomic Habits",
    author: "James Clear",
    year: "2018",
    price: "Rp 89.000",
    synopsis:
      "Buku ini mengungkap bagaimana perubahan kecil dapat menghasilkan hasil yang luar biasa. James Clear menjelaskan sistem praktis untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk. Dengan strategi yang terbukti secara ilmiah, buku ini akan membantu Anda mencapai tujuan dengan cara yang berkelanjutan.",
  },
  sapiens: {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: "2011",
    price: "Rp 95.000",
    synopsis:
      "Sebuah narasi yang mengagumkan tentang bagaimana manusia berevolusi dari spesies yang tidak signifikan menjadi penguasa planet. Harari menjelaskan tiga revolusi yang membentuk manusia: Revolusi Kognitif, Revolusi Pertanian, dan Revolusi Sains, serta implikasinya terhadap masa depan.",
  },
  "psychology-money": {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: "2020",
    price: "Rp 79.000",
    synopsis:
      "Buku ini mengeksplorasi aspek psikologis dalam pengelolaan keuangan. Housel menunjukkan bahwa kesuksesan finansial bukan hanya tentang pengetahuan, tetapi juga tentang perilaku. Dengan 19 cerita pendek, buku ini mengajarkan pelajaran berharga tentang keserakahan, ketakutan, dan kebahagiaan.",
  },
  "thinking-fast-slow": {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: "2011",
    price: "Rp 105.000",
    synopsis:
      "Pemenang Nobel Prize Daniel Kahneman mengungkap dua sistem dalam pikiran kita: Sistem 1 yang cepat dan intuitif, dan Sistem 2 yang lambat dan logis. Buku ini mengeksplorasi bagaimana kedua sistem ini mempengaruhi keputusan kita dan mengapa kita sering membuat kesalahan dalam berpikir.",
  },
  "7-habits": {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    year: "1989",
    price: "Rp 85.000",
    synopsis:
      "Panduan klasik untuk pengembangan diri yang telah mengubah jutaan hidup. Covey menyajikan pendekatan prinsip-sentris untuk memecahkan masalah pribadi dan profesional. Ketujuh kebiasaan ini memberikan kerangka kerja yang progresif untuk hidup yang efektif dan bermakna.",
  },
  alchemist: {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: "1988",
    price: "Rp 75.000",
    synopsis:
      "Kisah filosofis tentang seorang gembala muda bernama Santiago yang melakukan perjalanan dari Spanyol ke Mesir untuk mencari harta karun. Dalam perjalanannya, ia belajar tentang mendengarkan hati, mengenali peluang, dan mengikuti mimpi. Sebuah fabel yang menginspirasi tentang mengikuti passion dan tujuan hidup.",
  },
  1984: {
    title: "1984",
    author: "George Orwell",
    year: "1949",
    price: "Rp 68.000",
    synopsis:
      "Novel distopia yang menggambarkan masyarakat totaliter di mana pemerintah mengontrol setiap aspek kehidupan warga. Melalui karakter Winston Smith, Orwell mengeksplorasi tema-tema kekuasaan, kebenaran, dan kebebasan individu. Sebuah peringatan yang relevan tentang bahaya otoritarianisme.",
  },
  mockingbird: {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    price: "Rp 72.000",
    synopsis:
      "Novel klasik yang menceritakan kisah Scout Finch yang tumbuh dewasa di Alabama Selatan tahun 1930-an. Melalui mata seorang anak, kita menyaksikan ketidakadilan rasial dan pelajaran moral tentang empati, keberanian, dan melakukan yang benar meskipun sulit.",
  },
  "pride-prejudice": {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: "1813",
    price: "Rp 65.000",
    synopsis:
      "Roman klasik tentang Elizabeth Bennet dan Mr. Darcy, yang menggambarkan kompleksitas hubungan dan dinamika sosial di Inggris abad ke-19. Austen dengan cemerlang mengeksplorasi tema-tema tentang kelas sosial, pernikahan, dan pentingnya tidak menilai orang dari kesan pertama.",
  },
  "brief-history-time": {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    year: "1988",
    price: "Rp 88.000",
    synopsis:
      "Penjelasan yang mudah dipahami tentang konsep-konsep kompleks dalam fisika modern, termasuk teori relativitas, mekanika kuantum, dan lubang hitam. Hawking berhasil membuat topik-topik rumit menjadi accessible bagi pembaca umum sambil mempertahankan akurasi ilmiah.",
  },
  "code-breaker": {
    title: "The Code Breaker",
    author: "Walter Isaacson",
    year: "2021",
    price: "Rp 125.000",
    synopsis:
      "Biografi Jennifer Doudna, pionir teknologi CRISPR yang revolusioner. Isaacson menceritakan perjalanan penemuan yang mengubah cara kita memahami dan memanipulasi genetika, serta implikasi etis dari kemampuan untuk mengedit gen manusia.",
  },
  educated: {
    title: "Educated",
    author: "Tara Westover",
    year: "2018",
    price: "Rp 92.000",
    synopsis:
      "Memoar yang kuat tentang kekuatan transformatif pendidikan. Westover menceritakan perjalanannya dari kehidupan terisolasi di keluarga Mormon fundamentalis di Idaho hingga meraih PhD dari Cambridge. Sebuah kisah tentang keluarga, identitas, dan harga dari mengejar pengetahuan.",
  },
  "good-great": {
    title: "Good to Great",
    author: "Jim Collins",
    year: "2001",
    price: "Rp 98.000",
    synopsis:
      "Hasil penelitian mendalam tentang apa yang membuat perusahaan baik menjadi perusahaan yang luar biasa. Collins mengidentifikasi pola-pola umum dari perusahaan yang berhasil melakukan transformasi berkelanjutan, termasuk kepemimpinan Level 5, konsep Hedgehog, dan budaya disiplin.",
  },
  "lean-startup": {
    title: "The Lean Startup",
    author: "Eric Ries",
    year: "2011",
    price: "Rp 89.000",
    synopsis:
      "Metodologi revolusioner untuk membangun startup yang sukses melalui inovasi berkelanjutan. Ries memperkenalkan konsep Build-Measure-Learn dan Minimum Viable Product (MVP) yang telah mengubah cara entrepreneur mendekati pengembangan produk dan bisnis.",
  },
  "start-why": {
    title: "Start With Why",
    author: "Simon Sinek",
    year: "2009",
    price: "Rp 85.000",
    synopsis:
      'Buku yang mengeksplorasi mengapa beberapa pemimpin dan organisasi lebih inovatif, berpengaruh, dan menguntungkan daripada yang lain. Sinek memperkenalkan konsep Golden Circle dan menjelaskan bagaimana pemimpin besar menginspirasi tindakan dengan mulai dari "mengapa".',
  },
  "zero-one": {
    title: "Zero to One",
    author: "Peter Thiel",
    year: "2014",
    price: "Rp 95.000",
    synopsis:
      "Panduan tentang bagaimana membangun perusahaan yang menciptakan hal-hal baru. Thiel, co-founder PayPal, berbagi wawasan tentang startup, inovasi, dan monopoli. Buku ini menantang pemikiran konvensional tentang kompetisi dan mengadvokasi penciptaan nilai unik.",
  },
};

// Show book detail modal
function showBookDetail(bookId) {
  const book = booksData[bookId];
  if (!book) return;

  // Update modal content
  document.getElementById("modalBookTitle").textContent = book.title;
  document.getElementById(
    "modalBookAuthor"
  ).textContent = `Penulis: ${book.author}`;
  document.getElementById(
    "modalBookYear"
  ).textContent = `Tahun Terbit: ${book.year}`;
  document.getElementById("modalBookSynopsis").textContent = book.synopsis;
  document.getElementById("modalBookPrice").textContent = book.price;
  document.getElementById("modalBookCover").textContent = book.title;

  // Show modal
  document.getElementById("bookModal").style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

// Close modal
function closeModal() {
  document.getElementById("bookModal").style.display = "none";
  document.body.style.overflow = "auto"; // Restore scroll
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("bookModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Close modal with ESC key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Add smooth scrolling and animations
document.addEventListener("DOMContentLoaded", function () {
  // Animate book cards on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe book cards
  const bookCards = document.querySelectorAll(".book-card");
  bookCards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Animate features on about page
  const features = document.querySelectorAll(".feature");
  features.forEach((feature) => {
    feature.style.opacity = "0";
    feature.style.transform = "translateY(30px)";
    feature.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(feature);
  });
});
