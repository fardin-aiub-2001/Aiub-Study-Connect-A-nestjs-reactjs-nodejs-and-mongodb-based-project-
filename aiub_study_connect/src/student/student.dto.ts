
import { Type } from 'class-transformer';
import { IsNotEmpty, IsEmail, Matches, MinLength, Min, IsOptional} from 'class-validator';

export class CreateStudentDto {

    @IsNotEmpty()
    name!: string;

    @IsNotEmpty()
    @IsEmail()
    @Matches(/^[0-9]{2}-[0-9]{5}-[1-3]{1}@aiub\.edu$/,{"message": "Please provide your valid institutional email address."})
    email!: string;

    @IsNotEmpty()
    @MinLength(6, {"message": "Password must be at least 6 characters long."})
    @Matches(/^(?=.*[A-Z]).*$/, { "message": "Password must contain at least one uppercase letter." })
    password!: string;

    @IsNotEmpty()
    @Matches(/^(male|female|other)$/, { "message": "Gender must be either 'male' , 'female' or 'other'." })
    gender!: string;

    @IsNotEmpty()
    @MinLength(11, {"message": "Phone number must be at least 11 digits long."})
    @Matches(/^[0]{1}[0-9]{10}$/, { "message": "Phone number must contain 11 digits and start with 0." })
    phone!: string;

    @IsOptional()
    @Min(0, {"message": "Age must be a positive number."})
    @Type(() => Number)
    age?: number;
}

// • Email Address field is required, and the input must contain aiub.edu
// domain
// • Password field must be at least 6 character long and it must contain one 
// Uppercase character 
// • Validate gender given male or female.
// • Phone Number field must contain only numbers

