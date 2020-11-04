import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gnome-detail',
  templateUrl: './gnome-detail.component.html',
  styleUrls: ['./gnome-detail.component.css']
})
export class GnomeDetailComponent implements OnInit {

  @Input("modalData")
  modalData : any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
