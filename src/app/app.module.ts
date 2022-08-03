import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { BannerComponent } from './MyComponent/banner/banner.component';
import { ContactComponent } from './MyComponent/contact/contact.component';
import { CategoryComponent } from './MyComponent/category/category.component';
import { ListComponent } from './MyComponent/list/list.component';


const appRoutes: Routes=[
  {path:'contact', component: ContactComponent}
  



]





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ContactComponent,
    CategoryComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
