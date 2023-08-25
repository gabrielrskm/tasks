import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TaskModule,
    MongooseModule.forRoot('mongodb+srv://gaby:gabrielleon@cluster0.3chz7.mongodb.net/taskdb?retryWrites=true&w=majority')
  ],
})
export class AppModule {}
