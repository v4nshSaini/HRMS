/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ===== CORS =====
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://hr-frontenddd.vercel.app',
      //'http://localhost:5000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // ===== Validation =====
  app.useGlobalPipes(new ValidationPipe());

  // ===== Swagger =====
  const config = new DocumentBuilder()
    .setTitle('HR Management API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  // ===== Port =====
  const port = process.env.PORT || 5000;

  await app.listen(port);

  console.log(`✅ Application is running on port ${port}`);
}

bootstrap();*/
/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Global API Prefix
  app.setGlobalPrefix('api');

  // ✅ CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://141.94.79.108:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // ✅ Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // ✅ Swagger
  const config = new DocumentBuilder()
    .setTitle('HR Management API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  // ✅ Port
  const port = process.env.PORT || 5000;

  await app.listen(port);

  console.log(`✅ Server running on port ${port}`);
  console.log(`✅ Swagger Docs: http://localhost:${port}/api/docs`);
}

bootstrap();*/

import 'dotenv/config';
 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  // ✅ Global API Prefix
  app.setGlobalPrefix('api');
 
  // ✅ CORS
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://141.94.79.108:3000',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
 
  // ✅ Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
 
  // ✅ Swagger
  const config = new DocumentBuilder()
    .setTitle('HR Management API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
 
  const document = SwaggerModule.createDocument(app, config);
 
  SwaggerModule.setup('api/docs', app, document);
 
  // ✅ Port
  const port = process.env.PORT || 5000;
 
  await app.listen(port);
 
  console.log(`✅ Server running on port ${port}`);
  console.log(`✅ Swagger Docs: http://localhost:${port}/api/docs`);
}
 
bootstrap();
