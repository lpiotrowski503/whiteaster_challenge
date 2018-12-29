import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {
  @Input() items
  @Output() search = new EventEmitter<NgForm>()
  @ViewChild('form') form: NgForm

  constructor() {}

  onSubmit(form: NgForm) {
    this.search.emit(form.value)
  }

  ngOnInit() {}
}
