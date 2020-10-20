import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SpellsComponent } from './spells/spells.component';
import { MonstersComponent } from './monsters/monsters.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'monsters', component: MonstersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
