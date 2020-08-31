import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ReboServicesService {

  constructor(private http: HttpClient) { }

  /**
 * Get Validation for customer statement
 * @returns {Observable<R>}
 */
  getCustomerProcessor(payload: any): Observable<any> {

    let url: string;
    url = "/rabo/processor";

    return this.http.post(url, payload, { headers: this.getHeaders() }).pipe(catchError(this.handleError));
  }

  getHeaders() {
    return new HttpHeaders({ 'Accept': 'application/json' });
  }

  // error handling
  private handleError(error, source): Observable<Response> {
    return throwError(error);
  }

}
