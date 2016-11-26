import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class MatchesService{

    constructor(
        private http: Http
    ){}

    getMatches(): Observable<any>{
        const premierLeagueId = 2;

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        //headers.append('x-crowdscores-api-key', '1b15ab1e10914b3c9fae87c11320ac19');

      const apiKey = '1b15ab1e10914b3c9fae87c11320ac19';

        return this.http.get(`https://api.crowdscores.com/v1/matches?api_key=1b15ab1e10914b3c9fae87c11320ac19&competition_id=${premierLeagueId}&from=2016-11-27T00:00:00-03:00&to=2016-11-27T23:59:59-04:00`, { headers})
        // return this.http.get(`https://api.crowdscores.com/v1/matches?competition_id=${premierLeagueId}&from=2016-11-26T00:00:00-03:00&to=2016-11-26T23:59:59-04:00`, { headers})
          .map(response => response.json())
          .catch((err: any, caught: Observable<any>) => {
            console.error(err);
            return Observable.throw(err.message);
          });
    }

}
