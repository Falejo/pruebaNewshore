import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../../services/app.service';
import { Character } from '../../entities/models/character-models';

@Component({
  selector: 'app-characters-ravenclaw',
  templateUrl: './characters-ravenclaw.component.html',
  styleUrls: ['./characters-ravenclaw.component.scss']
})
export class CharactersRavenclawComponent implements OnInit {

  public characters: Character[];
  searchValue: string;

  listData: MatTableDataSource<Character>;

  public columnas: String[] = ['name', 'ancestry', 'image'];


  datasource = new MatTableDataSource();

  constructor(private service: AppService) { }

  ngOnInit(): void {

    this.getCharactersRavenclaw();
  }

   /**
   * strategies sorting name
   */
  name: string = 'name';
  reverse: boolean = false;

  sortName(name) {
    this.name = name;
    this.reverse = !this.reverse;
  }

  /**
   * strategies sorting last name
   */
  lastName: string = '';
  reverses: boolean = false;

  sortLastName(lastName){
    this.lastName = lastName;
    this.reverses = !this.reverses;
  }


  getCharactersRavenclaw() {
    this.service.getDataHousesRavenclaw().subscribe(result => {
  
      this.characters = result;

    });

  }

}
