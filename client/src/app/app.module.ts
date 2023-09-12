import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';

import { HttpClientModule } from '@angular/common/http'
import { ApiServiceService } from './services/api-service.service';
import { HeaderComponent } from './components/header/header.component';
import { PopularComponent } from './components/popular/popular.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ExploreComponent } from './components/explore/explore.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    PopularComponent,
    CollectionComponent,
    ExploreComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
