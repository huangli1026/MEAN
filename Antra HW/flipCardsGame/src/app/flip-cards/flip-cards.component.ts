import { Component } from '@angular/core';

@Component({
  selector: 'app-flip-cards',
  templateUrl: './flip-cards.component.html',
  styleUrls: ['./flip-cards.component.css']
})
export class FlipCardsComponent {
  emojis: string[] = ['🐵', '🐶', '🦊', '🐱', '🦁', '🐯', '🐴', '🦄', '🦓', '🦌', '🐮', '🐷', '🐭', '🐹', '🐻', '🐨', '🐼', '🐽', '🐸', '🐰', '🐙'];
  cards: any[] = [];
  flippedCards: any[] = [];
  matchedCards: Set<number> = new Set();
  gameEnded: boolean = false;

  ngOnInit(): void {
    this.setupGame();
  }

  setupGame() {
    this.cards = [];
    this.flippedCards = [];
    this.matchedCards.clear();
    this.gameEnded = false;
    const selectedEmojis = this.getRandomEmojis(8);
    const pairs = [...selectedEmojis, ...selectedEmojis];
    this.cards = pairs.map((emoji, index) => ({ id: index, emoji, flipped: false })).sort(() => Math.random() - 0.5);
    console.log(this.cards)
  }

  getRandomEmojis(count: number): string[] {
    const shuffled = this.emojis.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  flipCard(card: any) {
    if (this.flippedCards.length < 2 && !this.flippedCards.includes(card) && !this.matchedCards.has(card.id)) {
      card.flipped = true;
      this.flippedCards.push(card);
      if (this.flippedCards.length === 2) {
        this.checkMatch();
      }
    }
  }

  checkMatch() {
    const [first, second] = this.flippedCards;
    if (first.emoji === second.emoji) {
      this.matchedCards.add(first.id);
      this.matchedCards.add(second.id);
      this.flippedCards = [];
      if (this.matchedCards.size === this.cards.length) {
        this.gameEnded = true;
      }
    } else {
      setTimeout(() => {
        first.flipped = false;
        second.flipped = false;
        this.flippedCards = [];
      }, 1000);
    }
  }

  playAgain() {
    this.setupGame();
  }
}
