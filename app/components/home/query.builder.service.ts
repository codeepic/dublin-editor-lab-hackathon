import {Injectable} from '@angular/core';
import {Publication} from "./models/publication.model";

@Injectable()
export class QueryBuilderService{
    query: Query = new Query();

    storePublication(pub: Publication){
        this.query.publication = pub;
        console.log('this query', this.query);
    }

    storeCompetitors(comps: Publication[]){
        this.query.competitors = comps;
        console.log('this query', this.query);
    }
}

class Query{
    publication: Publication;
    competitors: Publication[];
    // constructor(
    //     public publication: Publication = new Publication(),
    //     public competitors: Publication[] = [new Publication()]
    // ){}
}