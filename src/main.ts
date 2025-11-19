import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

// Merge providers into appConfig
bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),   // keep existing providers
    provideAnimations(),
    importProvidersFrom(
      ToastrModule.forRoot({
        positionClass: 'toast-top-right',
        timeOut: 3000,
        progressBar: true,
        closeButton: true,
        preventDuplicates: true
      })
    )
  ]
}).catch((err) => console.error(err));
