import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AbautComponent } from './abaut/abaut.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

//Home
//Abaut
//Contact

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/:course', component: CoursesDetailComponent},
  {path: 'about', component: AbautComponent},
  {
    path: 'contact', component: ContactComponent,
  children: [
    {path: '', component: ContactInfoComponent},
    {path: 'details', component: ContactDetailsComponent}
  ]
},
]




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AbautComponent,
    ContactComponent,
    CoursesComponent,
    CoursesDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
