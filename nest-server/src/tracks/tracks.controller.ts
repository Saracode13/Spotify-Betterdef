import { Controller, Get, Param } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { Track } from './track';

@Controller('tracks')
export class TracksController {
  constructor(private tracksService: TracksService) {}
  @Get()
  async getAllTracks() {
    this.tracksService.getAllTracks();
  }

  @Get(':id')
  async getOneTrack(@Param('id') id: number): Promise<Track> {
    return this.tracksService.getOneTrack(id);
  }
}
