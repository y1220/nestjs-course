import { Controller, Get } from "@nestjs/common";
import { Course } from "../../../../shared/course"; // Import the 'Course' type from the appropriate module
import { findAllCourses } from "../../../db-data";

@Controller()
export class CoursesController {

    // @Get('/api/hello-world')
    // async helloWorld(): Promise<string>{ // return type is a promise of string
    //     return "Hello World";
    // }

    @Get('/api/courses')
    async findAllCourses(): Promise<Course[]> {
        // Return an array of courses (db-data)
        return findAllCourses() as Course[];

    }

}
