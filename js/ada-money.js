document.addEventListener("DOMContentLoaded", function () {
    const noteCount = 12; // Number of tron-money
    const noteSpeed = 8; // Speed of tron-money (lower number is faster)
    const money = [];

    for (let i = 0; i < noteCount; i++) {
        const note = document.createElement("img");
        note.src = "images/money.svg";
        note.style.position = "fixed"; // Fixed position
        note.style.top = `${Math.random() * window.innerHeight}px`;
        note.style.left = `${window.innerWidth + Math.random() * 100}px`;
        note.style.width = "60px";
        note.style.height = "auto";
        note.style.opacity = "1";
        note.style.zIndex = "900"; // Z-index set to 900
        note.style.pointerEvents = "none"; // Pointer events disabled
        document.body.appendChild(note);
        money.push({ element: note, speed: Math.random() * 5 + 1, rotation: Math.random() * 360 });
    }

    function animateMoney() {
        money.forEach((note) => {
            let leftPosition = parseFloat(note.element.style.left);
            let topPosition = parseFloat(note.element.style.top);

            leftPosition -= note.speed;
            topPosition += Math.sin(Date.now() / 1000) * 2; // Random vertical movement

            if (leftPosition < -100) {
                leftPosition = window.innerWidth + Math.random() * 100;
                topPosition = Math.random() * window.innerHeight;
            }

            note.rotation += 2; // Rotation of the note
            note.element.style.transform = `rotate(${note.rotation}deg)`;
            note.element.style.left = `${leftPosition}px`;
            note.element.style.top = `${topPosition}px`;
        });

        requestAnimationFrame(animateMoney);
    }

    animateMoney();
});
