import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { PopularComponent } from './components/popular/popular.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ExploreComponent } from './components/explore/explore.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { 
    path: 'test', 
    component: TestComponent
  },
  { 
    path: 'popular', 
    component: PopularComponent
  },
  { 
    path: 'explore', 
    component: ExploreComponent
  },
  { 
    path: 'collection', 
    component: CollectionComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
