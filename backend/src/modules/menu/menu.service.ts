import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMenuDto) {
    const { name, parentId } = dto;
    const depth = parentId ? 1 : 0;

    return this.prisma.menu.create({
      data: { name, parentId, depth },
    });
  }

  async findAll() {
    return this.prisma.menu.findMany({ include: { children: true } });
  }

  async findOne(id: number) {
    return await this.prisma.menu.findUnique({ where: { id } });
  }

  async update(id: number, dto: UpdateMenuDto) {
    const menu = await this.prisma.menu.findUnique({ where: { id } });
    if (!menu) throw new NotFoundException('Menu not found.');

    return this.prisma.menu.update({
      where: { id },
      data: { ...dto },
    });
  }

  async remove(id: number) {
    const menu = await this.prisma.menu.findUnique({ where: { id } });
    if (!menu) throw new NotFoundException('Menu not found.');

    return this.prisma.menu.delete({ where: { id } });
  }
}
