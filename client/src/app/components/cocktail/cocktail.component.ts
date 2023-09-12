import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent{

    @Input() cocktail: any; // Assuming you have a cocktail object as input
    @Input() isEven: boolean | undefined; // A flag to determine styling based on even or odd index
  
}
