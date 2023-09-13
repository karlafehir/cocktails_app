import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  constructor(private apiService : ApiServiceService) {}

  readData: any;

  ngOnInit(): void {
      this.apiService.getAllData().subscribe((res) =>{
        console.log(res);
        this.readData = res
        console.log(this.readData);
        
      });
      this.apiService.getAnimation();
  }

  addToMyCollection(cocktail: any) {
    this.apiService.addNewCocktail(cocktail).subscribe((res) =>{
      console.log(res);
      if (res[0].id) {
        const newCocktailId = res.id;
      } else {
        console.error("No ID found in the server response.");
      }
    },
    (error) => {
      console.error("Error adding cocktail to MyCocktailCollection", error);
    });
  }
  
}
