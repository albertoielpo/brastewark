import { Component, HostListener, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { VillageService } from '../../services/village.service';
import { GnomeModel } from './gnome.component.model';


@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.css']
})
export class GnomeComponent implements OnInit {

  gnomes : Array<GnomeModel> = [];
  maxAge: number = 0;
  maxFriends: number = 0;
  maxProfessions: number = 0;
  closeResult: string;
  
  limit : number = 20;

  modalData : any = {};
  
  constructor(private villageService: VillageService, private modalService: NgbModal) { 
    
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

        this.maxAge = Math.max(...this.gnomes.filter(x => !isNaN(parseInt(""+x.age))).map(x => x.age));
        this.maxFriends = Math.max(...this.gnomes.map(x => x.friends.length));
        this.maxProfessions = Math.max(...this.gnomes.map(x => x.professions.length));

      } else {
        console.warn("Wrong data format...",data);
      }
    }, (err: any) => {
      console.error("Impossible to retrieve info from service...", err);
    });
  }

  setModalData(ii:number){
    this.modalData = this.gnomes[ii];
  }

  isScrolling : any;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event : any) {
    
    if(this.isScrolling){
      clearTimeout(this.isScrolling);
    }

    this.isScrolling = setTimeout(() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
          this.limit+=20;
        }
    }, 100);
  };


  

}
