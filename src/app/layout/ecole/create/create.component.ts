import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  ecoleForm = new FormGroup ({
    name: new FormControl(),
    priority: new FormControl(),
    ntype: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
