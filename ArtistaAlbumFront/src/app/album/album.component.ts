import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import {MasterURLService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private _parametros: any;
  albumes=[];
  nuevoAlbum= {};
  disabledButtons={
    NuevoAlbumFormSubmitButton:false
  };
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http:Http,
              private _masterURL:MasterURLService) {
  }

  ngOnInit() {

    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        this._http.get(this._masterURL.url+'Album?idArtista='+this._parametros.idArtista)
          .subscribe(
            (res:Response)=>{
              this.albumes = res.json();
            },
            (err)=>{
              console.log(err)
            }
          )

      });

  }
  crearAlbum(formulario:NgForm){
    let album = {
      nombre: formulario.value.nombre,
      fechaLanzamiento: formulario.value.fechaLanzamiento,
      URLPortada: formulario.value.URLPortada,
      idArtista:this._parametros.idArtista
    };
    this._http.post(this._masterURL.url+'Album',album)
      .subscribe(
        (res:Response)=>{
          this.albumes.push(res.json());
          this.nuevoAlbum = {};
          this.disabledButtons.NuevoAlbumFormSubmitButton=false;
        },
        (err)=>{
          console.log(err)
        }
      )
  }

  borrarAlbum(id:number){
    this._http.delete(this._masterURL.url+'Album/'+id).subscribe(
      (res)=>{
        let albumBorrado=res.json();
        this.albumes=this.albumes.filter(value=>albumBorrado.id!=value.id);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  actualizarAlbum(album:any, id:number){
    let parametros={
      nombre: album.nombre,
      fechaLanzamiento: album.fechaLanzamiento,
      URLPortada: album.URLPortada

    };
    this._http.put(this._masterURL.url+"Album/"+id,parametros).subscribe(
      (res:Response)=>{
        album.formularioCerrado=!album.formularioCerrado;
        console.log("Respuesta:",res.json());
      },
      (err) => {
        console.log("Error: ", err);
      }
    );
  }

}
