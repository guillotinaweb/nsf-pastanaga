import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    SchemaFormModule,
    WidgetRegistry,
    SchemaValidatorFactory,
    ZSchemaValidatorFactory,
} from 'ngx-schema-form';

import {
    GrangeFormModule,
    GrangeFormWidgetRegistry,
} from '../../projects/grange-form/src/public_api';
import * as en from '../assets/i18n/en.json';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        SchemaFormModule.forRoot(),
        GrangeFormModule,
    ],
    providers: [
        { provide: WidgetRegistry, useClass: GrangeFormWidgetRegistry },
        {
            provide: SchemaValidatorFactory,
            useClass: ZSchemaValidatorFactory,
        },
        {provide: 'LANG', useValue: 'en_US'},
        {provide: 'TRANSLATIONS', useValue: {
            'en_US': {...en} as any,
        }},
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
