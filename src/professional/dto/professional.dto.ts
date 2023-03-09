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
}
   
