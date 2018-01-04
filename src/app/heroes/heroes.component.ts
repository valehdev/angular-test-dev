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
  selector: 'app-heroes', // app-component`ə verilən tag
  templateUrl: './heroes.component.html', // componentin olan fiziki faylın adı
  styleUrls: ['./heroes.component.css'] // componentə aid olan private olan css fayl
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]; // public property Hero modeline bağlanmış

  constructor(private heroService: HeroService) { }
  // Hero Service app işə düşən kimi private şəkildə instance olur
  // (ardı) buda bütün methodlarda service-lərə rahat access əldə etmək olur

  ngOnInit() {
    this.getHeroes(); // app işə başlayan kimi method avtomatik çağırılır
  }

  /** getHeroes method bazadakı bütün heroları çəkmək üçündür */
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  /** add method bazaya yeni hero yaratmaq üçündür */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  /** delete bazadakı heronu identifikasiya nömrəsinə görə tapıb silir */
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
