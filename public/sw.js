console.log("service-worker is running");

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

// save subscription to database
const saveSubscription = async (subscription) => {
  const response = await fetch(
    `${process.env.BACKEND_URL}/push_notification/save-subscription`,
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subscription, user_id: 1 }),
      cache: "no-cache",
    }
  );
  return response.json();
};

// Main function =================================================================

self.addEventListener("activate", async (event) => {
  /**
   *  This is only work for firfox brower for now
   *  https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
   *  https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
   *  https://developer.mozilla.org/en-US/docs/Web/API/PushManager
   *
   * but if you want to use it in chrome browser you can use this code
   * add some public and privete key then it will work
   * you can create keys using below code,
   *  npx web-push generate-vapid-keys
   */
  const subscription = await self.registration.pushManager.subscribe({
    userVisibleOnly: true,
    // below want that key to array buffer format
    applicationServerKey: urlBase64ToUint8Array(
      "BL99_EpFmPxNV1HU_0tG3UaEJw-siSetAmeoNMc7HBw6z0Ply-PRxJY-FGg17RXXn0N4tTSab2nUbX7Nt7MlnzQ"
    ),
  });
  console.log("service-worker activated");

  const response = await saveSubscription(subscription);
  console.log("🚀 ~ self.addEventListener ~ response:", response);
});

// event listener for push notification listener
self.addEventListener("push", (event) => {
  self.registration.showNotification("Whoo!!", {
    body: event.data.text(),
  });
});
