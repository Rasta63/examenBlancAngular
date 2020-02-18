import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/models/chaussure';
import {faCog} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { ChaussureService } from 'src/app/services/chaussure.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-chaussure',
  templateUrl: './chaussure.component.html',
  styleUrls: ['./chaussure.component.css']
})
export class ChaussureComponent implements OnInit {
  chaussures : Chaussure[];
  nbChaussur : number;
  isLoading : boolean;
  faCog = faCog;
  faTrash = faTrash;
  faEdit = faEdit;
  nbChaussure : number;

  constructor(private chaussureService : ChaussureService, private toastr : ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
    this.chaussureService.getAllChaussures().subscribe((data : Chaussure[])=>{
      this.chaussures = data;
      this.nbChaussure = this.chaussures.length;
      this.isLoading = false;
      this.nbChaussure=this.chaussures.length;
    });
  }
  retirerChaussure(chaussure : Chaussure){
  this.chaussureService.deleteChaussure(chaussure.id).subscribe(then =>{
     this.chaussureService.getAllChaussures().subscribe((data : Chaussure[])=> {
       this.chaussures = data;
       this.isLoading = false;
       this.toastr.success(`La chaussure ${chaussure.id} a été bien enlevée du stock`);
     });
    });
  }

}
