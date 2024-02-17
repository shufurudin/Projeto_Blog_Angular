import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  
  stock_img_size_x: number = 400
  stock_img_size_y: number = 200
  width: string = this.stock_img_size_x+'px'
  @Input()
  img_src: string = "" || `https://placehold.co/${this.stock_img_size_x}x${this.stock_img_size_y}`;
  @Input()
  card_title: string = ""
  @Input()
  card_description: string = ""

  constructor() {
  }

  ngOnInit(): void {
  }

}
