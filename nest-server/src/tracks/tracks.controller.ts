import { Controller, Get, Param } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { Track } from './track';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}
  @Get()
  async getTracks() {
    this.tracksService.getTracks();
  }

  @Get('trackId')
  async getOneTrack(@Param('trackId') trackId: number): Promise<Track> {
    return this.tracksService.getOneTrack(trackId);
  }
}
