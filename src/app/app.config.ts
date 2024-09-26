import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from "@angular/common/http";
import { provideStore } from '@ngrx/store';

import { provideEffects } from '@ngrx/effects';

import {tablesReducers} from "./store/tables-store/tables.reducers";
import {TablesEffects} from "./store/tables-store/tables.effects";
import {tableReducers} from "./store/table-store/table.reducers";

// Opcjonalnie do debugowania

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideStore({ tables: tablesReducers ,table:tableReducers}), // Rejestracja reduktora
    provideEffects([TablesEffects]),        // Rejestracja efektów

  ],
};
