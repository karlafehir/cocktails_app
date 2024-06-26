import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private _http: HttpClient) {}

  cocktailsApiUrl = 'http://localhost:8080/cocktails';
  myCocktailCollectionApiUrl = 'http://localhost:8080/MyCocktailCollection';

  getAllData(): Observable<any> {
    return this._http.get(this.cocktailsApiUrl);
  }

  getCocktailCollectionData(): Observable<any> {
    return this._http.get(this.myCocktailCollectionApiUrl);
  }

  addNewCocktail(formData: any): Observable<any> {
    const title = formData.title;
    const taste = formData.taste;
    const description = formData.description;
    const instructions = formData.instructions;
    const image = formData.image;
    return this._http.post(this.myCocktailCollectionApiUrl, {
      title,
      taste,
      description,
      instructions,
      image
    });
  }

  deleteCocktail(id: any): Observable<any> {
    return this._http.delete(`${this.myCocktailCollectionApiUrl}/${id}`);
  }

  getAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hidden, .hidden-slow');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });
  }
}
