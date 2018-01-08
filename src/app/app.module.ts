import { NgModule }             from '@angular/core'; // anguları trigger edən modul
import { BrowserModule }        from '@angular/platform-browser'; 
import { FormsModule }          from '@angular/forms'; // istifadəçi formlarının idarə edən modul
import { HttpClientModule }     from '@angular/common/http'; // HTTP sorğularını idarə edən modul

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // veb api-lər məlumatları idarə edən modul
import { InMemoryDataService }  from './in-memory-data.service'; // fake data yaradıb onu vep api ilə idarə edən db rolunu oynuyan service

import { AppRoutingModule }     from './app-routing.module'; // app daxili route-ları təmin edən modul

import { AppComponent }         from './app.component'; // Əsas ng ilk olaraq construct olanda xoda düşən modul
import { DashboardComponent }   from './dashboard/dashboard.component'; // dashboard modulu custom
import { HeroDetailComponent }  from './hero-detail/hero-detail.component'; // hero-ların daxili spesifikasiyanın idarə olunması üçün yazılmış modul (custom)
import { HeroesComponent }      from './heroes/heroes.component'; // heroların ümümilikdə idarə olunması üçün yazılmış modul
import { HeroSearchComponent }  from './hero-search/hero-search.component'; // heroların bazadan axtarılıb istifadəçiyə göstərilməsi üçün yazılmış modul
import { HeroService }          from './hero.service'; // hero üçün db ilə əməliyyat aparmaq üçün yazılmış servis
import { MessageService }       from './message.service'; // istifadəçiyə aparılan əmıliyyatların göstərilməsini təmin edən service
import { UsersComponent }       from './users/users.component';
import { MessagesComponent }    from './messages/messages.component'; 

// ngmodul bütün lazım olan component və servisləri app-ə include edir bütün əsaslı common include olunancaq nə varsa burdan idarə olunur.
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
