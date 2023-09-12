import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http: HttpClient) { }

  apiUrl = 'http://localhost:8080/cocktails';

  getAllData() : Observable<any>{
    return this._http.get(this.apiUrl);
  }

  addNewCocktail(formData: any) : Observable<any>{
    const title = formData.title;
    const taste = formData.taste;
    const description = formData.description;
    const  instructions = formData.instructions;
    return this._http.post(this.apiUrl, 
      {title, taste, description, instructions}
      );
  }

}
