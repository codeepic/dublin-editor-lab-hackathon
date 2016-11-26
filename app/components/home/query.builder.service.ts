import {Injectable} from '@angular/core';
import {Publication} from "./models/publication.model";

@Injectable()
export class QueryBuilderService{
    query: Query = new Query();

    getQueryObj(): Query{
        return this.query;
    }

    storePublication(pub: Publication){
        this.query.publication = pub;
        console.log('this query', this.query);
    }

    storeCompetitors(comps: Publication[]){
        this.query.competitors = comps;
        console.log('this query', this.query);
    }

    storeSportType(types: string[]){
        this.query.sportTypes= types;
        console.log('this query', this.query);
    }

    storeTeamNames(names: string[]){
        this.query.teamNames = names;
        console.log('this query', this.query);
    }
}

export class Query{
    publication: Publication;
    competitors: Publication[];
    sportTypes: string[];
    teamNames: string[];

}