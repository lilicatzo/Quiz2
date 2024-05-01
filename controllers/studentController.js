const studentModel = require('../models/studentModel');

module.exports = {
    createStudent: async (req, res) => {
        try {
            const { name, address, gender, enrolled_date } = req.body;
            const userId = await studentModel.createStudent(name, address, gender, enrolled_date);
            res.json({ success: true, message: 'User created', userId });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Error creating entry:', error: error.message });
        }
    },
    getStudents: async (req, res) => {
        try {
            const users = await studentModel.getStudents();
            res.json({ success: true, users });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Retrieve all data error:', error: error.message });
        }
    },
    getStudentById: async (req, res) => {
        try {
            const { id } = req.params;
            const users = await studentModel.getStudentById(id);
            res.json({ success: true, users });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Retrieve data from certain id error:', error: error.message });
        }
    },
    updateStudent: async (req, res) => {
        try {
            const { name, address, gender, enrolled_date } = req.body;
            const { id } = req.params;
            await studentModel.updateStudent(id, name, address, gender, enrolled_date);
            res.json({ success: true, message: 'Student data updated!' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
    },
    deleteStudent: async (req, res) => {
        try {
            const { id } = req.params;
            await studentModel.deleteStudent(id);
            res.json({ success: true, message: 'Student data (tuple) deleted!' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }
    }
};
