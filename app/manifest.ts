import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PWA Protocol Handler",
    short_name: "PWA Protocol Handler",
    description: "PWA Protocol Handler Example",
    display: "standalone",
    start_url: "/",
    background_color: "#4CBD41",
    theme_color: "#4CBD41",
    icons: [
      {
        src: "android/android-launchericon-512-512.png",
        sizes: "512x512",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "android/android-launchericon-512-512.png",
        sizes: "512x512",
        purpose: "maskable",
        type: "image/png",
      },
      {
        src: "android/android-launchericon-192-192.png",
        sizes: "192x192",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "android/android-launchericon-144-144.png",
        sizes: "144x144",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "android/android-launchericon-96-96.png",
        sizes: "96x96",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "android/android-launchericon-72-72.png",
        sizes: "72x72",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "android/android-launchericon-48-48.png",
        sizes: "48x48",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/16.png",
        sizes: "16x16",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/20.png",
        sizes: "20x20",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/29.png",
        sizes: "29x29",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/32.png",
        sizes: "32x32",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/40.png",
        sizes: "40x40",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/50.png",
        sizes: "50x50",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/57.png",
        sizes: "57x57",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/58.png",
        sizes: "58x58",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/60.png",
        sizes: "60x60",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/64.png",
        sizes: "64x64",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/72.png",
        sizes: "72x72",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/76.png",
        sizes: "76x76",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/80.png",
        sizes: "80x80",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/87.png",
        sizes: "87x87",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/100.png",
        sizes: "100x100",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/114.png",
        sizes: "114x114",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/120.png",
        sizes: "120x120",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/128.png",
        sizes: "128x128",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/144.png",
        sizes: "144x144",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/152.png",
        sizes: "152x152",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/167.png",
        sizes: "167x167",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/180.png",
        sizes: "180x180",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/192.png",
        sizes: "192x192",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/256.png",
        sizes: "256x256",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/512.png",
        sizes: "512x512",
        purpose: "any",
        type: "image/png",
      },
      {
        src: "ios/1024.png",
        sizes: "1024x1024",
        purpose: "any",
        type: "image/png",
      },
    ],

    protocol_handlers: [
      {
        protocol: "web+pwaprotocol",
        url: "/?qr_data=%s",
      },
    ],

    screenshots: [
      {
        src: "/screen_shots/1.png",
        sizes: "380x821",
        type: "image/jpg",
        // @ts-ignore
        form_factor: "wide",
      },
      {
        src: "/screen_shots/1.png",
        sizes: "380x821",
        type: "image/jpg",
      },
    ],
  };
}
