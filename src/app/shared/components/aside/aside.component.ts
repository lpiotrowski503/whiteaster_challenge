import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.sass']
})
export class AsideComponent implements OnInit {
  @Input() items = []

  constructor() {}

  ngOnInit() {}
}
