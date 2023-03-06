import { ApiProperty } from "@nestjs/swagger";

export class studentDto{
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

}

