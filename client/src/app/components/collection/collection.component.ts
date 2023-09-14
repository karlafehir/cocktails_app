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
  myCocktailCollection : any;
  tastes: any;

  ngOnInit(): void {
    this.apiService.getAnimation();
    this.getAllData();
    this.getCocktailCollectionData();
  } 

  getAllData(){
    this.apiService.getAllData().subscribe((res) =>{
      console.log(res);
      this.readData = res;
      this.tastes = Array.from(new Set(this.readData.map((cocktail: { taste: string }) => cocktail.taste)));
      console.log(this.tastes);
    });
    
  }

  getCocktailCollectionData(){
    this.apiService.getCocktailCollectionData().subscribe((res) =>{
      console.log(res);
      this.myCocktailCollection = res;
    });
  }
  tasteCocktails : any;

  // getCocktailTypes(){
  //    this.tastes = Array.from(new Set(this.readData.map((cocktail: { taste: string }) => cocktail.taste)));
  //    console.log(this.tastes);
  //    //onInit load classic
  //    this.tasteCocktails = this.readData.filter((cocktail: { taste: string; }) => cocktail.taste === "Classic");
  //     console.log(this.tasteCocktails);
  //   }


  // getCocktailByType(selectedTaste: string){
  //   this.tasteCocktails = this.readData.filter((cocktail: { taste: string; }) => cocktail.taste === selectedTaste);
  //   console.log(this.tasteCocktails);
  // }

  isExpanded = false;
  selectedTaste: string = ''; 
  formData: any = {}; 


  toggleSection() {
    this.isExpanded = !this.isExpanded;
  }

  setTaste(taste: string) {
    this.selectedTaste = taste;
  }
  submitForm() {
    this.formData = {
      title: (document.querySelector('input[name="title"]') as HTMLInputElement).value,
      taste: this.selectedTaste,
      description: (document.querySelector('textarea[name="description"]') as HTMLTextAreaElement).value,
      instructions: (document.querySelector('textarea[name="instructions"]') as HTMLTextAreaElement).value,
    };
    console.log(this.formData);

    this.addNewCocktail(this.formData);
  }

  addNewCocktail(formData: any){
    this.apiService.addNewCocktail(formData).subscribe((res) =>{
      console.log(res);
      this.toggleSection();
      this.getCocktailCollectionData();
    });
  }

  onDeleteCocktail(id: any){
    console.log(id);
    this.apiService.deleteCocktail(id).subscribe((res) =>{
      console.log(res);
      this.getCocktailCollectionData();
    }, (err) =>{
      console.log(err);
    });
  }

  onEditCocktail(id: any){
    console.log(id);
  }

  

  
  
  
  

}
