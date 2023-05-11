import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

import { join } from 'path';

@Controller()
export class AppController {

  @Get()
  get(@Res() res: Response) {
    res.sendFile('index.html', {
      root: join(__dirname, '../../', 'app/out'),
    });
  }
}
