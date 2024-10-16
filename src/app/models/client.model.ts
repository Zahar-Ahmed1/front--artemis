import {PaysModel} from "./pays.model";
import {CommercialeModel} from "./commerciale.model";
import {VilleModel} from "./ville.model";
import {StatutModel} from "./statut.model";
import {ContactModel} from "./contact.model";

export class ClientModel {
  idClient?: number;
  nom?: string;
  statut?: StatutModel;
  typeLivraison?: string;
  commerciale?: CommercialeModel;
  adresse?: string;
  pays?: PaysModel;
  ville?: VilleModel ;
  contact!: ContactModel[]
}
