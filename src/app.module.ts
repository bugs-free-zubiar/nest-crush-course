import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { BooksController } from './controllers/books/books.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {}
