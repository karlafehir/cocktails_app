import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { PopularComponent } from './components/popular/popular.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ExploreComponent } from './components/explore/explore.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'test', 
    component: TestComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'popular', 
    component: PopularComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'explore', 
    component: ExploreComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'collection', 
    component: CollectionComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
