import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ActivatedRoute, Router } from '@angular/router';
import {faCog} from '@fortawesome/free-solid-svg-icons'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chaussure-detail',
  templateUrl: './chaussure-detail.component.html',
  styleUrls: ['./chaussure-detail.component.css']
})
export class ChaussureDetailComponent implements OnInit {
  chaussure : Chaussure;
  isLoading: boolean;
  faCog = faCog;
  chaussures: Chaussure[];

  constructor(private chaussureService : ChaussureService, private route : ActivatedRoute,private router : Router,private toastr : ToastrService) { }

  ngOnInit() {
    this.isLoading=true;
    this.chaussureService.getChaussureById(+this.route.snapshot.paramMap.get('id'))
    .subscribe((data : Chaussure)=>{
      this.chaussure= data;
      this.isLoading = false;
    });
    
  }
  retirerChaussure(chaussure){
    this.chaussureService.deleteChaussure(chaussure.id).subscribe(then =>{
      this.chaussureService.getAllChaussures().subscribe((data : Chaussure[])=> {
        this.chaussures = data;
        this.isLoading = false;
        this.toastr.success(`La chaussure ${chaussure.id} a été bien enlevée du stock`);
        this.router.navigate(['/chaussures']);
      });
     });
  }

}
