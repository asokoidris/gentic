const express = require('express');
const { verifyToken, verifyTokenAndAuthorization,
    verifyTokenAndAdmin } = require('../middleware/authmiddleware');
const router = express.Router();
const UserController = require('../controllers/users')
const UserValidate = require('../validation/user')



// UPDATE USER


router.put('/:id',
    verifyTokenAndAuthorization,
    UserController.updateUser
)

// DELETE USER


router.delete('/:id',
    verifyTokenAndAuthorization,
    UserController.DeleteUser
)


// GET USER

router.get('/find/:id',
    verifyTokenAndAdmin,
    UserController.GetUser
)


// GET ALL USERS

router.get('/',
    verifyTokenAndAdmin,
    UserController.GetAllUsers,
)


// USER STATS
router.get('/stats',
    verifyTokenAndAdmin,
    UserController.UserStats
)




module.exports = router;