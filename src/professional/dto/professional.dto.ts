import { ApiProperty } from "@nestjs/swagger"

export class professionalDto{
    @ApiProperty()
    professionalId:string
    @ApiProperty()
    name:string
    @ApiProperty()
    email:string
    @ApiProperty()
    phNumber:string
    @ApiProperty()
    password:string
   @ApiProperty()
    education:string
    @ApiProperty()
    experience:string
    @ApiProperty()
    skills:string
    @ApiProperty()
    resume:string
    @ApiProperty()
    gender:string
    @ApiProperty()
    firstName:string
    @ApiProperty()
    lastName:string
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
    pinCode:string
    @ApiProperty()
    changePassword:string
    @ApiProperty()
    oldPassword:string
    @ApiProperty()
    newPassword:string

}
   
