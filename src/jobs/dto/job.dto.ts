import { ApiProperty } from "@nestjs/swagger";

export class jobDto{
    @ApiProperty()
    title:string
    @ApiProperty()
    description:string
    @ApiProperty()
    salary:string
   
}