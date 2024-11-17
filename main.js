document.addEventListener('DOMContentLoaded', () => {
    const startQuizButton = document.getElementById('startQuiz');
    const retryQuizButton = document.getElementById('retryQuiz');

    if (startQuizButton) {
        startQuizButton.addEventListener('click', () => {
            window.location.href = 'quiz.html';
        });
    }

    if (retryQuizButton) {
        retryQuizButton.addEventListener('click', () => {
            window.location.href = 'quiz.html';
        });
    }

    // Results page
    const scoreElement = document.getElementById('score');
    const messageElement = document.getElementById('message');

    if (scoreElement && messageElement) {
        const score = localStorage.getItem('quizScore');
        const totalQuestions = localStorage.getItem('totalQuestions');

        if (score !== null && totalQuestions !== null) {
            scoreElement.textContent = `${score}/${totalQuestions}`;
            const percentage = (score / totalQuestions) * 100;

            if (percentage >= 80) {
                messageElement.textContent = "Excellent job! You're a quiz master!";
            } else if (percentage >= 60) {
                messageElement.textContent = "Good work! Keep it up!";
            } else {
                messageElement.textContent = "Nice try! There's room for improvement.";
            }

            createConfetti();
        }
    }
});

function createConfetti() {
    const confettiCount = 100;
    const container = document.querySelector('body');

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = getRandomColor();
        container.appendChild(confetti);

        setTimeout(() => {
            confetti.classList.add('animate');
        }, 100);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}