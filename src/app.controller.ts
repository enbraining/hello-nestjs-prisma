import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('signup')
  async signup(
    @Body() userData: { name?: string; email: string },
  ): Promise<any> {
    return this.prismaService.user.create({
      data: {
        name: userData?.name,
        email: userData.email,
      },
    });
  }
}
