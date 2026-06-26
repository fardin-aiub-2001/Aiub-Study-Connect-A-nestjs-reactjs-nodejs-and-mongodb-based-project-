import { Controller, Get, Param, Query } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(
        private readonly adminService: AdminService) {}
    @Get()
    getAdmin(): string {
        return this.adminService.getAdmin();
    }
    @Get('allusers')
    getAllUsers(): object {
        return this.adminService.getAllUsers();
    }
    @Get('getuserbyid/:id')
    getUserByID(@Param('id') id:number): object {
        return this.adminService.getUserByID(id);
    }
    @Get('getuserbyid/:id/getbyrole/:role')
    getUserByIDAndRole(@Param('id') id:number,@Param('role') role:string
    ): object {
        return this.adminService.getUserByIDAndRole(id,role);
    }
    @Get('getuser')
    getUser(
        @Query('id') id:number): object {
        return this.adminService.getUser(id);
    }
    @Get('getuserbyidandrole')
    getUserByIDAndRoleQuery( @Query('id') id:number, @Query('role') role:string): object {
        return this.adminService.getUserByIDAndRoleQuery(id,role);
    }

}