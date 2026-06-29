import { Controller, Post, Body, UsePipes, ValidationPipe, UseInterceptors, Get, Param , Put } from '@nestjs/common';
import { CreateStudentDto } from './student.dto';
import { StudentService } from './student.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MulterError } from 'multer';



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
  @Post('createStudent')
  //pipevalidation is used to validate the data sent by the user.
  @UsePipes(new ValidationPipe())
  //file update
  @UseInterceptors(FileInterceptor('myfile',
  { fileFilter: (req, file, cb) => {
  if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
  cb(null, true);
  else {
  cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
  }
  },
  limits: { fileSize: 3000000 },
  storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
  cb(null,Date.now()+file.originalname)
  },
  })
  }))

  createStudent(@Body() createStudentDto: CreateStudentDto): object {
    return this.studentService.createStudent(createStudentDto);
  }
  //http://localhost:3000/student/createStudent
  //   {
  //     "name": "Fardin",
  //     "email": "23-52154-2@aiub.edu",
  //     "password": "Aiub1234",
  //     "gender": "male",
  //     "phone": "01753489499"
  // }

  @Put('updateStudent/:email')
  @UsePipes(new ValidationPipe())
  updateStudent(
    @Param('email') email: string,
    @Body() updateStudentDto: CreateStudentDto,
  ): object {
    return this.studentService.updateStudent(email, updateStudentDto);
  }
  
}
