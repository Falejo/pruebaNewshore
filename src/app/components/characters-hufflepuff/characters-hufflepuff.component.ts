import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../../services/app.service';
import { Character } from '../../entities/models/character-models';

@Component({
  selector: 'app-characters-hufflepuff',
  templateUrl: './characters-hufflepuff.component.html',
  styleUrls: ['./characters-hufflepuff.component.scss']
})
export class CharactersHufflepuffComponent implements OnInit {

  public characters: Character[];
  searchValue: string;

  listData: MatTableDataSource<Character>;

  public columnas: String[] = ['name', 'ancestry', 'image'];

  datasource = new MatTableDataSource();

  constructor(private service: AppService) { }

  ngOnInit(): void {

    this.getCharactersHufflepuf();
  }

  name: string = 'name';
  reverse: boolean = false;

  sortName(name) {
    this.name = name;
    this.reverse = !this.reverse;
  }


  getCharactersHufflepuf() {
    this.service.getDataHousesHufflepuf().subscribe(result => {
      console.log(result)
      this.characters = result;

    });

  }

}
