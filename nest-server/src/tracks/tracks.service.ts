import { Injectable } from '@nestjs/common';
import { Tracks } from './tracks';
import { HttpException } from '@nestjs/common';
import SpotifyWebApi from 'spotify-web-api-node';
@Injectable()
export class TracksService {
  private spotifyApi = new SpotifyWebApi();
  public async getAllTracks() {
    return this.spotifyApi.getTracks;
  }

  getOneTrack(id: number) {
    const track = this.tracks.find((track) => track.id === id);
    if (track) {
      throw new HttpException('Track not found', 404);
    }
    return track;
  }
}
/*getOneTrack(id: number): Track {
    const detail: Track = this.tracks[id];

    if (detail) {
      return detail;
    }

    throw new Error('No details found');
}*/
