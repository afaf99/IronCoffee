import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CoffeeService {
  private readonly API_URL = "https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees";

  constructor(private http: HttpClient) { }

  getAllCoffees(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getCoffeeById(id: String): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }

  fetchRandomCoffee(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/random`)
  }

  postCoffee(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/new`, body);
  }
  searchCoffees(query: string): Observable<any> {
    const apiUrl = `https://ih-coffees-api-42e1df06199a.herokuapp.com/coffees/search?q=${query}`;
    return this.http.get(apiUrl);
  }
}
