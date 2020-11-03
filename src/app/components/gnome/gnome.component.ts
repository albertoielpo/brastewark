import { Component, OnInit } from '@angular/core';
import { VillageService } from '../../services/village.service';
import { GnomeModel } from './gnome.component.model';


@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.css']
})
export class GnomeComponent implements OnInit {

  gnomes : Array<GnomeModel> = [];

  constructor(private villageService: VillageService) { 

  }

  ngOnInit(): void {
    this.villageService.getData().subscribe((data: any) => {
      console.log("data", data)
      if(data && data.Brastlewark){
        for(let d of data.Brastlewark){
          this.gnomes.push({
            age: d.age,
            friends: d.friends,
            hair_color: d.hair_color,
            height: d.height,
            id: d.id,
            name: d.name,
            professions: d.professions,
            thumbnail: d.thumbnail,
            weight: d.weight
          });          
        }
      } else {
        console.warn("Wrong data format...",data);
      }
    }, (err: any) => {
      console.error("Impossible to retrieve info from service...", err);
    });
  }

}
