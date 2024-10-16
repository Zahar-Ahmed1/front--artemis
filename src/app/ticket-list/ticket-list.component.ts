import { Component, OnInit } from '@angular/core';
import { TicketService } from "../services/ticket.service";
import { TicketModel } from "../models/ticket.model";
import { DatePipe, NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [
    DatePipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticketList: TicketModel[] = []; // Initialisation avec un tableau vide

  constructor(private ticketService: TicketService) {}

  ngOnInit() {

  }


}
