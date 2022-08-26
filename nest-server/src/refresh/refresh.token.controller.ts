import { Controller, Post, Req, Res } from '@nestjs/common';
import { RefreshService } from './refresh.token.service';

@Controller('refresh')
export class RefreshController {
  constructor(private readonly refreshService: RefreshService) {}

  @Post()
  async postLogin(@Req() req: any, @Res() res: any): Promise<any> {
    const refreshToken = req.body.refreshToken;
    return this.refreshService
      .postRefresh(refreshToken)
      .then((data) => {
        res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in,
        });
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
  }
}
