import { Component, ElementRef, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQuestion, faRedo} from '@fortawesome/free-solid-svg-icons';
import { GencontentService } from '../../services/gencontent.service';
import * as AOS from 'aos';
import { marked } from 'marked'


@Component({
  selector: 'app-response',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './response.component.html',
  styleUrl: './response.component.scss',
})
export class ResponseComponent implements OnInit {

  faQuestion = faQuestion;
  faRedo = faRedo
  contentTitle:any = ""; 
  content:any = "";

  constructor(private genContent:GencontentService, private elementRef:ElementRef) {}
  
  ngOnInit()
  {
    if(localStorage)
    {
      this.genContent.currentContent.subscribe
      (
        (data)=>
        {
          if(data != '')
          {
            localStorage.setItem('content', data)
          }
        }

      );
      this.genContent.contentTitle.subscribe
      (
        (title)=>
        {
          if(title != '')
          {
            localStorage.setItem('title', title)
          }
        }
      );
      const ele = this.elementRef.nativeElement.querySelector("#myContent");
      ele.innerHTML = marked(String(localStorage.getItem('content')));
      this.contentTitle = localStorage.getItem('title'); 
    }

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
    );
  }


  ngAfterViewInit() 
  {
    AOS.refresh();
  }

  clearStorage()
  {
    localStorage.clear();
  }
}
