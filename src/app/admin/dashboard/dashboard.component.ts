import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponseCharacter, ApiResponseEpisode} from 'src/app/services/models/api.model';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, NgFor, NgIf, NgOptimizedImage, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  private _apiService = inject(ApiService);
  private _authService = inject(AuthService);
  private _route = inject(Router);

  characters!: ApiResponseCharacter;
  episodes!:ApiResponseEpisode;

  ngOnInit(): void {
    this.getCharacters();
    this.getEpisodes();
  }

  getCharacters(page?: number){
    this._apiService.getAllCharacters(page ? page : undefined).subscribe({
      next: (res: ApiResponseCharacter) => {
        console.log(res);
        this.characters = res;
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      }
    })
  }

  getEpisodes(page?: number){
    this._apiService.getAllEpisodes(page ? page : undefined).subscribe({
      next: (res: ApiResponseEpisode) => {
        console.log(res);
        this.episodes = res;
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      }
    })
  }

  logout(){
    this._authService.logout();
    this._route.navigateByUrl('/login');
  }

  get loading(){
    return this.episodes.results.length > 0 && this.characters.results.length > 0 ? false : true;
  }

}
