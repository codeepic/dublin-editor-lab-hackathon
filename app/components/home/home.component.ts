import {Component} from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <div>
            <h1>Home compo</h1>
            <h2>{{wel}}</h2>
        </div>
    `
})
export class HomeComponent{
    wel = 'see me ?';
}