import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobBoardComponent } from "./job-board/job-board.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, JobBoardComponent]
})
export class AppComponent {
  title = 'job-board';
}
