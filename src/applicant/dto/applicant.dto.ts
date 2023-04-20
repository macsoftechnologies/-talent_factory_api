import { ApiProperty } from "@nestjs/swagger"

export class applicantDto{
    @ApiProperty()
    applicantId:string
    @ApiProperty()
    name:string
    @ApiProperty()
    email:string
    @ApiProperty()
    phoneNumber:string
    @ApiProperty()
    jobId:string
  
}