document.addEventListener('DOMContentLoaded', function () {
  const enableNotificationsBtn = document.getElementById('enableNotifications');
  const sendNotificationBtn = document.getElementById('sendNotification');

  let notificationsEnabled = false;

  // Function to enable notifications
  enableNotificationsBtn.addEventListener('click', function () {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(function (permission) {
        if (permission === 'granted') {
          notificationsEnabled = true;
          alert('Notifications enabled!');
        }
      });
    } else {
      notificationsEnabled = true;
      alert('Notifications are already enabled.');
    }
  });

  // Function to send notification
  sendNotificationBtn.addEventListener('click', function () {
    if (notificationsEnabled) {
      if (Notification.permission === 'granted') {
        new Notification('New Notification', {
          body: 'This is a test notification!'
        });
      } else {
        alert('Please enable notifications first.');
      }
    } else {
      alert('Please enable notifications first.');
    }
  });
});
