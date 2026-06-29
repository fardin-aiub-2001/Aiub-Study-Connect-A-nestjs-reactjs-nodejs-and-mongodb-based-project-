import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './student.dto';

@Injectable()
export class StudentService {
    getstudent() {
        return "All students data";
    }

    getStudentById(id: number):string{
        return `Student data for ID: ${id}`;
    }

    getStudentByIdAndName(id:number, name:string):object{
        return {"id": id, "name": name};
    }

    createStudent(createStudentDto: CreateStudentDto): object {
        return { message: `Student created with name: ${createStudentDto.name}`, student: createStudentDto};
    }

    updateStudent(email: string, updateStudentDto: CreateStudentDto): object {
        return { message: `Student with email ${email} updated successfully.`, updatedStudent: updateStudentDto };
    }
}
