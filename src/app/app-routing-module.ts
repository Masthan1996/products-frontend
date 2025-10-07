import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { TaskCreate } from './pages/task-create/task-create';
import { TaskDetail } from './pages/task-detail/task-detail';
import { TaskList } from './pages/task-list/task-list';
import { AuthGuard } from './guard/auth.guard';
import { GoSearch } from './pages/go-search/go-search';

const routes: Routes = [
  { path: '', component: TaskList, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
   { path: 'create', component: TaskCreate, canActivate: [AuthGuard] },
      { path: 'task/:id', component: TaskDetail, canActivate: [AuthGuard] },
//       { path: 'admin', component: AdminApproveComponent, canActivate: [AuthGuard] },
      { path: 'geo', component: GoSearch, canActivate: [AuthGuard] },
//       { path: '**', redirectTo: '' }
];

// { path: '', component: TaskListComponent, canActivate: [AuthGuard] },
//       { path: 'login', component: LoginComponent },
//       { path: 'register', component: RegisterComponent },
//       { path: 'create', component: TaskCreateComponent, canActivate: [AuthGuard] },
//       { path: 'task/:id', component: TaskDetailComponent, canActivate: [AuthGuard] },
//       { path: 'admin', component: AdminApproveComponent, canActivate: [AuthGuard] },
//       { path: 'geo', component: GeoSearchComponent, canActivate: [AuthGuard] },
//       { path: '**', redirectTo: '' }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
