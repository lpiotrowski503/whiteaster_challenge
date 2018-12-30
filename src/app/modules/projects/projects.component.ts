import { RandomService } from './../../services/random.service'
import { SearchService } from './../../services/search.service'
import { PaginationService } from './../../services/pagination.service'
import { StoreService } from './../../services/store.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  asideItems = this.store.asideItems
  data = this.store.data
  page = 1
  pages = []
  items = []
  searched = []
  filtredItems = []

  constructor(
    private store: StoreService,
    private pagination: PaginationService,
    private search: SearchService,
    private random: RandomService
  ) {}

  changePage(page) {
    this.pagination.changePage(
      page,
      this.pages,
      this.searched,
      this.items,
      arr => {
        this.filtredItems = arr
        this.page = page
      }
    )
  }

  onSearch(event, page = 1) {
    this.searched = this.search.search(event, this.items)
    this.page = 1
    this.filtredItems = this.pagination.cut(this.searched, page)
    this.pages = this.pagination.setPages(this.searched, this.filtredItems)
  }

  chartFiltred(filter, arr: any[]) {
    return arr.filter((element: any) => {
      if (element.harmonogram.includes(filter)) {
        return element
      }
    })
  }

  setChartsData() {
    this.store.asideItems[0].total[0] = this.items.length
    this.store.asideItems[1].total[1] = this.items.length
    this.store.asideItems[1].total[0] = this.chartFiltred(
      'W terminie',
      this.items
    ).length
    this.store.asideItems[2].total[1] = this.items.length
    this.store.asideItems[2].total[0] = this.chartFiltred(
      'Opóźniony',
      this.items
    ).length
    this.store.asideItems[3].total[1] = this.items.length
    this.store.asideItems[3].total[0] = this.chartFiltred(
      'Przed czasem',
      this.items
    ).length
  }

  ngOnInit() {
    this.random.randomLoop(50, this.items)
    this.filtredItems = this.pagination.initPage(this.page, this.items)
    this.pages = this.pagination.setPages(this.items, this.filtredItems)
    this.setChartsData()
  }
}
