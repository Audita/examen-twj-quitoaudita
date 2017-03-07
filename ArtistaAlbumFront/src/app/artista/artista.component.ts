import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURLService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  title: string = "Bienvenido al Modulo de Artistas";
  nuevoArtista = {};
  artistas = [];
  disabledButtons = {
    NuevoArtistaFormSubmitButton: false
  };
  constructor(private _http: Http,
              private _masterURL: MasterURLService) {
  }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Artista")
      .subscribe(
        (res: Response) => {
          this.artistas = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }

  crearArtista(formulario:NgForm) {
    this.disabledButtons.NuevoArtistaFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Artista", {
      nombre: formulario.value.nombre,
      estilo: formulario.value.estilo,
      paisResidencia: formulario.value.paisResidencia
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.artistas.push(res.json());
        this.nuevoArtista = {};
        this.disabledButtons.NuevoArtistaFormSubmitButton= false;
      },
      (err) => {
        this.disabledButtons.NuevoArtistaFormSubmitButton = false;
        console.log("Ocurrio un err or", err);
      },
      () => {
      }
    );
  }

  borrarArtista(id: number) {
    this._http.delete(this._masterURL.url + "Artista/" + id)
      .subscribe(
        (res) => {
          let artistaBorrado = res.json();
          this.artistas = this.artistas.filter(value => artistaBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  actualizarArtista(artista: any, formulario: NgForm) {
    let parametos = {
      nombre: artista.nombre,
      estilo: artista.estilo,
      paisResidencia: artista.paisResidencia
    };
    this._http.put(this._masterURL.url + "Artista/" + artista.id, parametos)
      .subscribe(
        (res: Response) => {
          artista.formularioCerrado = !artista.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }

}
