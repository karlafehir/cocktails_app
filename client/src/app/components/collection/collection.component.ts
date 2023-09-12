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
     //onInit load classic
     this.tasteCocktails = this.readData.filter((cocktail: { taste: string; }) => cocktail.taste === "Classic");
  }

  tasteCocktails : any;
  getCocktailByType(selectedTaste: string){
    this.tasteCocktails = this.readData.filter((cocktail: { taste: string; }) => cocktail.taste === selectedTaste);
    console.log(this.tasteCocktails);
  }

  isExpanded = true;
  selectedTaste: string | null = null;


  toggleSection() {
    this.isExpanded = !this.isExpanded;
  }

  setTaste(taste: string) {
    this.selectedTaste = taste;
  }

  submitForm() {
    // Implement your form submission logic here
    // You can access the form values using Angular forms or directly via properties
    const formData = {
      title: (document.getElementById('title') as HTMLInputElement).value,
      taste: this.selectedTaste,
      description: (document.getElementById('description') as HTMLInputElement).value,
      instructions: (document.getElementById('instructions') as HTMLInputElement).value
    };
    console.log(formData);
    // Perform the actual form submission, e.g., send data to an API
  }


}
