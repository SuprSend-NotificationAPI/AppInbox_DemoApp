    const notificationButton = document.getElementById('notificationButton');
    const notificationPanel = document.getElementById('notificationPanel');
    const inputAvatar = document.getElementById('avatar');
    const inputHeading = document.getElementById('heading');
    const inputContent = document.getElementById('content');
    const inputUrlButton = document.getElementById('urlButton');
    // Get a reference to the notifications element
    const notifications = document.querySelector('.notifications');
    // Initialize the counter to 0
    let notificationCounter = 0;
    // Function to update the counter
    function updateCounter(count) {
        // Set the CSS variable '--counter' to the new count
        notifications.style.setProperty('--counter', `"${count}"`);
    }
    // Function to create a new notification item using user inputs
    function createNotification() {
        const avatarUrl = inputAvatar.value;
        const headingText = inputHeading.value;
        const contentText = inputContent.value;
        const urlButtonLink = inputUrlButton.value;
        if (avatarUrl && headingText && contentText && urlButtonLink) {
            // Create a new notification item
            const notificationItem = document.createElement('a');
            notificationItem.href = urlButtonLink;
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
            // Append the new notification item to the list
            const notificationList = document.querySelector('.notification-list');
            notificationList.appendChild(notificationItem);
          
      
          
          // Clear input fields
            inputAvatar.value = '';
            inputHeading.value = '';
            inputContent.value = '';
            inputUrlButton.value = '';
            // Hide the notification panel
            notificationPanel.style.display = 'none';
            // Increment the counter and update it
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
    // Handle form submission
    const form = document.getElementById('notificationForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        createNotification();
    });
    // ...
    // Add a click event listener to the notification panel to reset the counter
    notificationPanel.addEventListener('click', () => {
        notificationCounter = 0;
        updateCounter(notificationCounter);
    });
    // Add a click event listener to the notification button to reset the counter
    notificationButton.addEventListener('click', () => {
        notificationCounter = 0;
        updateCounter(notificationCounter);
    });
  
  const notificationsIcon = document.querySelector('.notifications');

notificationsIcon.addEventListener('click', () => {
  notificationsIcon.style.animationPlayState = 'paused'; // Pause the animation on click
});

