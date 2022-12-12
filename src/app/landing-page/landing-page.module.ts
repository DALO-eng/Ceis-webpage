import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    DataViewModule,
    ButtonModule,
  ],
})
export class LandingPageModule {}
