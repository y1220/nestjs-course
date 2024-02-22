import { Controller, Get } from "@nestjs/common";

@Controller()
export class CoursesController {

    @Get('/api/hello-world')
    async helloWorld(): Promise<string>{ // return type is a promise of string
        return "Hello World";
    }
}
