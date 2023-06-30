import { CreateStudent } from "@/protocols/index";
import * as studentsRepository from "@/repositories/students.repository";
import { ParsedUrlQuery } from "querystring";

export async function createStudent(student: CreateStudent) {
    await studentsRepository.createStudent(student);
}

export async function findStudents(course: string) {
    const students = await studentsRepository.findStudents(course);
    return students;
}

export async function deleteStudent(id: number) {
    await studentsRepository.deleteStudent(id);
}

export async function update(id: number, student: CreateStudent) {
    await studentsRepository.update(id, student);
}