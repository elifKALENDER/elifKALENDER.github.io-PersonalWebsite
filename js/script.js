
function updateDateTime() {
    const dateTime = new Date().toLocaleString("tr-TR");
    document.getElementById("datetime").innerText = dateTime;
}
setInterval(updateDateTime, 1000);

function toggleBio() {
    const fullBio = document.getElementById("fullBio");
    if (fullBio.style.display === "none") {
        fullBio.style.display = "block";
    } else {
        fullBio.style.display = "none";
    }
}

function validateForm(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if (!name || !email || !message) {
        alert("Lütfen tüm alanları doldurun.");
        event.preventDefault();
    }
}

// Proje detayları
function showProjectDetail(projectId) {
    var modal = document.getElementById("projectModal");
    modal.style.display = "block";

    
    if (projectId === 1) {
        document.getElementById("main-image").src = "assets/img/3.svg";
        document.getElementById("project-info").innerText = "Proje 1: Revit/V-Ray/Güney Kore.";
    }
    
}

// Modal
function closeModal() {
    var modal = document.getElementById("projectModal");
    modal.style.display = "none";
}


function changeImage(image) {
    var mainImage = document.getElementById("main-image");
    mainImage.src = image.src;
}


function prevImage() {
    var currentImage = document.getElementById("main-image");
    var images = document.querySelectorAll(".thumbnail");
    var currentIndex = Array.from(images).indexOf(document.querySelector(".thumbnail[src='" + currentImage.src + "']"));
    var newIndex = (currentIndex - 1 + images.length) % images.length;
    currentImage.src = images[newIndex].src;
}


function nextImage() {
    var currentImage = document.getElementById("main-image");
    var images = document.querySelectorAll(".thumbnail");
    var currentIndex = Array.from(images).indexOf(document.querySelector(".thumbnail[src='" + currentImage.src + "']"));
    var newIndex = (currentIndex + 1) % images.length;
    currentImage.src = images[newIndex].src;
}
