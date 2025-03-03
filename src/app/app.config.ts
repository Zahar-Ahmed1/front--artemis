import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {AuthGuard} from "./guards/auth.guard";
import {provideCharts, withDefaultRegisterables} from "ng2-charts";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
  provideHttpClient(withFetch()), AuthGuard, provideCharts(withDefaultRegisterables())]
};
