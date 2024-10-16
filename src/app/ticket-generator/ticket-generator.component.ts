/*import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { TicketService } from '../services/ticket.service';
import { LettreModel } from '../models/lettre.model';
import { TicketModel } from '../models/ticket.model';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ticket-generator',
  templateUrl: './ticket-generator.component.html',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgForOf
  ],
  styleUrls: ['./ticket-generator.component.css']
})
export class TicketGeneratorComponent implements OnInit {
  clients: ClientModel[] = [];
  selectedClient!: ClientModel;
  letters: LettreModel[] = [];
  selectedLetter!: LettreModel;
  generatedTickets: TicketModel[] = [];

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit() {
    this.ticketService.ClientList().subscribe(c=>{
      this.clients = c;
    })
    this.ticketService.LetterList().subscribe(l=>{
      this.letters = l;
    })
  }
  generateTickets() {
    this.ticketService.generateTickets(this.selectedLetter.id, this.selectedClient.idClient).subscribe(tickets => {
      this.generatedTickets = tickets;
      // Redirigez l'utilisateur vers la page des tickets générés
      this.router.navigate(['/admin/tickets']);
    });
  }
}*/


import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../models/client.model';
import { TicketService } from '../services/ticket.service';
import { LettreModel } from '../models/lettre.model';
import { TicketModel } from '../models/ticket.model';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-ticket-generator',
  templateUrl: './ticket-generator.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    DatePipe,
    NgIf
  ],
  styleUrls: ['./ticket-generator.component.css']
})
export class TicketGeneratorComponent implements OnInit {
  clients: ClientModel[] = [];
  selectedClient!: ClientModel;
  letters: LettreModel[] = [];
  selectedLetter!: LettreModel;
  generatedTickets: TicketModel[] = [];
  ticketHistory: TicketModel[][] = []; // Pour stocker les tickets générés


  constructor(private ticketService: TicketService, private router: Router) {
  }

  ngOnInit() {
    this.ticketService.ClientList().subscribe(c => {
      this.clients = c;
      console.log("Clients:", this.clients);
    });
    this.ticketService.LetterList().subscribe(l => {
      this.letters = l;
      console.log("Letters:", this.letters);
    });
  }

  generateTickets() {
    console.log('Selected Letter:', this.selectedLetter);
    console.log('Selected Client:', this.selectedClient);

    if (this.selectedLetter && this.selectedClient) {
      this.ticketService.generateTickets(this.selectedLetter.id!, this.selectedClient.idClient!).subscribe(tickets => {
        this.generatedTickets = tickets;
        console.log('Tickets générés:', this.generatedTickets);// Vérifiez le contenu ici
      });
    } else {
      alert("Veuillez sélectionner un client et une lettre.");
    }
  }

  imprimer() {
    const printContent = document.createElement('div');
    const dateImpression = new Date().toLocaleString();
    let ticketsHtml = '';

    // Créer un conteneur pour les tickets
    this.generatedTickets.forEach((ticket, index) => {
      ticketsHtml += `
            <div class="ticket-container">
                <div class="ticket">

                    <p>${ticket.civilite}. ${ticket.contacts}</p>
                    <p>${ticket.letter}</p>
                    <p>${ticket.client}</p>
                    <p> ${ticket.addresseLivraison}</p>
                    <p>${ticket.pays}</p>
                </div>
            </div>
        `;
    });

    printContent.innerHTML = `
        <div style="text-align: center;">
            <h1>Liste des Tickets</h1>
            <p>Date d'impression: ${dateImpression}</p>
        </div>
        <div class="tickets-row">
            ${ticketsHtml}
        </div>
        <footer style="text-align: center; margin-top: 2px;">
            <p>Merci d'utiliser notre service !</p>
        </footer>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Impression des Tickets</title>');
      printWindow.document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">');
      printWindow.document.write(`
            <style>
                body { font-family: Arial, sans-serif; }
                .tickets-row { display: flex; flex-wrap: wrap; }
                .ticket-container { width: 50%; box-sizing: border-box; padding: 4px; }
                .ticket {
                    border: 1px solid #ccc;
                    padding: 1px;
                    border-radius: 5px;
                    margin-bottom: 2px;
                    text-align: center; /* Centrer le texte */
                }
                @media print {
                    @page { margin: 20mm; }
                }
            </style>
        `);
      printWindow.document.write('</head><body>');
      printWindow.document.write(printContent.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.focus();

      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 2100);
    } else {
      console.error("La fenêtre d'impression n'a pas pu être ouverte.");
    }
  }


}
