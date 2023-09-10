import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { PopularComponent } from './components/popular/popular.component';

const routes: Routes = [
  { 
    path: 'test', 
    component: TestComponent
  },
  { 
    path: 'popular', 
    component: PopularComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
