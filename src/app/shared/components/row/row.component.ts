import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.sass']
})
export class RowComponent implements OnInit {
  @Input() warning
  @Input() message
  @Input() row
  @Input() up = false

  constructor() {}

  ngOnInit() {}
}
