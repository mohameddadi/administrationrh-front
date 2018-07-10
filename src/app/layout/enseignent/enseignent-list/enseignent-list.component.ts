import { Component, OnInit } from '@angular/core';
import { EnseignentService} from './../enseignent.service';
@Component({
  selector: 'app-enseignent-list',
  templateUrl: './enseignent-list.component.html',
  styleUrls: ['./enseignent-list.component.css']
})
export class EnseignentListComponent implements OnInit {

  private enseignentsList : any = [];

  constructor(private enseignentService: EnseignentService) {
    console.log("  EnseignentListComponent is loaded !! ")
   }

  ngOnInit() {
    this.getAllEnseignents();
  }

  getAllEnseignents(){
    this.enseignentService.findAll().subscribe(response=>{
      this.enseignentsList = response;
      console.log("  this.enseignentsList " ,  this.enseignentsList)
    },
    err => {
        console.log(err);
      })
  }

}
