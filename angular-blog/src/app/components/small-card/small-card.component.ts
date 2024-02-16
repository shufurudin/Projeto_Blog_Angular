import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  stock_img_size_x: number = 200
  stock_img_size_y: number = 100
  width: string = this.stock_img_size_x+'px'
  img_src: string = "https://miro.medium.com/v2/resize:fit:1200/1*udvSMrSVGOgD4fxjMJHbOw.jpeg" || `https://placehold.co/${this.stock_img_size_x}x${this.stock_img_size_y}`;

  constructor() { }

  ngOnInit(): void {
  }

}
