import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HomeComponent } from './home/home.component';
import { GridComponent } from './home/grid/grid.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { MovieCardComponent } from './Movie/movie-card/movie-card.component';
import { MovieDetailComponent } from './Movie/movie-detail/movie-detail.component';
import { MovieListComponent } from './Movie/movie-list/movie-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OmdbApiService } from './Services/omdb-api.service';
import { MoviesBddService } from './Services/movies-bdd.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    HomeComponent,
    GridComponent,
    MovieCardComponent,
    SearchBarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  providers: [
    OmdbApiService,
    MoviesBddService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
