import { Controller, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  //to check if someone push iss it vanishes or not.
  @Get()
  getStudent(): string {
    return this.studentService.getstudent();
  }
  //http://localhost:3000/student

  @Get('getstudentbyid/:id')
  getStudentById(@Param('id') id: number): string {
    return this.studentService.getStudentById(id);
  }
  //http://localhost:3000/student/getstudentbyid/1
  //string means the method must return a string.

  @Get('getstudentbyid/:id/getstudentbyname/:name')
  getStudentByIdAndName(@Param('id') id: number, @Param('name') name: string): object {
    return this.studentService.getStudentByIdAndName(id, name);
  }
  //http://localhost:3000/student/getstudentbyid/1/getstudentbyname/farhan
  //object means the method must return an object (key–value pairs).
  //return structured data (JSON).
  //The @Param() decorator is used to extract the parameters from the URL and pass them to the method.
  //The @Get() decorator is used to define the route for the method.
  //The @Controller() decorator is used to define the controller for the route.
  //The StudentController class is responsible for handling the HTTP requests and responses for the student resource.
  
}
