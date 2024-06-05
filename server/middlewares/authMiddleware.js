const admin = require("../firebaseAdmin");

const checkFirebaseToken = async (req, res, next) => {
  const tokenId = req.headers.authorization?.split(" ")[1];

  if (!tokenId) {
    return res.status(401).send("Unauthorized");
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(tokenId);
    console.log(decodedToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error verifying ID token:", error);
    return res.status(401).send("Unauthorized");
  }
};

module.exports = checkFirebaseToken;
