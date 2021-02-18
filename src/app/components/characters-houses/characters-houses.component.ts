import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../../services/app.service';
import { Character } from '../../entities/models/character-models';


@Component({
  selector: 'app-characters-houses',
  templateUrl: './characters-houses.component.html',
  styleUrls: ['./characters-houses.component.scss']
})

export class CharactersHousesComponent implements OnInit {

  public characters: Character[];
  searchValue: string;

  listData: MatTableDataSource<Character>;

  public columnas: String[] = ['name', 'ancestry', 'image'];


  datasource = new MatTableDataSource();


  constructor(private service: AppService) { }



  ngOnInit(): void {

    this.getCharactersGryfindor();


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

  getCharactersGryfindor() {
    this.service.getDataHousesGryffindor().subscribe(result => {
      console.log(result)
      this.characters = result;

    });

  }

  getImage() {
    this.service.getDataHousesGryffindor().subscribe(result => {
      console.log(result)
      this.characters = result;

    });
  }

}


