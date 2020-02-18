import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {faCog} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-edit-chaussure',
  templateUrl: './edit-chaussure.component.html',
  styleUrls: ['./edit-chaussure.component.css']
})
export class EditChaussureComponent implements OnInit {
  chaussure : Chaussure;
  types : string[];
  marques : string[];
  isLoading: boolean;
  faCog = faCog;
  constructor(private chaussureService : ChaussureService, private route : ActivatedRoute,private router : Router, private toastr : ToastrService) { }

  ngOnInit() {

    this.marques = this.chaussureService.marques;
    this.types = this.chaussureService.types;
    this.isLoading = true;
    this.chaussureService.getChaussureById(+this.route.snapshot.paramMap.get('id'))
    .subscribe((data : Chaussure)=>{
      this.chaussure= data;
      this.isLoading = false;
    });
  }
  onSubmit(){
    this.chaussureService.editChaussure(this.chaussure).subscribe(data => {
      this.toastr.success("Votre chaussure a été bien");
      this.router.navigate(['/chaussures']);
      });
    
  }

}
