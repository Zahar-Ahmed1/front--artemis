import {LettreModel} from "./lettre.model";
import {ClientModel} from "./client.model";
import {ContactModel} from "./contact.model";
import {PaysModel} from "./pays.model";
import {CiviliteModel} from "./civilite.model";

export class TicketModel{
  idTicket!: number;
  date!: Date;
  client!: ClientModel;
  letter! : LettreModel;
  contacts!: ContactModel;
  addresseLivraison!: ContactModel;
  pays!: PaysModel;
  civilite!: CiviliteModel;

}
