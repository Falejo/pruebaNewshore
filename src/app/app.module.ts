import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HousesComponent } from './components/houses/houses.component';
import { CharactersHousesComponent } from './components/characters-houses/characters-houses.component';
import { CharactersSlytherinComponent} from './components/characters-slytherin/characters-slytherin.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { Ng2OrderModule } from 'ng2-order-pipe';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CharactersHufflepuffComponent } from './components/characters-hufflepuff/characters-hufflepuff.component';
import { CharactersRavenclawComponent } from './components/characters-ravenclaw/characters-ravenclaw.component';





const appRoutes: Routes = [
  {path:'', component: HousesComponent },
  {path:'characterHouse', component: CharactersHousesComponent},
  {path:'characterSlytherin', component: CharactersSlytherinComponent},
  {path:'characterRavenclaw', component:CharactersRavenclawComponent},
  {path:'characterHufflepuff', component: CharactersHufflepuffComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    CharactersHousesComponent,
    FilterPipe,
    CharactersSlytherinComponent,
    CharactersRavenclawComponent,
    CharactersHufflepuffComponent,
    CharactersRavenclawComponent
                
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatTableModule,
    MatButtonModule, 
    FormsModule,
    MatFormFieldModule,
    Ng2OrderModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
