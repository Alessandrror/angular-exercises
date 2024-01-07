import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Favorite games for {{ username }} are:</h3>
    <p>Choose one by click on it!</p>
    <ul>
      @for (game of games; track game.id) {
        <li [class]="selectedGame() === game.id ? 'selected' : '' " (click)="fav(game.name, game.id)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: `
    li {
      cursor: pointer;
    }

    .selected {
      color: yellow;
    }
  `
})

export class GameComponent {

  @Input() username = ''
  @Output() addFavoriteEvent = new EventEmitter<string>()

  selectedGame: WritableSignal<number> = signal(0)

  fav(gameName: string, gameId: number) {
    // alert(`A ${this.username} le gusta jugar a ${gameName}`)
    this.addFavoriteEvent.emit(gameName)
    this.selectedGame.update(() => gameId)
  }

  games = [
    {
      id: 1,
      name: 'Apex Legends'
    },
    {
      id: 2,
      name: 'Overwatch 2'
    },
    {
      id: 3,
      name: 'Forspoken'
    }
  ]
}
