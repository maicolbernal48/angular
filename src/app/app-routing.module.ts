import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { HorariosComponent } from './horarios/horarios.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { MosotrosComponent } from './mosotros/mosotros.component';

const routes: Routes = [
  {path: "multimedia", component:MultimediaComponent },
  {path:"horarios", component: HorariosComponent},
  {path:"contactenos", component: ContactenosComponent},
  {path:"mosotros", component: MosotrosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
