const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'university'
};

const db = mysql.createPool(dbConfig);

async function testDatabaseConnection() {
    try {
        const pool = mysql.createPool(dbConfig);
        const connection = await pool.getConnection();
        console.log('Successfully connected to the database.');
        connection.release();
        return pool;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}
testDatabaseConnection();

module.exports = {
    createStudent: async (name, address, gender, enrolled_date) => {
        try {
            const [result] = await db.execute('INSERT INTO students (name, address, gender, enrolled_date) VALUES (?, ?, ?, ?)', [name, address, gender, enrolled_date]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating student: ' + error.message);
        }
    },
    getStudents: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM students');
            return rows;
        } catch (error) {
            throw new Error('Error retrieving students: ' + error.message);
        }
    },
    getStudentById: async (id) => {
        try {
            const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
            return rows;
        } catch (error) {
            throw new Error('Error retrieving student: ' + error.message);
        }
    },
    updateStudent: async (id, name, address, gender, enrolled_date) => {
        try {
            await db.execute('UPDATE students SET name = ?, address = ?, gender = ?, enrolled_date = ? WHERE id = ?', [name, address, gender, enrolled_date, id]);
        } catch (error) {
            throw new Error('Error updating student: ' + error.message);
        }
    },
    deleteStudent: async (id) => {
        try {
            await db.execute('DELETE FROM students WHERE id = ?', [id]);
        } catch (error) {
            throw new Error('Error deleting student: ' + error.message);
        }
    }
};
