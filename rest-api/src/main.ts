import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 1. Create a new Nest application instance
  await app.listen(9000); // 3. Start the application on port 9000
}

bootstrap();
