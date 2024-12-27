import { IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class CreateMenuDto {
    @IsNotEmpty()
    name: string;
  
    @IsOptional()
    @IsInt()
    parentId?: number;

    @IsOptional()
    @IsInt()
    depth: number;
}

