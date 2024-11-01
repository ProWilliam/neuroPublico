import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto,ProductoSchema } from './schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Producto.name,
      schema: ProductoSchema
    }])
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
