import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  constructor() {}

  cut(arr, page) {
    return arr.slice((page - 1) * 8, page * 8)
  }

  initPage(page, items) {
    return this.cut(items, page)
  }

  setPages(arr, filtredItems) {
    const pages = []
    for (let i = 1; i <= Math.ceil(arr.length / filtredItems.length); i++) {
      pages.push(i)
    }
    return pages
  }

  changePage(page, pages, searched, items, callback) {
    if (page > 0 && page <= pages.length) {
      callback(this.cut(searched.length !== 0 ? searched : items, page))
    }
  }
}
