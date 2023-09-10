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
      this.apiService.getAllData().subscribe((res) =>{
        console.log(res);
        this.readData = res
        console.log(this.readData);
        // Filter the data by "taste" property where taste is "Sweet"
        // this.readData = res.filter((cocktail: { taste: string; }) => cocktail.taste === 'Sweet');
        // console.log(this.readData);

         // Extract unique "taste" values and store them in this.tastes
        this.tastes = Array.from(new Set(res.map((cocktail: { taste: string }) => cocktail.taste)));

        console.log(this.tastes);
      });
      
  } 

  

  getCocktailByType(){
    this.readData = this.readData.filter((cocktail: { taste: string; }) => cocktail.taste === 'Sweet');
    console.log(this.readData);
  }

}
