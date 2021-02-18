import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../entities/models/character-models';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private HttpClient: HttpClient) { }

    getAllHouseCharacter() {
      const characteres: Character[] = []
      let character = new Character()
      character.house = 'Gryfoldi';

      characteres.push(character)
      return of(characteres)
    }
    
    /** 
    getAllHouses(pagne:number):Observable<Character[]>{
      let direction = this.url + ""
      return
    }*/

    getDataHousesGryffindor(){
      return this.HttpClient.get<Character[]>('http://hp-api.herokuapp.com/api/characters/house/gryffindor');
    }
   
    getDataHousesSlytherin(){
      return this.HttpClient.get<Character[]>('http://hp-api.herokuapp.com/api/characters/house/Slytherin');
    }

    getDataHousesHufflepuf(){
      return this.HttpClient.get<Character[]>('http://hp-api.herokuapp.com/api/characters/house/Hufflepuff');
    }
  
    getDataHousesRavenclaw(){
      return this.HttpClient.get<Character[]>('http://hp-api.herokuapp.com/api/characters/house/Ravenclaw');
    }

    /**getHousesFilter(name:string): Character{
      let character = this.getDataHousesGryffindor();
      let characte = character.filter()

    }*/
    
}
