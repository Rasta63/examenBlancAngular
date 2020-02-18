import { Injectable } from '@angular/core';
import { Chaussure } from '../models/chaussure';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChaussureService {
  chaussures: Chaussure[];
  apiUrl = "http://localhost:3000/chaussure";
  types :string[] =["Sport","Ville","Football"];
  marques : string[] = ["Adidas","Nike","Pumas"];
  constructor(private http: HttpClient) {
    this.chaussures = [];

  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getAllChaussures(): Observable<Chaussure[]> {
    return this.http.get<Chaussure[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getChaussureById(id: number): Observable<Chaussure>{
    return this.http.get<Chaussure>(`${this.apiUrl}/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
  addChaussure(chaussure : Chaussure) : Observable<Chaussure>{
    chaussure.dateEntreStock = new Date();
   return this.http.post<Chaussure>(this.apiUrl,chaussure).pipe(
     catchError(this.handleError)
     );

  }
  editChaussure(chaussure : Chaussure) : Observable<Chaussure>{
    return this.http.put<Chaussure>(`${this.apiUrl}/${chaussure.id}`,chaussure)
    .pipe(retry(1),
    catchError(this.handleError));
  }

  deleteChaussure(id): Observable<Chaussure>{
    return this.http.delete<Chaussure>(`${this.apiUrl}/${id}`)
    .pipe(retry(1),
    catchError(this.handleError));
  }
}
