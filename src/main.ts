import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
  .setTitle('talent-factory')
  .setDescription('talent-factory')
  //.addTag('Admin')
  .setVersion('1.0')
  .build();
 const doc = SwaggerModule.createDocument(app, swaggerConfig);
 SwaggerModule.setup('api/v1', app, doc);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());
  app.use(express.static(join(process.cwd(), './files/')));
  //app.setGlobalPrefix('/api')
  app.use(bodyParser.json({ limit: '100mb' }));
  app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
  app.enableCors();
  await app.listen(process.env.PORT ||3003);

}
bootstrap();
