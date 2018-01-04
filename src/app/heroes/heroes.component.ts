import { Component, OnInit } from '@angular/core'; 
// Anguların core component class hansı ki template-in idarəsi üçün lazımdır
// OnInit anguların öz constructorudur səhifə yüklənən zaman angular bu methodları avtomatik olaraq xoda salır.

import { Hero } from '../hero'; 
// Model dediyimiz vəzifəni yerinə yetirir
// Hər table ilə işləyən Model və Model ilə işləyən service-lər ayrıdır və bunlar öz aralarında qanunauyğunluq təşkil edir
// Burda Model vəzifəsi görən Hero data alış-verişində olacaq table və onun sütunlarının data tipləri nədirsə təyin olunur
// Təyin olunan data tiplərinə görə service-lər yazılan zaman bu tiplər əsasında baza ilə HTTP üzərində məlumat üçün istəklər göndərilir.

import { HeroService } from '../hero.service';
// HeroService vəzifəsi Hero Modelində təyin olunmuş qanuna uyğunluqlar əsasında fake mock data vəya in-memory-service dəki
// (ardı) dataları modeldə təyin olunmuş tiplər əsasında methodlar vasitəsi CRUD əməliyyatları edir və dataları manupulyasiya edir


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
