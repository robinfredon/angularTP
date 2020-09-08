import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { AppComponent } from './app.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
