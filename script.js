document.addEventListener('DOMContentLoaded', function() {
  const enableNotificationsButton = document.getElementById('enableNotifications');
  const sendNotificationButton = document.getElementById('sendNotification');

  enableNotificationsButton.addEventListener('click', requestNotificationPermission);
  sendNotificationButton.addEventListener('click', sendNotification);

  function requestNotificationPermission() {
    Notification.requestPermission().then(function(result) {
      if (result === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    });
  }

  function sendNotification() {
    if (Notification.permission === 'granted') {
      new Notification('New notification from your website!', {
        body: 'This is a notification from your website.'
      });
    } else {
      console.error('Notification permission not granted.');
    }
  }
});
