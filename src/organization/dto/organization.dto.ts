import { ApiProperty } from "@nestjs/swagger"

export class organizationDto{
    @ApiProperty()
    name:string
    @ApiProperty()
    email:string
    @ApiProperty()
    phNumber:string
    @ApiProperty()
    password:string
    @ApiProperty()
    organizationId:string
    @ApiProperty()
    description:string
    @ApiProperty()
    location:string
    

}