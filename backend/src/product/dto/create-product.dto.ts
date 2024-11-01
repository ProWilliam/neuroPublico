import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  product: string;

  @IsNumber()
  @IsNotEmpty()
  costPerUnit: number;  // Cambia a tipo number si es necesario

  @IsNumber()
  @IsNotEmpty()
  desiredMonthlyProfit: number;  // Cambia a tipo number si es necesario

  @IsNumber()
  @IsNotEmpty()
  pricePerUnit: number;  // Cambia a tipo number si es necesario
}
