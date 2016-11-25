import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
// import {Observable} from "rxjs/Observable";
import {Observable} from "rxjs";

// import './rxjs-operators';
// import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestService{
    private apiKey: string = 'T4hC9wTT7p83C';
    //newswhip api key: T4hC9wTT7p83C ////

    constructor(
        private http: Http
    ){}

    getCategories(): Observable<any>{ //: Observable<any>{
        console.log('fetching');
        // let query = form.value;

        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });

        const body = JSON.stringify({
            "filters": [
                "country_code:us OR country_code:gb and -publisher:youtube.com and headline:rihanna"
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