import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { ClientModel } from '../models/client.model';
import { PaysModel } from '../models/pays.model';
import { CommercialeModel } from '../models/commerciale.model';
import { VilleModel } from '../models/ville.model';
import { StatutModel } from '../models/statut.model';
import { CiviliteModel } from '../models/civilite.model';
import { MetierModel } from '../models/metier.model';
import { LettreModel } from '../models/lettre.model';
import { ContactModel } from '../models/contact.model';
import { ChartOptions, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { NgForOf } from "@angular/common";

interface ChartDataItem {
  label: string;
  data: number[]; // Données pour les graphiques circulaires
  backgroundColor: string[];
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [
    BaseChartDirective,
    NgForOf
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contacts!: ContactModel[];
  clients: ClientModel[] = [];
  pays!: PaysModel[];
  commerciale!: CommercialeModel[];
  ville!: VilleModel[];
  status!: StatutModel[];
  civilites!: CiviliteModel[];
  met!: MetierModel[];
  letters!: LettreModel[];

  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'red' // Change la couleur des labels de la légende en rouge
        }
      }
    }
  };

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.initializeChartData();
    this.fetchData();
  }

  initializeChartData() {
    const chartConfigs: ChartDataItem[] = [
      { label: 'Clients', data: [], backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)'] },
      { label: 'Contacts', data: [], backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)'] },
      { label: 'Lettres', data: [], backgroundColor: ['rgba(255, 206, 86, 0.2)', 'rgba(255, 206, 86, 1)'] },
      { label: 'Commerciales', data: [], backgroundColor: ['rgba(153, 102, 255, 0.2)', 'rgba(153, 102, 255, 1)'] },
      { label: 'Villes', data: [], backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 1)'] },
      { label: 'Pays', data: [], backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)'] },
      { label: 'Statuts', data: [], backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 99, 132, 1)'] },
      { label: 'Civilités', data: [], backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(54, 162, 235, 1)'] },
      { label: 'Métiers', data: [], backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 1)'] }
    ];

    this.doughnutChartData.datasets = chartConfigs.map(config => ({
      label: config.label,
      data: config.data,
      backgroundColor: config.backgroundColor
    }));
  }

  fetchData() {
    const observables = [
      this.dashboardService.ClientList().subscribe(cl => {
        this.clients = cl;
        this.updateChartData(0, this.clients.length); // Exemple de nombre total de clients
      }),
      this.dashboardService.ContactList().subscribe(c => {
        this.contacts = c;
        this.updateChartData(1, this.contacts.length); // Exemple de nombre total de contacts
      }),
      this.dashboardService.LetterList().subscribe(l => {
        this.letters = l;
        this.updateChartData(2, this.letters.length); // Exemple de nombre total de lettres
      }),
      this.dashboardService.CommercialeList().subscribe(ml => {
        this.commerciale = ml;
        this.updateChartData(3, this.commerciale.length); // Exemple de nombre total de commerciales
      }),
      this.dashboardService.VilleListe().subscribe(v => {
        this.ville = v;
        this.updateChartData(4, this.ville.length); // Exemple de nombre total de villes
      }),
      this.dashboardService.PaysList().subscribe(p => {
        this.pays = p;
        this.updateChartData(5, this.pays.length); // Exemple de nombre total de pays
      }),
      this.dashboardService.StatutList().subscribe(s => {
        this.status = s;
        this.updateChartData(6, this.status.length); // Exemple de nombre total de statuts
      }),
      this.dashboardService.CiviliteList().subscribe(c => {
        this.civilites = c;
        this.updateChartData(7, this.civilites.length); // Exemple de nombre total de civilités
      }),
      this.dashboardService.CommeList().subscribe(m => {
        this.met = m;
        this.updateChartData(8, this.met.length); // Exemple de nombre total de métiers
      })
    ];

    // Exécutez tous les observables
    Promise.all(observables).then(() => {
      // Les données sont déjà mises à jour dans updateChartData pour chaque type
    });
  }

  updateChartData(index: number, count: number) {
    // Exemple de mise à jour avec une valeur de comptage simple
    this.doughnutChartData.labels = ['Total'];
    this.doughnutChartData.datasets[index] = {
      ...this.doughnutChartData.datasets[index],
      data: [count]
    };
  }
  public lineChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Clients',
        data: [10, 20, 30, 40, 50, 60], // Un tableau de nombres
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: true
      },
      {
        label: 'Contacts',
        data: [15, 25, 35, 45, 55, 65], // Un autre tableau de nombres
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: true
      }
    ]
  };


}
