import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {MatchesComponent} from "../matches/matches.component";
import {MatchDetailsComponent} from "../match-details/match-details.component";

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'matches', component: MatchesComponent},
    { path: 'match-details', component: MatchDetailsComponent},
    // { path: 'dashboard/:id', component: DashboardComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } //was { path: '**', redirectTo: '/home', pathMatch: 'full' }
    //{ path: 'facebook-pages-keywords', component: FacebookPagesKeywordsComponent }
];

export const routing = RouterModule.forRoot(routes, {useHash: true});