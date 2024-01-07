import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, GameComponent],
  // templateUrl: './user.component.html',
  template: `
    <section>
      @if (isLoggedIn) {
        <div>
          <h2>Welcome, {{ username }}!</h2>
          @defer {
            <img (click)="greet()" src="https://github.com/Alessandrror.png" alt="photo">
          } @loading (minimum 2s) {
            <span>Loading...</span>
          }
        </div>
      } @else {
        <div>
          <h2>Your not logged in!</h2>
          <button (click)="isLoggedIn = true">Login</button>
        </div>
      }
      <app-game username="{{ username }}" (addFavoriteEvent)="getFavorite($event)" />

      @if (favGame !== '') {
        <p>Your favorite game is: {{ favGame }} </p>
      }
    </section>
  `,
  styleUrl: './user.component.scss'
})
export class UserComponent {
  username = 'Alessandrror'
  isLoggedIn = false
  favGame = ''

  getFavorite(gameName: string) {
    this.favGame = gameName
  }

  greet() {
    alert(`Hola ${this.username}`)
  }
}
