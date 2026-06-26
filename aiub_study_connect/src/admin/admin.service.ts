import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    getAdmin(): string {
        return "Welcome Admin";
    }
    getAllUsers(): object {
        return {totalUsers: 500,students: 400,faculty: 50,administrative: 50};
    }
    getUserByID(id:number): object {
        return {id:id,name:"Moumita",role:"Student"};
    }
    getUserByIDAndRole(id:number, role:string): object {
        return {id:id,role:role
        };
    }
    getUser(id:number): object {
        return {id:id,status:"Found"};
    }
    getUserByIDAndRoleQuery(id:number, role:string): object {
        return {id:id,role:role,status:"Found"};
    }

}