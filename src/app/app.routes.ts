import { Routes } from '@angular/router';
import {ClientListComponent} from "./client-list/client-list.component";
import {AddClientComponent} from "./add-client/add-client.component";
import {EditeClientComponent} from "./edite-client/edite-client.component";
import {ContactlistComponent} from "./contactlist/contactlist.component";
import {AddcontactComponent} from "./addcontact/addcontact.component";
import {EditeContactComponent} from "./edite-contact/edite-contact.component";
import {LettreListComponent} from "./lettre-list/lettre-list.component";
import {AddLettreComponent} from "./add-lettre/add-lettre.component";
import {EditeLettreComponent} from "./edite-lettre/edite-lettre.component";
import {TicketGeneratorComponent} from "./ticket-generator/ticket-generator.component";
import {LoginComponent} from "./login/login.component";
import {TicketListComponent} from "./ticket-list/ticket-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ForbiddedComponent} from "./forbidden/forbidded.component";
import {PaysListComponent} from "./pays-list/pays-list.component";
import {VilleListComponent} from "./ville-list/ville-list.component";
import {StatusListComponent} from "./status-list/status-list.component";
import {CiviliteListComponent} from "./civilite-list/civilite-list.component";
import {CommercialeListComponent} from "./commerciale-list/commerciale-list.component";
import {AddCommercialeComponent} from "./add-commerciale/add-commerciale.component";
import {AddVilleComponent} from "./add-ville/add-ville.component";
import {AddPaysComponent} from "./add-pays/add-pays.component";
import {AddCiviliteComponent} from "./add-civilite/add-civilite.component";
import {FonListComponent} from "./fon-list/fon-list.component";
import {AddFonComponent} from "./add-fon/add-fon.component";
import {AuthGuard} from "./guards/auth.guard";
import {AddStatutComponent} from "./add-statut/add-statut.component";

export const routes: Routes = [
  {path : "", redirectTo : "login", pathMatch : "full"},
  {path: "login" , component : LoginComponent},
  {path: "admin" , component : ForbiddedComponent,
    canActivate : [AuthGuard] ,
    children : [
      {path: "clients", component: ClientListComponent},
      {path: "pays", component: PaysListComponent},
      {path: "villes", component: VilleListComponent},
      {path: "status", component: StatusListComponent},
      {path: "ajouter-status", component: AddStatutComponent},
      {path: "commerciales", component: CommercialeListComponent},
      {path: "civilites", component: CiviliteListComponent},
      {path: "ajouter-client", component : AddClientComponent},
      {path: "edite-client/:id" , component : EditeClientComponent},
      {path: "contacts", component: ContactlistComponent},
      {path: "ajouter-contact", component : AddcontactComponent},
      {path: "edite-contact/:id" , component : EditeContactComponent},
      {path: "lettres", component: LettreListComponent},
      {path: "ajouter-lettre", component : AddLettreComponent},
      {path: "edite-lettre/:id" , component : EditeLettreComponent},
      {path: "ticket" , component : TicketGeneratorComponent},
      {path: "tickets" , component : TicketListComponent},
      {path: "dashboard" , component : DashboardComponent},
      {path: "ajouter-commerciale", component: AddCommercialeComponent},
      {path: "ajouter-ville", component: AddVilleComponent},
      {path: "ajouter-pays", component: AddPaysComponent},
      {path: "ajouter-civilite", component: AddCiviliteComponent},
      {path: "metiers", component: FonListComponent},
      {path: "ajouter-metier", component: AddFonComponent},
    ]},
];
