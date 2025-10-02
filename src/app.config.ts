import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import Aura from '@primeuix/themes/aura';
import { JwtInterceptor } from '@/core/interceptors/jwt.interceptor';
import { HttpErrorsInterceptor } from '@/core/interceptors/httperrors.interceptor';
import { LanguageInterceptor } from '@/core/interceptors/language.interceptor';


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch(), withInterceptorsFromDi()),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } }),
        importProvidersFrom(
            TranslateModule.forRoot({
                loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
                }
      })),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LanguageInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'it-IT' }
    ]
};
export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
   return new TranslateHttpLoader();
}
//   return new TranslateHttpLoader(http, 'https://mydomain.com/i18n/', '.json');
