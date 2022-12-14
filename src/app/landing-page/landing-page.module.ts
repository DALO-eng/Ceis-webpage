import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DividerModule } from 'primeng/divider';

import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    MainPageComponent,
    LayoutComponent,
    ProductsComponent,
    ServicesComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    DataViewModule,
    ButtonModule,
    MenubarModule,
    DividerModule,
    FullCalendarModule,
  ],
})
export class LandingPageModule {}
