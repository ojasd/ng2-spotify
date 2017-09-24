import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SpotifyService {
    constructor(private http: Http) { }

    getStatus(): Observable<any> {
        return this.http
            .get(`https://api.spotify.com/v1/browse/new-releases?country=US&offset=5&limit=10`)
            .map(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error || 'Server Error');
    }
}
