import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomePageComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, LandingPageRoutingModule, FontAwesomeModule],
})
export class LandingPageModule {}
