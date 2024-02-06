// check service worker is support
const checkPermission = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No support for service worker!");
  }

  // check notifcation is supported
  if (!("Notification" in window)) {
    throw new Error("No support for notification API!");
  }
};

// register service worker
const registerServiceWorker = async () => {
  const registration = await navigator.serviceWorker.register("/sw.js");
  return registration;
};

// request permission for push notification
const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();

  if (permission !== "granted") {
    throw new Error("Permission not granted for push notification!");
  } else {
    new Notification("Test Notification!");
  }
};

export const initServiceWorker = async () => {
  checkPermission();
  await requestNotificationPermission();
  await registerServiceWorker();
};
