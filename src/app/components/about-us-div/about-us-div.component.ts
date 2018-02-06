import { Component, OnInit } from '@angular/core';
import { ResumeService, Resume } from '../../services/resume.service';

@Component({
  selector: 'app-about-us-div',
  templateUrl: './about-us-div.component.html',
  styleUrls: ['./about-us-div.component.css']
})
export class AboutUsDivComponent implements OnInit {

  resume:Resume[] = [];
  invert:String = "";

  constructor(
    private _resumeService:ResumeService
  ) { }

  ngOnInit() {
    this.resume = this._resumeService.getResume();
  }

}
