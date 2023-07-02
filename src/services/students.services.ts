import { CreateStudent } from "@/protocols/index";
import * as studentsRepository from "@/repositories/students.repository";
import { conflictError } from "../errors/conflict.error";
import { notFoundError } from "../errors/notFound.error";

export async function createStudent(student: CreateStudent) {
    const emailExists = await studentsRepository.findStudentByEmail(student.email);
    if (emailExists) throw conflictError('E-mail already registered.');
    await studentsRepository.createStudent(student);
}

export async function findStudents(course: string) {
    const students = await studentsRepository.findStudents(course);
    return students;
}

export async function deleteStudent(id: number) {
    const studentExists = await studentsRepository.findStudentById(id);
    if (!studentExists) throw notFoundError();
    await studentsRepository.deleteStudent(id);
}

export async function update(id: number, student: CreateStudent) {
    await studentsRepository.update(id, student);
}

export async function findStudentById(id: number) {
    const student = await studentsRepository.findStudentById(id);
    if(!student) throw notFoundError();
    return student;
}