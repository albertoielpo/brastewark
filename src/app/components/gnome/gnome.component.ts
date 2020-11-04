import { Component, HostListener, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VillageService } from '../../services/village.service';
import { GnomeModel } from './gnome.component.model';


@Component({
  selector: 'app-gnome',
  templateUrl: './gnome.component.html',
  styleUrls: ['./gnome.component.css']
})
export class GnomeComponent implements OnInit {

  isLoading : boolean = true;
  bkGnomes : Array<GnomeModel> = [];
  gnomes : Array<GnomeModel> = [];
  maxAge: number = 0;
  maxFriends: number = 0;
  maxProfessions: number = 0;
  closeResult: string;  
  limit : number = 20;
  modalData : any = {};
  isScrollingFlow : any;
  
  isFilter:boolean = false;
  isFilterFlow:any;
  
  constructor(private villageService: VillageService, private modalService: NgbModal) { 
    
  }

  ngOnInit(): void {
    this.villageService.getData().subscribe((data: any) => {
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
            thumbnail: d.thumbnail == null ? null : d.thumbnail.replace("http://","https://"),  //force https
            weight: d.weight
          });          
        }

        this.maxAge = Math.max(...this.gnomes.filter(x => !isNaN(parseInt(""+x.age))).map(x => x.age));
        this.maxFriends = Math.max(...this.gnomes.map(x => x.friends.length));
        this.maxProfessions = Math.max(...this.gnomes.map(x => x.professions.length));

      } else {
        console.warn("Wrong data format...",data);
      }
      this.isLoading = false;
    }, (err: any) => {
      console.error("Impossible to retrieve info from service...", err);
      this.isLoading = false;
    });
  }

  setModalData(ii:number){
    this.modalData = this.gnomes[ii];
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event : any) {
    
    if(this.isScrollingFlow){
      clearTimeout(this.isScrollingFlow);
    }

    /* do not allow multiple calls... limit check every 100 ms */
    this.isScrollingFlow = setTimeout(() => {
        if ((Math.round(window.innerHeight + window.scrollY)) >= document.body.offsetHeight) {
          this.limit+=20;
        }
    }, 100);
  };


  filterByName(f:any){
    this.bkGnomes.length == 0 ? this.bkGnomes = JSON.parse(JSON.stringify(this.gnomes)) : false;
    if(!f || !f.value || !f.value == null){
      this.isFilter = false;
      this.gnomes = JSON.parse(JSON.stringify(this.bkGnomes));
      return;
    }
    this.isFilter = true;

    if(this.isFilterFlow){
      clearTimeout(this.isFilterFlow);
    }

    /* do not allow multiple calls... limit to one every 500ms */
    this.isFilterFlow = setTimeout(() => {
      this.gnomes = this.bkGnomes.filter(x => x.name.toLowerCase().includes(f.value.toLowerCase()));
    }, 500);

    
  }
  

}
