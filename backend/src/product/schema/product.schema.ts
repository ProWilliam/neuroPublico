import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})

export class Producto extends Document {
  @Prop({ required: true })
  product: string;

  @Prop({ required: true })
  costPerUnit: number; 

  @Prop({ required: true })
  desiredMonthlyProfit: number;  

  @Prop({ required: true })
  pricePerUnit: number;  
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
