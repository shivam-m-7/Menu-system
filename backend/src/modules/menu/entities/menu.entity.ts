import { ApiProperty } from '@nestjs/swagger';

export class Menu {
  @ApiProperty({ description: 'Unique identifier for the menu', example: 1 })
  id: number;

  @ApiProperty({ description: 'Unique UUID for the menu', example: '550e8400-e29b-41d4-a716-446655440000' })
  uuid: string;

  @ApiProperty({ description: 'Name of the menu', example: 'Main Menu' })
  name: string;

  @ApiProperty({ description: 'Depth level of the menu', example: 0 })
  depth: number;

  @ApiProperty({
    description: 'Parent menu ID (null for root menus)',
    example: null,
    nullable: true,
  })
  parentId: number | null;

  @ApiProperty({
    description: 'Timestamp when the menu was created',
    example: '2024-12-27T12:34:56.789Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Timestamp when the menu was last updated',
    example: '2024-12-28T12:34:56.789Z',
  })
  updatedAt: Date;

  @ApiProperty({
    description: 'Child menus (empty array if no children)',
    type: [Menu],
    nullable: true,
    example: [],
  })
  children?: Menu[];
}
