import { Body, Controller, Delete, Get, Param, Post, Put, ConflictException, NotFoundException,HttpCode } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
   constructor(private TaskService: TaskService) { }
   
   @Get()
   async findAll() {
      const tasks = await this.TaskService.findAll();
      if(tasks.length === 0) throw new NotFoundException('No tasks found');
      return tasks
   }

   @Get(':id')
   async findOne(id: any) {
      const task = await this.TaskService.findOne(id);
      if(task === null)throw new NotFoundException('Task not found');
      return task;
   }

   @Post()
   async create(@Body() body: any) {
      try {
         return await this.TaskService.create(body);
      }
      catch(error) {
         if (error.code === 11000) throw new ConflictException('Task already exists');
         throw error
      }
      
   }

   @Delete(':id')
   @HttpCode(204)
   async delete(@Param() id: string) {
      const tasks = await this.TaskService.findAll();
      if(tasks.length === 0) throw new NotFoundException('No tasks found');
   }

   @Put(':id')
   async update(@Param() id: string, @Body() task : any) {
      const tasks = await this.TaskService.findAll();
      if(tasks.length === 0) throw new NotFoundException('No tasks found');
      return tasks
   }
   
}
