import { ApiProperty } from "@nestjs/swagger"

export class skillsDto{
    @ApiProperty()
    skillsId:string
    @ApiProperty()
    skillName:string
    
}