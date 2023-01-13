import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';
import { AppModule } from './app.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: [
  //     'http://localhost:4200',
    
  //   ],
  // });
  app.enableCors({ origin: '*' }); 

  app.use(express.static(join(process.cwd(), './public/')));

  const options = new DocumentBuilder()
    .setTitle('talent-factory')
    .setDescription('talent-factory')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/v1', app, document);
  app.useGlobalPipes(new ValidationPipe());
  console.log('process.env',process.env)
  const PORT = 3003;
  await app.listen(PORT);

  console.log(
    `App started at ${new Date()} on port ${PORT} in ${
      process.env.APP_ENV
    } Environment`,
  );
}
bootstrap(); 
