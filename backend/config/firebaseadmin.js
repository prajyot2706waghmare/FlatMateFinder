import admin from "firebase-admin";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const serviceAccount = require("../otpverficationforflatmate-firebase-adminsdk-fbsvc-e0ae757234.json"); // correct relative path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;
