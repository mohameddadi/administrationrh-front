import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { EcoleService } from '../ecole.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class EcoleCreateComponent implements OnInit {

  ecoleForm = new FormGroup ({
    name: new FormControl(),
    priority: new FormControl(),
    type: new FormControl()
  });

  constructor(private ecoleService: EcoleService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(value) {
    this.ecoleService.addEcole(value).subscribe(response=>{
      console.log('ADD ECOLE response ', response);
      if (response.status == 201) {
        this.router.navigate(['/ecole/list']);
      }
    }),
    err => {
        console.log(err);
    }
  }

}
