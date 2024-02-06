import { Component, OnInit } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import quizQuestions from '../../../assets/data/quiz-questions.json';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [TuiButtonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  title: string = '';
  questions: any[] = [];
  question: any;
  questionIndex: number = 0;
  answers: string[] = [];
  results: any;
  result: string = '';
  finish: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.title = quizQuestions.title;
    this.questions = quizQuestions.questions;
    this.results = quizQuestions.results;
    console.log(this.questions);
    this.loadQuestion();
  }

  onClick(event: MouseEvent, option: any): void {
    this.answers.push(option.alias);

    // finish condition
    this.finish = this.isFinish();
    if (this.finish) {
      this.loadResult();
    }

    this.loadQuestion();
  }

  isFinish(): boolean {
    return this.questionIndex == this.questions.length;
  }

  loadQuestion(): void {
    this.question = this.questions[this.questionIndex];
    this.questionIndex++;
  }

  loadResult(): void {
    const result = this.answers.reduce((previous, current, i, arr) => {
      if (
        arr.filter((item) => item === previous).length >
        arr.filter((item) => item === current).length
      ) {
        return previous;
      } else {
        return current;
      }
    });

    this.result = this.results[result as keyof typeof this.results];
  }
}
