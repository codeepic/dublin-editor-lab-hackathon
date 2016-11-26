import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
// import {Observable} from "rxjs/Observable";
import {Observable} from "rxjs";
import {Query, QueryBuilderService} from "../home/query.builder.service";
import {Publication} from "../home/models/publication.model";

// import './rxjs-operators';
// import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestService{
    private apiKey: string = 'T4hC9wTT7p83C';

    constructor(
        private http: Http,
        private queryBuilderService: QueryBuilderService
    ){}

    buildFilters(): string{
        const queryObj: Query = this.queryBuilderService.getQueryObj();

        let filter: string = queryObj.publication.domain;

        queryObj.competitors.forEach((comp: Publication) => {
          filter += ` and ${comp.domain}`;
        });

        filter += ' and '

        let teamNames = queryObj.teamNames.map(tn => `headline:${tn}`);

        filter += teamNames.join(' or ');

        // queryObj.teamNames.forEach((tN: string) => {
        //   filter += ` and headline:${tN}`;
        // });

        console.log('filter: ', filter);
        return filter;
    }

    //get the top trending stories
    getMatchDetails(): Observable<any>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        const body = JSON.stringify({
          "filters": [
                // "country_code:us OR country_code:gb and -publisher:youtube.com and headline:rihanna"
                //"publisher:youtube.com and headline:rihanna"
              this.buildFilters()
            ],
            "language": "en",
            "video_only": false,
            "sort_by": "nw_max_score", //fb_total, twitter, linkedin, pinterest {{concatenate with}} count, min, max, avg, sum, sum_of_squares, variance, std_dev
            "find_related": false,
            "size": 5,
        });

        return this.http.post('https://api.newswhip.com/v1/articles?key=T4hC9wTT7p83C', '', { headers, body })
          .map(response => response.json())
          .catch((err: any, caught: Observable<any>) => {
            console.error(err);
            return Observable.throw(err.message);
          });
    }

    /*
    * $client = new Client();
     $response = $client->post('https://api.newswhip.com/v1/articles?key=YOUR_API_KEY', [
     'headers' => ['Content-Type' => 'application/json'],
     'body' => '{
     "filters": [
     "(country_code:us OR country_code:gb) AND -publisher:youtube.com AND headline:rihanna"
     ],
     "language": "en",
     "video_only":false,
     "sort_by": "nw_max_score",
     "find_related": false,
     "size": 1
     }']);
     echo $response->getBody();
     ?>
    * */

    getCategories(): Observable<any>{ //: Observable<any>{
        console.log('fetching');
        // let query = form.value;

        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

        const body = JSON.stringify({
            "filters": [
                "publisher:youtube.com and headline:rihanna"
                // "country_code:us OR country_code:gb and -publisher:youtube.com and headline:rihanna"
            ],
            "language": "en",
            "video_only": false,
            "sort_by": "nw_max_score", //fb_total, twitter, linkedin, pinterest {{concatenate with}} count, min, max, avg, sum, sum_of_squares, variance, std_dev
            "find_related": false,
            "size": 5,
            // "from": 12345,
            // "to": 12346,
            // "default_field": "something",
            // "content_type": "something"
        });

        return this.http.post('https://api.newswhip.com/v1/articles?key=T4hC9wTT7p83C', '', { headers, body })
            .map(response => response.json())
            //.catch(this.handleError);
            .catch((err: any, caught: Observable<any>) => {
                console.error(err);
                return Observable.throw(err.message);
            });
    }
//
    // handleError(error: any, caught: Observable<any>){
    //     let errorMessage = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.warn('request error:', errorMessage, 'error caught: ', caught);
    //
    //     //return error;
    //     return Observable.throw(errorMessage);
    // }
}