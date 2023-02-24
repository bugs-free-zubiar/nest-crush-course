import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {


    @Get()
    getAllBook(): string
    {
        return "Returning all book."
    }


}
