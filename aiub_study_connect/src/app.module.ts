import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { FacultyModule } from './faculty/faculty.module';
import { AdminModule } from './admin/admin.module';
import { AdministrativeModule } from './administrative/administrative.module';

@Module({
  imports: [StudentModule, FacultyModule, AdminModule, AdministrativeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
