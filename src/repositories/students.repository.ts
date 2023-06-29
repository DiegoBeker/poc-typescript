import { Student } from "../protocols/index";
import { db } from "../database/database.connection";

export async function createStudent(student: Student){
    const {name, email, register, graduation, age, isActive} = student;
    await db.query(`
        INSERT INTO students 
            (name, email, register, graduation, age, "isActive")
        VALUES
            ($1, $2, $3, $4, $5, $6)
    `, [name, email, register, graduation, age, isActive]);
}