import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent implements OnInit{

  faQuestion = faQuestion;

  ngOnInit(): void 
  {
    AOS.init
    (
      {
        offset: 200, 
        duration: 600, 
        easing: 'ease-in-out',
        delay: 100,
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',  
      }
    )
  }

  ngAfterViewInit() 
  {
    AOS.refresh();
  }

}
