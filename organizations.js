/*const express = require('express');
const router = express.Router();
const organizations = require('../controllers/organizations');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateOrganization} = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Organization = require('../models/organization');

router.route('/')
    .get(catchAsync(organizations.index))
    .post(isLoggedIn, upload.array('image'), /*validateOrganization,*/ /*catchAsync(organizations.createOrganization))


/*router.get('/new', isLoggedIn, organizations.renderNewForm)

router.route('/:id')
    .get(catchAsync(organizations.showOrganization))
    .put(isLoggedIn, isAuthor, upload.array('image') /*validateOrganization*//*, catchAsync(organizations.updateOrganization))
    .delete(isLoggedIn, isAuthor, catchAsync(organizations.deleteOrganization));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(organizations.renderEditForm))





module.exports = router;