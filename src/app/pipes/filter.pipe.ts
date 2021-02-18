import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../entities/models/character-models';

@Pipe({
  name: 'searchfilter'
})
export class FilterPipe implements PipeTransform {

  transform(Characters: Character[], searchValue: string): Character[] {

    if(!Characters || !searchValue ){

      return Characters;
    }

    return Characters.filter(character =>
      character.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));


  }

}
