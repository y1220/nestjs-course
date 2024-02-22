import { Module } from "@nestjs/common";
import { CoursesModule } from "./courses/courses.module"; // Import the missing CoursesModule (BE)


@Module({   // 2. Decorate the AppModule class with the @Module decorator
    imports: [
        CoursesModule,
    ],
    })

export class AppModule {
}
