import { Component } from '@angular/core';

@Component({
  selector: 'app-birth-calc',
  templateUrl: './birth-calc.component.html',
  styleUrls: ['./birth-calc.component.css']
})
export class BirthCalcComponent {
  age: number | null = null;
  birthYear: number | null = null;
  message: string = '';

  calculateBirthYear(): void {
    if (this.age !== null && this.age > 0) {
      const currentYear = new Date().getFullYear();
      this.birthYear = currentYear - this.age;

      if (this.age >= 13 && this.age <= 21) {
        this.message = 'You are a teenager';
      } else if (this.age > 21) {
        this.message = 'You are an adult';
      } else {
        this.message = '';
      }
    } else {
      this.birthYear = null;
      this.message = 'Please enter a valid age';
    }
  }
}
