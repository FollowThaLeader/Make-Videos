document.addEventListener('DOMContentLoaded', function () {
  const enableNotificationsBtn = document.getElementById('enableNotifications');
  const sendNotificationBtn = document.getElementById('sendNotification');

  let notificationsEnabled = false;

  // Function to enable notifications
  enableNotificationsBtn.addEventListener('click', function () {
    if (!notificationsEnabled) {
      if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function (permission) {
          if (permission === 'granted') {
            notificationsEnabled = true;
            alert('Notifications enabled!');
          }
        });
      } else {
        alert('Notification permission has been denied. Please enable it in your browser settings.');
      }
    } else {
      alert('Notifications are already enabled.');
    }
  });

  // Function to send notification
  sendNotificationBtn.addEventListener('click', function () {
    if (notificationsEnabled) {
      new Notification('New Notification', {
        body: 'This is a test notification!'
      });
    } else {
      alert('Please enable notifications first.');
    }
  });
});
