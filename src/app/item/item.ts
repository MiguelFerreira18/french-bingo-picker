import { Component, input, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-item',
  styleUrl: './item.css',
  templateUrl: './item.html',
  host: { class: 'block min-h-0 min-w-0' },
})
export class Item {
  readonly value = input.required();
  isChecked = signal(false);
}
