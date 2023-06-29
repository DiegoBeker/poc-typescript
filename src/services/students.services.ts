import { Student } from "../protocols/index";
import * as studentsRepository from "../repositories/students.repository";

export async function createStudent(student: Student) {
    await studentsRepository.createStudent(student);
}