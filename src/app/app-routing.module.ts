import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { InfoComponent } from './screens/info/info.component';
import { MartinComponent } from './screens/martin/martin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'info', component: InfoComponent},
  { path: '', component: HomeComponent},
  { path: 'martin', component: MartinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
