import { Injectable } from '@nestjs/common';

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
}
