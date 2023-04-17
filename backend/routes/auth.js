const router = require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
//register
router.post("/admin", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hiddenPass = await bcrypt.hash(req.body.password, salt);
    const newAdmin = new User({
      username: req.body.username,
      password: hiddenPass,
    });

    const admin = await newAdmin.save();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
});
//login
router.post("/login", async (req, res) => {
  try {
    const admin = await User.findOne({ username: req.body.username });
    const validate =
      admin && (await bcrypt.compare(req.body.password, admin.password));

    if (!admin || !validate) {
      throw new Error("Username or password is incorrect.");
    }

    const { password, ...others } = admin._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
