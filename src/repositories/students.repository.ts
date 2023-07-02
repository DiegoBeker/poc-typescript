import { CreateStudent, Student } from "@/protocols/index";
import { db } from "@/database/database.connection";

export async function createStudent(student: CreateStudent) {
    const { name, email, register, graduation, age, isActive } = student;
    const query = `
        INSERT INTO students
            (name, email, register, graduation, age, "isActive")
        VALUES
            ($1, $2, $3, $4, $5, $6)
    `;
    await db.query(query, [name, email, register, graduation, age, isActive]);
}

export async function findStudents(course: string) {
    let query = `SELECT * FROM students`;
    const queryParams = [];

    if (course) {
        query += ` WHERE "graduation"=$1`;
        queryParams.push(course);
    }

    const students = await db.query<Student>(query, queryParams);

    return students.rows;
}

export async function deleteStudent(id: number) {
    const query = `DELETE FROM students WHERE id=$1`;
    await db.query(query, [id]);
}

export async function update(id: number, student: CreateStudent) {
    const { name, email, register, graduation, age, isActive } = student;
    const query = `
        UPDATE students
        SET
            name=$1, 
            email=$2, 
            register=$3, 
            graduation=$4, 
            age=$5, 
            "isActive"=$6
        WHERE id = $7
    `;
    await db.query(query, [name, email, register, graduation, age, isActive, id]);
}

export async function findStudentByEmail(email: string) {
    const query = `SELECT * FROM students WHERE email=$1`;
    const queryParams = [email];

    const student = await db.query<Student>(query, queryParams);

    return student.rows[0];
}

export async function findStudentById(id: number) {
    const query = `SELECT * FROM students WHERE id=$1`;
    const queryParams = [id];

    const student = await db.query<Student>(query, queryParams);

    return student.rows[0];
}