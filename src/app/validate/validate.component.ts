import { Component, EventEmitter, Output, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ReboServicesService } from '../services/rebo-services.service'

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {
  @Output() onValidateRecords: EventEmitter<any> = new EventEmitter();
  @Output() Clear: EventEmitter<any> = new EventEmitter();
  @ViewChild('inputFileTaken', { static: false }) InputVar: ElementRef;
  resultResponse: any = [];
  statement: Statement;
  fileToCheck: any;
  constructor(private reboServicesService: ReboServicesService) { }

  ngOnInit() {
  }

  ReadFile(event) {
    this.Clear.emit();
    this.fileToCheck = event.target.files[0];
    console.log(this.fileToCheck);
    const inputFile = <HTMLInputElement>document.getElementById('fileUploaded');
    const fileType = inputFile.value.split('.').pop();
    if (fileType !== "json") {
      this.clearData();
      alert("Invalid File Type");
    }

  }

  submitData() {
    this.reboServicesService.getCustomerProcessor(this.fileToCheck)
      .toPromise().then((res) => {
        console.log(res)
        this.statement = Object.assign(new Statement(), res)
      }).catch((error) => {
        console.log(error)
        if(error.message){
          alert(error.message);
        }
      });
  }

  clearData() {
    this.statement = null
    this.InputVar.nativeElement.value = "";
    this.Clear.emit();
  }

}


export class Statement {
  result: String;
  errorRecords: Array<ErrorRecords>;
}

export class ErrorRecords {
  reference: String;
  accountNumber: string;
}
