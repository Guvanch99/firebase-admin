const {getAuth} = require("firebase-admin/auth");

const userChecker = async (req, res) => {
  const {email} = req.body
  console.log('email',email)
  getAuth()
    .getUserByEmail(email)
    .then(() => {
      res.status(200).json({msg: true})
    })
    .catch((error) => {
      res.status(200).json({msg: false})
    });
}

const tokenChecker = async (req, res) => {
  const {accessToken} = req.body
  getAuth()
    .verifyIdToken(accessToken)
    .then(() => {
      res.status(200).json({msg: true})
    })
    .catch((error) => {
      res.status(200).json({msg: false})
    });
}

module.exports = {
  userChecker,
  tokenChecker
}