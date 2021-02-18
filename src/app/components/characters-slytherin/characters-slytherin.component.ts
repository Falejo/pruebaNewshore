import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../../services/app.service';

import { Character } from '../../entities/models/character-models';

@Component({
  selector: 'app-characters-slytherin',
  templateUrl: './characters-slytherin.component.html',
  styleUrls: ['./characters-slytherin.component.scss']
})
export class CharactersSlytherinComponent implements OnInit {

  public characters: Character[];
  searchValue: string;

  listData: MatTableDataSource<Character>;

  public columnas: String[] = ['name', 'ancestry', 'image'];

  constructor(private service: AppService) { }

  ngOnInit(): void {

    this.getCharactersSlytherin();
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

  getCharactersSlytherin() {
    this.service.getDataHousesSlytherin().subscribe(result => {

      this.characters = result;

    });

  }

}
