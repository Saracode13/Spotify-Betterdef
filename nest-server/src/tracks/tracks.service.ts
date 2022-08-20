import { HttpException, Injectable } from '@nestjs/common';
import { Tracks } from './tracks';
import {find,of} from 'rxjs';

@Injectable()
export class TracksService {
  private tracks = Tracks;
  public async getAllTracks() {
    return this.tracks;
  }
  getOneTrack(id: number) {
    const track = this.tracks.find((track) => track.id === id);  
     if (track) {
      throw new HttpException('Track not found', 404);
    }
    return track;
  }
}
