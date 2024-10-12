// Funzione per aggiungere una nuova fotografia alla galleria
document.getElementById('photo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const photoUrl = document.getElementById('photo-url').value;
    const photoDescription = document.getElementById('photo-description').value;
    const gallery = document.querySelector('.gallery');

    // Crea un nuovo elemento per la fotografia
    const photoDiv = document.createElement('div');
    photoDiv.innerHTML = `<img src="${photoUrl}" alt="${photoDescription}"><p>${photoDescription}</p>`;
    gallery.appendChild(photoDiv);

    // Anima la nuova fotografia utilizzando GSAP
    gsap.from(photoDiv, { duration: 0.5, opacity: 0, y: -20 });

    // Pulisci i campi del modulo
    document.getElementById('photo-url').value = '';
    document.getElementById('photo-description').value = '';
});


// Anima la nav
gsap.from("nav", { duration: 2, y: -200, opacity: 0 });

// Anima il titolo con un effetto di rimbalzo
gsap.from("h1", { duration: 2, x: -200, opacity: 0, ease: "bounce" });

// Anima il testo con un effetto di rotazione
gsap.from("p", { duration: 2, y: 200,  opacity: 0, delay: 1 });

// Anima le immagini con un effetto di rimbalzo e ritardo
gsap.from("img", { duration: 1,  scale: 0, opacity: 0, delay: 1 });
