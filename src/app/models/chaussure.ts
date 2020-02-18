export class Chaussure {
    id: number;
    nom: string;
    marque: string
    type: string;
    taille: number;
   dateEntreStock: Date;
   constructor(id =null,nom =null,marque=null,type=null,taille=null,date=null){
       this.id=id;
       this.nom=nom;
       this.marque=marque;
       this.type=type;
       this.dateEntreStock=date;
   }
}

