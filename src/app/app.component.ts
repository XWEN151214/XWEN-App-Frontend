import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { HomeComponent } from "./justlink/home/home.component";
import { FooterComponent } from './justlink/footer/footer.component';
import { ResponseComponent } from "./justlink/response/response.component";
import { HelpComponent } from './justlink/help/help.component';
import { AppRoutingModule } from './app-routing';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            HomeComponent, 
            FooterComponent, 
            ResponseComponent,
            AppRoutingModule,
            HelpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  title = 'JustLink';
}
