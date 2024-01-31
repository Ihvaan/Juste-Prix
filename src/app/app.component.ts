import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  standalone: true
})
export class AppComponent {
  title = 'Juste-Prix';
  joueur1: string = '';
  joueur2: string = '';
  objet: string = '';
  valeur: number | null = null;
  tentative: number = 0;
  guess: number | null = null;

  gameStarted: boolean = false;
  gameFinished: boolean = false;
  scores: { joueur: string; tentatives: number }[] = [];

  startGame() {
    if (this.joueur1 && this.joueur2 && this.objet && this.valeur !== null) {
      this.gameStarted = true;
    }
  }

  playGuess() {
    this.tentative++;

    if (this.guess === null) {
      // Si la valeur est nulle, la tentative ne compte pas
    } else if (this.valeur !== null) {
      if (this.guess > this.valeur) {
        // La valeur proposée est supérieure
      } else if (this.guess < this.valeur) {
        // La valeur proposée est inférieure
      } else {
        // Félicitations, c'est un juste prix !
        this.gameFinished = true;
        this.scores.push({ joueur: this.joueur2, tentatives: this.tentative });
      }
    }
    // Réinitialisation
    this.guess = null;
  }


  restartGame() {
    this.joueur1 = '';
    this.joueur2 = '';
    this.objet = '';
    this.valeur = null;
    this.tentative = 0;
    this.guess = null;
    this.gameStarted = false;
    this.gameFinished = false;
  }
}
