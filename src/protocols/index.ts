export type Student = {
    id: number,
    name: string,
    email:string,
    register: string,
    graduation: string,
    age: number,
    isActive: boolean,
};

export type CreateStudent = Omit<Student, "id ">;