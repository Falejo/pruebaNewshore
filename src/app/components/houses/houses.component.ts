import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { Character } from '../../entities/models/character-models';
import { AppService } from '../../services/app.service';

import { Router } from '@angular/router';




@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})


export class HousesComponent {

  public characters: Character[];
  public countGryffindor: number;
  public countSlytherin: number;
  public countRavenclaff: number;
  public countHufflepuff: number;


  constructor(private service: AppService, private router: Router) { }


  ngOnInit(): void {

    this.getCharacterGryffindor();

    this.getCharacterSlytherin();

    this.getCharacterRaveclaw();

    this.getCharacterHufflepuf();
    

  }

  getCharacterGryffindor() {
    this.service.getDataHousesGryffindor().subscribe(result => {

      this.characters = result;

      this.countGryffindor = result.length;

    });

  }

  getCharacterSlytherin() {
    this.service.getDataHousesSlytherin().subscribe(result => {
      this.characters = result;

      this.countSlytherin = result.length;
    });
  }

  getCharacterRaveclaw() {
    this.service.getDataHousesRavenclaw().subscribe(result => {
      this.characters = result;

      this.countRavenclaff = result.length;
    });

  }

  getCharacterHufflepuf() {
    this.service.getDataHousesHufflepuf().subscribe(result => {
      this.characters = result;

      this.countHufflepuff = result.length;
    });

  }
}




