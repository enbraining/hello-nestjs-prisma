import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('board')
  async createBoard(
    @Body() boardData: { title?: string; description: string },
  ): Promise<any> {
    this.prismaService.board.create({
      data: {
        title: boardData?.title,
        description: boardData.description,
      },
    });
  }

  @Get('board')
  async listBoard(): Promise<any> {
    return this.prismaService.board.findMany();
  }
}
