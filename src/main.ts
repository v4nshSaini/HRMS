import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ CORS CONFIG (IMPORTANT)
  app.enableCors({
    origin: 'http://localhost:3000', // 👈 your frontend URL
    credentials: true,
  });

  await app.listen(5000);
}
bootstrap();