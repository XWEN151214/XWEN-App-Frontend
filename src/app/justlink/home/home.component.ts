import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GencontentService } from '../../services/gencontent.service';
import { faQuestion, faGlobe, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SpinnerComponent } from '../../utility/spinner/spinner.component';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})


export class HomeComponent implements OnInit{

  faQuestion = faQuestion;
  faGlobe = faGlobe;
  faArrowRight = faArrowRight;
  content:string = '';
  title:string = '';
  showMainSelect = false;
  showSpinner = false;
  doShowElements = [false, false, false];
  
  constructor(private genContent:GencontentService, private router:Router, private element:ElementRef) {}

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


  async scrapeContent(link:any)
  {
    this.showSpinner = true;
    const inputField = this.element.nativeElement.querySelector('#inputLink');
    const queryString = new URLSearchParams(link).toString().replace("=", "");
    const fullUrl = `http://127.0.0.1:2000/get-content?link=${queryString}`;
    try
    {

      const response = await fetch(fullUrl);
      const content = await response.json();
      if(content.Error)
      {
        inputField.className = '';
        inputField.classList.add('link-error');
        inputField.value = "The link must be invalid!";
      }
      else
      {
        if(inputField.className === 'link-error')
        {
          inputField.className = '';
          inputField.classList.add('link');
        }
        this.content = content.content;
        this.title = content.title;
        this.showSpinner = false;
        this.showMainSelect = true;
      }
      
    }
    catch(error)
    {
      console.log(error);
    }
  }

  showElements(className:string)
  {
    this.showMainSelect = false;
    if(className === 'report')
    {
      this.doShowElements[0] = true;
    }
    else if(className === 'summary')
    {
      this.doShowElements[1] = true;
    }
    else
    {
      this.doShowElements[2] = true;
    }
    AOS.refresh();
  }

  async genReport(content:string, title:string, format:string, count:string, tone:string)
  {
    this.doShowElements[0] = false;
    this.showSpinner= true;
    const queryFormat = new URLSearchParams(format).toString().replace("=", "");
    const queryTitle = new URLSearchParams(title).toString().replace("=", "");
    const queryCount = new URLSearchParams(count).toString().replace("=", "");
    const queryTone = new URLSearchParams(tone).toString().replace("=", "");
    const queryContent = new URLSearchParams(content).toString().slice(0, -1);
    const fullUrl = `http://127.0.0.1:2000/gen/report?content=${queryContent}&title=${queryTitle}&format=${queryFormat}&count=${queryCount}&tone=${queryTone}`;
    try
    {
      const response = await fetch(fullUrl);
      const content = await response.json();
      this.genContent.changeData(content.report, "Report");
      this.showSpinner = false;
      this.router.navigate(['/justlink/response']);
    }
    catch(error)
    {
      console.log(error);
    }
  }

  async genSummary(content:string, title:string, count:string)
  {
    this.doShowElements[1] = false;
    this.showSpinner = true;
    const queryContent = new URLSearchParams(content).toString().replace("=", "");
    const queryTitle = new URLSearchParams(title).toString().replace("=", "");
    const queryCount = new URLSearchParams(count).toString().replace("=", "");
    const fullUrl = `http://127.0.0.1:2000/gen/summary?content=${queryContent}&title=${queryTitle}&count=${queryCount}`;
    try
    {
      const response = await fetch(fullUrl);
      const content = await response.json();
      this.genContent.changeData(content.summary, "Summary");
      this.showSpinner = false;
      this.router.navigate(['/justlink/response']);

    }
    catch(error)
    {
      console.log(error);
    }
  }

  async genBullets(content:string, title:string, count:string)
  {
    this.doShowElements[2] = false;
    this.showSpinner = true;
    const queryCount = new URLSearchParams(count).toString().replace("=", "");
    const queryTitle = new URLSearchParams(title).toString().replace("=", "");
    const queryContent = new URLSearchParams(content).toString().replace("=", "");
    const fullUrl = `http://127.0.0.1:2000/gen/bullets?content=${queryContent}&title=${queryTitle}&count=${queryCount}`;
    try
    {
      const response = await fetch(fullUrl);
      const content = await response.json();
      this.genContent.changeData(content.bullets, "Bullets");
      this.showSpinner = false;
      this.router.navigate(['/justlink/response']);

    }
    catch(error)
    {
      console.log(error);
    }
  }
}

