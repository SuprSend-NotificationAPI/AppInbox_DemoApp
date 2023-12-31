const notificationButton = document.getElementById('notificationButton');
const notificationPanel = document.getElementById('notificationPanel');
const inputAvatar = document.getElementById('avatar');
const inputHeading = document.getElementById('heading');
const inputContent = document.getElementById('content');
const inputUrlButton = document.getElementById('urlButton');
const notifications = document.querySelector('.notifications');
let notificationCounter = 0;


function updateCounter(count) {
    notifications.style.setProperty('--counter', `"${count}"`);
}

function createNotification() {
    const avatarUrl = inputAvatar.value;
    const headingText = inputHeading.value;
    const contentText = inputContent.value;
    let urlButtonLink = inputUrlButton.value;

    // Check if the URL is absolute, and if not, make it absolute
    if (!urlButtonLink.startsWith('http://') && !urlButtonLink.startsWith('https://')) {
        urlButtonLink = 'http://' + urlButtonLink;
    }

    if (avatarUrl && headingText && contentText && urlButtonLink) {
        const notificationItem = document.createElement('a');
        notificationItem.href = urlButtonLink;
        notificationItem.target = '_blank';
        notificationItem.classList.add('notification-panel-link');

        const listItem = document.createElement('li');
        listItem.classList.add('notification-item');

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');

        const avatarImg = document.createElement('img');
        avatarImg.src = avatarUrl;
        avatarDiv.appendChild(avatarImg);

        const notificationDetails = document.createElement('div');
        notificationDetails.classList.add('notification-details');

        const notificationHeading = document.createElement('div');
        notificationHeading.classList.add('notification-heading');
        notificationHeading.textContent = headingText;

        const notificationContent = document.createElement('div');
        notificationContent.classList.add('notification-content');
        notificationContent.textContent = contentText;

        notificationDetails.appendChild(notificationHeading);
        notificationDetails.appendChild(notificationContent);
        listItem.appendChild(avatarDiv);
        listItem.appendChild(notificationDetails);
        notificationItem.appendChild(listItem);

        const notificationList = document.querySelector('.notification-list');
        notificationList.appendChild(notificationItem);

        inputAvatar.value = '';
        inputHeading.value = '';
        inputContent.value = '';
        inputUrlButton.value = '';
        notificationPanel.style.display = 'none';

        notificationCounter++;
        updateCounter(notificationCounter);
    }
}

notificationButton.addEventListener('click', () => {
    if (notificationPanel.style.display === 'block') {
        notificationPanel.style.display = 'none';
    } else {
        notificationPanel.style.display = 'block';
    }
});

const form = document.getElementById('notificationForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    createNotification();
});

notificationPanel.addEventListener('click', () => {
    notificationCounter = 0;
    updateCounter(notificationCounter);
});

notificationButton.addEventListener('click', () => {
    notificationCounter = 0;
    updateCounter(notificationCounter);
});

const notificationsIcon = document.querySelector('.notifications');
notificationsIcon.addEventListener('click', () => {
    notificationsIcon.style.animationPlayState = 'paused';
});
