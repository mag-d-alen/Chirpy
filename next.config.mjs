/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    GOOGLE_CLIENT_ID:
      "673575372689-o4a37flsa6gff8vegksmnjcb6hhhaenu.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    FIREBASE_API_KEY: "AIzaSyCgDJPU-Hu78Ga_LHWywRwDb7syiVx8RiU",
    FIREBASE_AUTH_DOMAIN: "chirpy-99b53.firebaseapp.com",
    FIREBASE_PROJECT_ID: "chirpy-99b53",
    FIREBASE_STORAGE_BUCKET: "chirpy-99b53.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "673575372689",
    FIREBASE_APP_ID: "1:673575372689:web:b6dc624f77cba498253c30",
    FIREBASE_MEASUREMENT_ID: "G-GQ4KF3V84M",
    NEXTAUTH_SECRET: "v+fwAiyd4B7a26E3RcBuBx7FfDZwIecRKdwFRt08eoY=",
  },
};

export default nextConfig;
