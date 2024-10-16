
import {ClientModel} from "./client.model";
import {MetierModel} from "./metier.model";
import {CiviliteModel} from "./civilite.model";
import {FonModel} from "./fon.model";

export class ContactModel{
  id? : number;
  prenom?: string;
  nom! : string;
  adresseLivraison? : string;
  metier? : FonModel
  civilite?: CiviliteModel
  email? : string;
  tel? : number;
  client? : ClientModel
}
