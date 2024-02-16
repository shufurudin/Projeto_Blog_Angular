import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  stock_img_size_x: number = 400
  stock_img_size_y: number = 200
  width: string = this.stock_img_size_x+'px'
  img_src: string = "https://media.licdn.com/dms/image/D4E12AQEQuHoHHLgLqw/article-cover_image-shrink_720_1280/0/1692734596025?e=2147483647&v=beta&t=62SSJf0aaAILlytYVS2SgAPA30mJMbHMSpRPDJgq8ck" || `https://placehold.co/${this.stock_img_size_x}x${this.stock_img_size_y}`;

  constructor() {
   }

  ngOnInit(): void {
  }

}
