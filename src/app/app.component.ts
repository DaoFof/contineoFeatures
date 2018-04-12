import { Component,TemplateRef} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contineo Features';
  public modalRef : BsModalRef;
  constructor(private modalService: BsModalService){

  }
  public openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
}
