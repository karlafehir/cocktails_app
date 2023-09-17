import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private apiService : ApiServiceService) {
  }

  readData: any;
  tastes: any;

  ngOnInit(): void {
    this.getAllData();
    this.apiService.getAnimation();
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
     //onInit load classic
     this.tasteCocktails = this.readData.filter((cocktail: { taste: string; }) => cocktail.taste === "Classic");
  }

  selectedTaste: string | null = null;
  setSelectedTaste(taste: string) {
    this.selectedTaste = taste;
    this.getCocktailByType(taste);
  }

  tasteCocktails : any;
  getCocktailByType(selectedTaste: string){
    this.tasteCocktails = this.readData.filter((cocktail: { taste: string; }) => cocktail.taste === selectedTaste);
    console.log(this.tasteCocktails);
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
