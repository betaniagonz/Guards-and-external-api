import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponseCharacter, ApiResponseEpisode } from './models/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);

  getAllCharacters(page?: number): Observable<ApiResponseCharacter>{
    const url_pag =  `${environment.api}/character/?page=${page}`;
    const url = `${environment.api}/character`;
    return this._http.get<ApiResponseCharacter>(page ? url_pag : url);
  }

  getAllEpisodes(page?: number): Observable<ApiResponseEpisode>{
    const url_pag =  `${environment.api}/episode?page=${page}`;
    const url = `${environment.api}/episode`;
    
    return this._http.get<ApiResponseEpisode>(page ? url_pag : url);
  }
}
