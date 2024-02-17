import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from "../../data/dataFake"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  stock_img_size_x: number = 760
  stock_img_size_y: number = 520

  @Input()
  photoCover: string = "" || `https://placehold.co/${this.stock_img_size_x}x${this.stock_img_size_y}`
  @Input()
  contentTitle: string = ""
  @Input()
  contentDescription: string = ""
  private id: string | null = ""

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0]

    this.photoCover = result.photo
    this.contentTitle = result.title
    this.contentDescription = result.description

  }
}
