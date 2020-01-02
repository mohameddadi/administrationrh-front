import { Component, OnInit, OnDestroy  } from '@angular/core';
import { EnseignentService} from './../enseignent.service';
import { ActivatedRoute } from '@angular/router';
import { EnseignentModel } from './enseignent-model';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-enseignent-create',
  templateUrl: './enseignent-create.component.html',
  styleUrls: ['./enseignent-create.component.css']
})
export class EnseignentCreateComponent implements OnInit {
  id: number;
  private sub: any;
  private enseignent : EnseignentModel;
  private ecoles = [
        {id: 1, name: 'Vilnius'},
        {id: 2, name: 'Kaunas'},
        {id: 3, name: 'Pabradė'}
  ];

  selectedCityId : any;
  enseignentForm = new FormGroup ({
    name: new FormControl(),
    lastname: new FormControl(),
    hiringDate : new FormControl(),
    titre : new FormControl(),
    phone :new FormControl(),
	  uniqueIdentier : new FormControl(),
	  birthday:new FormControl(),
	  numberOfChildren:new FormControl(),
    familySituation:new FormControl(),
    nbrWorkedHoures:new FormControl(),
    ecole:new FormControl(),
  });

  exampleData : any;

  constructor(private enseignentService: EnseignentService,private route: ActivatedRoute) { }

  ngOnInit() {
    /* this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 

      this.getEnseignentById(this.id); 
   }
  );*/


  this.exampleData = [
    {
      id: 'basic1',
      text: 'Basic 1'
    },
    {
      id: 'basic2',
      disabled: true,
      text: 'Basic 2'
    },
    {
      id: 'basic3',
      text: 'Basic 3'
    },
    {
      id: 'basic4',
      text: 'Basic 4'
    }
  ];
    
  }
  
  getEnseignentById(id){
    this.enseignentService.findEnseignentById(id).subscribe(response=>{
      this.enseignent = response;
      console.log("  this.enseignent " ,  this.enseignent)
    },
    err => {
        console.log(err);
      })
  }

  onSubmit(value){
    console.log("form value == ",value);
    value.hiringDate = value.hiringDate.jsdate; 
    this.enseignentService.addEnseignent(value).subscribe(response=>{

    }),
    err => {
        console.log(err);
    }
    
  }

}
