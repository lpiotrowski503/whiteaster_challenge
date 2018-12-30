import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.sass']
})
export class AsideComponent implements OnInit {
  @Input() items = []

  chartOptions = {
    responsive: true,
    cutoutPercentage: 90
  }
  chartLegend = false
  chartType = 'doughnut'

  chartColors = [
    {
      backgroundColor: ['#ff9900', '#fff'],
      borderColor: ['#ff9900', '#fff'],
      pointBackgroundColor: ['#ff9900', '#fff'],
      pointBorderColor: ['#ff9900', '#fff'],
      pointHoverBackgroundColor: ['#ff9900', '#fff'],
      pointHoverBorderColor: ['#ff9900', '#fff']
    }
  ]

  constructor() {}

  procent(item) {
    return `${Math.round((item / this.items[0].total[0]) * 100)}%`
  }

  ngOnInit() {}
}
