document.addEventListener("DOMContentLoaded", function() {
    const player = document.getElementById('player');
    const ai1 = document.getElementById('ai1');
    const ai2 = document.getElementById('ai2');
    const scoreDisplay = document.getElementById('score');
    const timeDisplay = document.getElementById('time');

    let score = 0;
    let startTime = Date.now();

    function updateScore() {
        scoreDisplay.textContent = `Score: ${score}`;
    }

    function updateTime() {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        timeDisplay.textContent = `Time: ${elapsedTime}`;
    }

    function moveCharacter(character, x, y) {
        const rect = character.getBoundingClientRect();
        character.style.left = `${rect.left + x}px`;
        character.style.top = `${rect.top + y}px`;
    }

    function moveAI(ai, dx, dy) {
        moveCharacter(ai, dx, dy);
        const playerRect = player.getBoundingClientRect();
        const aiRect = ai.getBoundingClientRect();
        if (playerRect.left < aiRect.right && playerRect.right > aiRect.left &&
            playerRect.top < aiRect.bottom && playerRect.bottom > aiRect.top) {
            score += 1;
            updateScore();
            ai.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
            ai.style.left = `${Math.random() * (window.innerWidth - 50)}px`;
        }
    }

    function handleMovement(event) {
        switch(event.key) {
            case 'ArrowUp':
                moveCharacter(player, 0, -5);
                break;
            case 'ArrowDown':
                moveCharacter(player, 0, 5);
                break;
            case 'ArrowLeft':
                moveCharacter(player, -5, 0);
                break;
            case 'ArrowRight':
                moveCharacter(player, 5, 0);
                break;
        }
    }

    document.addEventListener('keydown', handleMovement);

    function update() {
        moveAI(ai1, Math.sin(Date.now() / 1000) * 2, Math.cos(Date.now() / 1000) * 2);
        moveAI(ai2, Math.sin(Date.now() / 2000) * 2, Math.cos(Date.now() / 2000) * 2);
        updateTime();
        requestAnimationFrame(update);
    }

    update();
});
