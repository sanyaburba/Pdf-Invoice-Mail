import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const PORT = process.env.PORT || 8888
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Auto-generation PDF invoice and sending it to email')
        .setDescription('REST API Documentation')
        .setVersion('1.0.0')
        .addTag('Created by Ilya Aleksandrov')
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('/api/docs', app, document)

    await app.listen(PORT, () => console.log('Server started on PORT: ' + PORT));
}

start().catch(e => new Error('Server error: ' + e.message));
