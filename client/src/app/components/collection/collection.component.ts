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

  isExpanded = false;
  selectedTaste: string = ''; // You might already have this variable defined in your component
  formData: any = {}; // This object will store the form data


  toggleSection() {
    this.isExpanded = !this.isExpanded;
  }

  setTaste(taste: string) {
    this.selectedTaste = taste;
  }

  submitForm() {
    // Access the form elements and store their values in formData object
    this.formData = {
      title: (document.querySelector('input[name="title"]') as HTMLInputElement).value,
      taste: this.selectedTaste,
      description: (document.querySelector('input[name="description"]') as HTMLInputElement).value,
      instructions: (document.querySelector('input[name="instructions"]') as HTMLInputElement).value,
    };

    // Log the form data to the console
    console.log(this.formData);

    // You can also perform any other actions with the form data here, such as sending it to a server.
  }

  

}
