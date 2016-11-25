import { Routes, RouterModule } from '@angular/router';
// import { DomainBenchmarkComponent } from '../domain-benchmark/domain-benchmark.component';
// import { FacebookPageBenchmarkComponent } from '../facebook-page-benchmark/facebook-page-benchmark.component';
// import {DashboardComponent} from "../dashboard/dashboard.component";
// import {DomainKeywordsComponent} from "../domain-keywords/domain-keywords.component";
import {HomeComponent} from "../home/home.component";

export const routes: Routes = [
    { path: '', component: HomeComponent},
    // { path: 'dashboard/:id', component: DashboardComponent },
    // { path: 'facebook-page-benchmark/:id', component: FacebookPageBenchmarkComponent },
    // { path: 'domain-benchmark/:id', component: DomainBenchmarkComponent },
    // { path: 'syndication/:id', component: SyndicationBenchmarkComponent },
    // { path: 'domain-keywords/:id', component: DomainKeywordsComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } //was { path: '**', redirectTo: '/home', pathMatch: 'full' }
    //{ path: 'facebook-pages-keywords', component: FacebookPagesKeywordsComponent }
];

export const routing = RouterModule.forRoot(routes, {useHash: true});