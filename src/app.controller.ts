import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('board')
  async createBoard(
    @Body() createBoardDto: { title: string; description: string },
  ): Promise<any> {
    await this.prismaService.board.create({
      data: {
        title: createBoardDto?.title,
        description: createBoardDto.description,
      },
    });
  }

  @Get('board')
  async listBoard(): Promise<any> {
    return await this.prismaService.board.findMany();
  }

  @Patch('board')
  async updateBoard(
    @Body() updateBoardDto: { id: any; title: string; description: string },
  ): Promise<any> {
    await this.prismaService.board.update({
      where: {
        id: updateBoardDto.id,
      },
      data: {
        title: updateBoardDto.title,
        description: updateBoardDto.description,
      },
    });
  }

  @Delete('board')
  async deleteBoard(@Body() id: any): Promise<any> {
    await this.prismaService.board.delete({
      where: {
        id: id,
      },
    });
  }
}
