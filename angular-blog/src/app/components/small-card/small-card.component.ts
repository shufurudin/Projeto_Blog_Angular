import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  stock_img_size_x: number = 200
  stock_img_size_y: number = 100
  width: string = this.stock_img_size_x+'px'
  @Input()
  img_src: string = "" || `https://placehold.co/${this.stock_img_size_x}x${this.stock_img_size_y}`;
  @Input()
  card_title: string = ""
  @Input()
  id: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
