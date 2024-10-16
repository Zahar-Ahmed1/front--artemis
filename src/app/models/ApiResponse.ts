import {ClientModel} from "./client.model";

export interface ApiResponse{
  _embedded: {
    clients: [];
  };
  _links:any
  page:any;
}
