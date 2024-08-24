import { Component, ElementRef, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import * as AOS from 'aos';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{

  faFaceBook = faFacebook;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  constructor(){}

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
