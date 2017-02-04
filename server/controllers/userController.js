import db from './../models';

const userController = {};

userController.post = (req, res) => {
  const {
    username,
    password
  } = req.body;

  // Validation pending
  const user = new db.User({
    username,
    password
  });

  console.log('saving User');
  user.save()
    .then((newUser) => {
      console.log('added user');
      res.status(200).json({
        success: true,
        data: newUser
      })
    })
    .catch((err) => {
      res.status(500).json({
        message: err
      })
    });
}

export default userController;