/**
 * Created by Christos on 03/10/2016.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector : 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']

})

export class DashboardComponent implements OnInit{

    heroes: Hero[] = [];

    constructor(  private router: Router,
                  private heroservice: HeroService) {}
    ngOnInit(): void {
        this.heroservice.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}