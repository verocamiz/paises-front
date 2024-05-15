import { Injectable } from '@angular/core';
import { environments } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { IPais } from '../interfaces/pais.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http : HttpClient) { }

  getPaises(queryString : string):Observable<IPais[]> {
    return this.http.get<IPais[]>(`${ this.baseUrl }/paises/${queryString}`);
  }
}
