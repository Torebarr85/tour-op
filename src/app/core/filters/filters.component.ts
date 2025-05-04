import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {   MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatFormFieldModule, MatButton],
  templateUrl: './filters.component.html',
  styles: ``,
})
export class FiltersComponent implements OnInit {
  searchControl = new FormControl('');
  search$ = this.searchControl.valueChanges.pipe(startWith(''));
  @Output() searchValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.search$.subscribe( e => this.searchValue.emit(e ?? ''))
  }
}
