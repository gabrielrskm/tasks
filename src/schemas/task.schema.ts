import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Airbnd } from "./airbnd.interface";

@Schema({ timestamps : true })
export class Task implements Airbnd {
   @Prop({
      required: true,
      unique: true,
      trim: true
   })
   title: string;

   @Prop({
      trim: true
   })
   description: string;

   @Prop({ default: false})
   done: boolean;

   @Prop()
   schema: string;


}

export const taskSchema = SchemaFactory.createForClass(Task);