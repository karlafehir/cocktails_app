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
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    PopularComponent,
    CollectionComponent,
    ExploreComponent,
    CocktailComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
