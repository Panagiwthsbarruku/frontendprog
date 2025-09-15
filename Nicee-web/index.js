const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close'); // Νέο ID για το X

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenuToggle.textContent = '≡'; // Επαναφορά του αρχικού εικονιδίου
        } else {
            mobileMenuToggle.textContent = ''; // Κρύβουμε το αρχικό toggle όταν το μενού είναι ανοιχτό
        }
}
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    mobileMenuClose.addEventListener('click', toggleMobileMenu);

    // Κουμπί play-pause //
    const listenButtons = document.querySelectorAll('.listen-button-toggle');
    const player = document.getElementById('radioPlayer'); // το <audio>
    let isPlaying = false;

    listenButtons.forEach(button => {
        const listenIcon = button.querySelector('i');
        const buttonText = button.querySelector('span');

        button.addEventListener('click', () => {
            if (isPlaying) {
                player.pause(); // σταματάει το stream
                listenIcon.classList.remove('fa-pause');
                listenIcon.classList.add('fa-play');
                buttonText.textContent = 'ΑΚΟΥΣΤΕ';
                console.log('Αναπαραγωγή σταμάτησε.');
                isPlaying = false;
            } else {
                player.play(); // ξεκινάει το stream
                listenIcon.classList.remove('fa-play');
                listenIcon.classList.add('fa-pause');
                buttonText.textContent = 'ΠΑΥΣΗ';
                console.log('Αναπαραγωγή ξεκίνησε.');
                isPlaying = true;
            }
        });
    });
