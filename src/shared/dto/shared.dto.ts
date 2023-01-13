import { ApiProperty } from "@nestjs/swagger";
import {  IsOptional, IsString } from "class-validator";

const sortOrder = {
    ASC: 'ASC',
    DESC: 'DESC',
  };
 
  export class PaginationDto {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    start: string;
  
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    limit: string;
  
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    sortBy: string;
  
    @ApiProperty({ required: false, enum: sortOrder })
    @IsString()
    @IsOptional()
    sortOrder: string;
  }

  export class PaginationParamsDto {
    start: number;
    limit: number;
    sortBy: string;
    sortOrder: string;
  }
  
  export class StatusParamsDto {
    status: string;
  }

  export class FetchParamsDto {
    paginationObject: PaginationParamsDto;
    findObject: any;
  }
  
  export class FetchStatusParamsDto {
    StatusParamsDto: StatusParamsDto;
    findObject: any;
  }
  
 