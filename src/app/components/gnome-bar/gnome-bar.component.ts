import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gnome-bar',
  templateUrl: './gnome-bar.component.html',
  styleUrls: ['./gnome-bar.component.css']
})
export class GnomeBarComponent implements OnInit {

  @Input("curVal")
  curVal : number;

  @Input("maxVal")
  maxVal : number;

  @Input("titleLabel")
  titleLabel : string;

  @Input("curColor")
  curColor : string;

  constructor() { }

  ngOnInit(): void {
  }

}
