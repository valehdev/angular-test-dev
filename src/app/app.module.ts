import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { UsersComponent } from './users/users.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { AppRountingModule } from './/app-rounting.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  	declarations: [
		AppComponent,
		HeroesComponent,
		UsersComponent,
		HeroDetailComponent,
		MessagesComponent,
		DashboardComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRountingModule
	],
	providers: [ 
		HeroService, 
		MessageService 
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
