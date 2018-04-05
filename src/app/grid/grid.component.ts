import { Component, NgZone, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  message = '';
  dtOptions: any = {};
  persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: HttpClient, private zone: NgZone,private route: ActivatedRoute,
    private location: Location, private router : Router) { }

  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.firstName;
    this.router.navigate(['/gridElement']);
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType : 'full_numbers',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }],// Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // Configure the buttons
      buttons: [
        /*'columnsToggle',
        'colvis',
        'copy',*/
        'print',
        'excelHtml5',
        'csvHtml5',
        'pdfHtml5',
        {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ],
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        // Unbind first in order to avoid any duplicate handler
        // (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          console.log(data);
          
          self.someClickHandler(data);
        });
        return row;
      },
       
    };

      this.http.get('https://raw.githubusercontent.com/l-lin/angular-datatables/master/demo/src/data/data.json')
      .toPromise()
      .then((res)=>{
        this.persons = res['data'];
        console.log(res['data']);
        
        this.dtTrigger.next();
      })
  }

}



    /*this.http.get('https://raw.githubusercontent.com/l-lin/angular-datatables/master/demo/src/data/data.json')
      .map(this.extractData)
      .subscribe(persons => {
        this.persons = persons['data'];
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });*/