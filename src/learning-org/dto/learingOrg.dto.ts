import { ApiProperty } from "@nestjs/swagger"

export class learningOrgDto{
    @ApiProperty()
    name:string
    @ApiProperty()
    email:string
    @ApiProperty()
    description:string
    @ApiProperty()
    Location:string
    @ApiProperty()
    phoneNumber:string
    @ApiProperty()
    memebers:string
    @ApiProperty()
    courses:string
    @ApiProperty()
    resource:string
    @ApiProperty()
    learningGoals:string
    @ApiProperty()
    assesment:string
    @ApiProperty()
    password:string
}