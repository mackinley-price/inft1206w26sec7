//Name: Mackinley Price
//File: main.js
// Date: 14 April 2026
// This javascript file will pertain to the website index.html

// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.hidden = true;
showHideBtn.setAttribute('aria-expanded', 'false');

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.hidden = false;
    showHideBtn.setAttribute('aria-expanded', 'true');
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.hidden = true;
    showHideBtn.setAttribute('aria-expanded', 'false');
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');
const statusMessage = document.querySelector('.comment-status');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  if(nameValue === '' || commentValue === ''){
    if(statusMessage){
      statusMessage.textContent = 'Please enter both your name and your comment.'
    }
    return;
  }

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';

  if(statusMessage){
    statusMessage.textContent = 'Comment added by ${nameValue}.';
  }
}
