import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { TaskList } from './pages/task-list/task-list';
import { TaskCreate } from './pages/task-create/task-create';
import { TaskDetail } from './pages/task-detail/task-detail'; 
import { AuthService } from './auth';
import { ApiService } from './services/api';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { GoSearch } from './pages/go-search/go-search';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    TaskList,
    TaskCreate,
    TaskDetail,
    GoSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    AuthService,
    ApiService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
