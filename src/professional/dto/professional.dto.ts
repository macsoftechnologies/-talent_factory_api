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
    
}