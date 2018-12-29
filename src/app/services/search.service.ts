import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  search(event, arr) {
    return arr.filter(filter => {
      if (
        new RegExp(`^.*${event.projectName}.*$`).test(filter.projectName) &&
        new RegExp(`^.*${event.projectNumber}.*$`).test(filter.projectNumber) &&
        (event.status.includes(filter.status) ||
          event.status.includes('Wszystkie'))
      ) {
        return filter
      }
    })
  }
}
