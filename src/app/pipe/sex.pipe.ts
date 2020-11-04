import { Pipe, PipeTransform } from '@angular/core';
import * as gender from 'gender-detection';
import { GnomeModel } from '../components/gnome/gnome.component.model';

@Pipe({ name: 'sex' })
export class SexPipe implements PipeTransform {

  transform(value: GnomeModel, ...args: string[]): string {
    if(!value || !value.name){
      return "N/A";
    } else {
      const g = gender.detect(value.name.split(" ")[0]);      
      if(g == "unknown"){
        if(["pink", "green"].includes(value.hair_color.toLowerCase())){
          return "Female";
        } else  {
          return "Male";
        }
      } else {
        return g;
      }
    }
  }

}
