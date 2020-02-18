import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-chaussure',
  templateUrl: './add-chaussure.component.html',
  styleUrls: ['./add-chaussure.component.css']
})
export class AddChaussureComponent implements OnInit {
  chaussure : Chaussure;
  types : string[];
  marques : string[];
  isLoading : boolean;
  
  constructor(private chaussureService : ChaussureService, private router : Router,private toastr: ToastrService) { }


  ngOnInit() {
    this.marques = this.chaussureService.marques;
    this.chaussure = new Chaussure();
    this.types = this.chaussureService.types;
    this.marques = this.chaussureService.marques;
  }

  onSubmit(){
    this.chaussureService.addChaussure(this.chaussure).subscribe(data => {
      this.toastr.success("Votre chaussure a été bien ajouté!!");
      this.router.navigate(['/chaussures']);
      });
    
  }


}
