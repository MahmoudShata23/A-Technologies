import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartsComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { TicketComponent } from './ticket/ticket.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QRCodeModule } from 'angularx-qrcode';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    TableComponent,
    TicketComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    NgbModule,
    QRCodeModule,
    TableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
