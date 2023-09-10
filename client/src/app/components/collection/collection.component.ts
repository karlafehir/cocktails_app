import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor(private apiService : ApiServiceService) {
  }

  readData: any;
  tastes: any;

  ngOnInit(): void {
    this.getAllData();
  } 

  getAllData(){
    this.apiService.getAllData().subscribe((res) =>{
      console.log(res);
      this.readData = res;
      this.getCocktailTypes();
    });
  }

  getCocktailTypes(){
     this.tastes = Array.from(new Set(this.readData.map((cocktail: { taste: string }) => cocktail.taste)));
     console.log(this.tastes);
  }

  tasteCocktails : any;
  getCocktailByType(selectedTaste: string){
    this.tasteCocktails = this.readData.filter((cocktail: { taste: string; }) => cocktail.taste === selectedTaste);
    console.log(this.tasteCocktails);
  }

}
