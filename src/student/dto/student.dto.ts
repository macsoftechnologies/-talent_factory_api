import { ApiProperty } from "@nestjs/swagger";
 
export class studentDto{
    @ApiProperty()
    firstName:string
    @ApiProperty()
    lastName:string
    @ApiProperty()
    studentId:string
    @ApiProperty()
    name:string
    @ApiProperty()
    email:string
    @ApiProperty()
    phNumber:string
    @ApiProperty()
    password:string
    @ApiProperty()
    resume:string
    @ApiProperty()
    address:string
    @ApiProperty()
    education:string
    @ApiProperty()
    gender:string
    @ApiProperty()
    
    @ApiProperty()
    addressLine1:string
    @ApiProperty()
    addressLine2:string
    @ApiProperty()
    city:string
    @ApiProperty()
    state:string
    @ApiProperty()
    country:string
    @ApiProperty()
    pincode:string
    @ApiProperty()
    oldPassword:string
    @ApiProperty()
    newPassword:string
    @ApiProperty()
    changePassword:string
    
   

}

