import { ApiProperty } from "@nestjs/swagger";
import { IsEnum } from "class-validator";
import { PaginationDto } from "src/shared/dto/shared.dto";

enum role {
    'Super-admin'='Super-admin',
    'admin'='admin',
    'employer'='employer',
    'candidate'='candidate'
    
}
enum userstatus {
    'active'='active',
    'suspend'='suspend',
}

export class AdminDto  {
    @ApiProperty()
    userName:string
    @ApiProperty()
    email:string
    @ApiProperty()
    password:string
    @ApiProperty()
    mobileNumber:string
    @ApiProperty()
    @IsEnum(role)
    role:string
   
}

export class userDto extends AdminDto{
    @ApiProperty()
    firstName:string
    @ApiProperty()
    lastName:string
    @ApiProperty()
    userName:string
    @ApiProperty()
    email:string
    @ApiProperty()
    mobileNumber:string
    @ApiProperty()
    password:string
    @ApiProperty()
    @IsEnum(role)
    role:string
}

 
export class loginDto{
    @ApiProperty()
    userName:string
    @ApiProperty()
    email:string
    @ApiProperty()
    password:string
    @ApiProperty()
    mobileNumber:string
    @ApiProperty()
    @IsEnum(role)
    role:string
    
}

export class GetUserDto extends PaginationDto{
    @ApiProperty()
    status:string
    
}
export class addImageDto{
    @ApiProperty()
    Image:string

}