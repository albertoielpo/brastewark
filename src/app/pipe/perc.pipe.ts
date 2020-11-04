import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'perc' })
export class PercPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    if(value == null){
      return 0;
    } else {
      let tmp = value / args[0] * 100;
      if(isNaN(tmp)){
        return 0;
      } else {
        return Math.round(tmp);
      }
    }
    
  }

}
