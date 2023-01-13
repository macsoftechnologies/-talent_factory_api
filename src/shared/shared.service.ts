import { Injectable } from '@nestjs/common';
var fs=require('fs')
import moment=require('moment')
import { FetchParamsDto } from './dto/shared.dto';


const paginationObject={
     start:0,
     limit:1000,
     sortBy:'createdAt',
     sortOrder:'DESC'
}
@Injectable()
export class SharedService {

  async prepareParams(params: any): Promise<any> {
    // params = Object.assign(params, paginationObject);
    const config: FetchParamsDto = {
      paginationObject: {
        start: params.start ? parseInt(params.start) : paginationObject.start,
        limit: params.limit ? parseInt(params.limit) : paginationObject.limit,
        sortBy: params.sortBy ? params.sortBy : paginationObject.sortBy,
        sortOrder: params.sortOrder
          ? params.sortOrder
          : paginationObject.sortOrder,
        
      },
      findObject: params,
    };
   
    delete config.findObject.start;
    delete config.findObject.limit;
    delete config.findObject.sortBy;
    delete config.findObject.sortOrder;

    return config;
  }

  
  async saveFile(file: any): Promise<any> {
    try {
      let fileName = file.originalname;
      fileName = fileName.replace(/\//g, '-');
      fileName = fileName.replace(/ /g, '_');
      fileName = fileName.replace(/[()]/g, '');
      
      const filePath =   moment() + '-' + fileName;
      
      console.log(filePath);
      await fs.writeFileSync('./files/' + filePath, file.buffer, 'buffer');

      return filePath;
    } catch (err) {
      // An error occurred
      console.error(err);
    }
  }

      
}
