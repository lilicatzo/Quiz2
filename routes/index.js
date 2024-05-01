const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/create', studentController.createStudent);
router.get('/read', studentController.getStudents);
router.get('/read/:id', studentController.getStudentById);
router.put('/update/:id', studentController.updateStudent);
router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;
