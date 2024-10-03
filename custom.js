document.addEventListener('DOMContentLoaded', function() {
    let savedAnswer = [];
    const divElements = document.querySelectorAll('.survey_button');
    divElements.forEach(div => {
        div.addEventListener('click', function() {
            const text = div.textContent.trim();
            savedAnswer.push(text);
        });
    });
    const showAnswers = document.getElementById('p_modal_button3');
    showAnswers.addEventListener('click', function() {
        console.log(savedAnswer.join(', '));
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const commentButton = document.querySelector('.comment-create');
    const commentInput = document.querySelector('.comment-input');
    const commentsContainer = document.querySelector('.comments');

    commentButton.addEventListener('click', function () {
        const commentText = commentInput.value.trim();
        const newComment = document.createElement('div');
        newComment.classList.add('comments');
        newComment.style.display = 'block';

        newComment.innerHTML = `
            <div class="profile">
                <img alt="Anonymous" src="assets/anonymous.png" >
            </div>
            <div class="comment-content">
                <p class="name">
                    <span>Anonymous</span>
                </p>
                <p>${commentText}</p>
            </div>
            <div class="clr"></div>
            <div class="comment-status">
                <span>Curte·comente</span>
                <img alt="like" src="assets/like.png">
                <span>0</span>
                <small>· <u>Только что</u></small>
            </div>`;
        commentsContainer.appendChild(newComment);
        commentInput.value = '';
    });
});
