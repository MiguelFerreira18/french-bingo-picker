import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { Item } from './item/item';

@Component({
  imports: [Item],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  readonly items = signal<string[]>([]);
  readonly personItems = signal<string[]>([]);

  ngOnInit(): void {
    this.http.get<string[]>('data.json').subscribe((items) => {
      console.log('loaded', items);
      this.items.set(items);
      this.pickRandom();
    });
  }

  private pickRandom() {
    const temp: string[] = [...this.items()];
    const total = 16;
    const picked: string[] = [];
    for (let i = 0; i < total; i++) {
      const random: number = Math.floor(Math.random() * temp.length);
      picked.push(temp.splice(random, 1)[0]);
    }

    this.personItems.set(picked);
  }
}
