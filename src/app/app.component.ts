import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private getData: DataService) { }
  faqList: any;
  faqListCopy: any;
  editQ = [];
  editA = [];

  ngOnInit() {
    window.addEventListener('beforeunload', (e) => {
      const confirmationMessage = '\o/';
      (e || window.event).returnValue = confirmationMessage;
      return confirmationMessage;
    });
    this.getDatafromJson();
  }

  getDatafromJson() {
    this.getData.getData().subscribe(res => {
      this.faqList = res;
      this.faqListCopy = JSON.stringify(res);
    });
  }

  cancelEditing() {
    this.faqList = JSON.parse(this.faqListCopy);
    this.editQ = [];
    this.editA = [];
  }

  objectEditedCheck(obj) {
    return this.faqListCopy.indexOf(JSON.stringify(obj)) !== -1 ? true : false;
  }

  submit() {
    this.editQ = [];
    this.editA = [];
    this.getData.postData(this.faqList).subscribe(res => {
      alert('Data posted Successfully');
      this.faqList = JSON.parse(this.faqListCopy);
    });
  }
}
