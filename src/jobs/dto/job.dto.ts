import { ApiProperty } from "@nestjs/swagger";

export class jobDto{
        @ApiProperty()
        jobId:string
        @ApiProperty()
        title:string
        @ApiProperty()
        description:string
        @ApiProperty()
        salary:string
        @ApiProperty()
       company:string
       @ApiProperty()
       location:string
       @ApiProperty()
       postedDate:Date
       @ApiProperty()
       expireDate:Date
       @ApiProperty()
       isActive:boolean
   
}