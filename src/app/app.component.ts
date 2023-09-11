import { Component } from '@angular/core';
import { PositionsCSSComponent } from './components/positions-css/positions-css.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [PositionsCSSComponent]
})
export class AppComponent {
  title = 'CSS_Angular';
}
