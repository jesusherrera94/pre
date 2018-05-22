import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PresupuestosService } from '../app/servicios/presupuestos.service';
import { ProveedoresService } from '../app/servicios/proveedores.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import {GuardService} from './servicios/guard.service';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { AddpressComponent } from './presupuestos/addpress/addpress.component';
import { PresupuestosComponent } from './presupuestos/presupuestos/presupuestos.component';
import { EditpresComponent } from './presupuestos/editpres/editpres.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { InisesComponent } from './autenticacion/inises/inises.component';

//constantes de rutas
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent, canActivate:[GuardService]},
  { path: 'addprovee', component: AddproveeComponent, canActivate:[GuardService]},
  { path: 'addpres', component: AddpressComponent, canActivate:[GuardService]},
  { path: 'presupuestos', component: PresupuestosComponent, canActivate:[GuardService]},
  { path: 'editpres/:id', component: EditpresComponent, canActivate:[GuardService]},
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent },
  { path: '**', component: InicioComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    AddpressComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ProveedoresService,PresupuestosService,AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
