import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/index', pathMatch: 'full' },
  { path: 'app', redirectTo: 'app/index', pathMatch: 'full' },
  { path: 'app/index', component: IndexComponent },
  { path: 'app/:appId/view', component: ViewComponent },
  { path: 'app/create', component: CreateComponent },
  { path: 'app/:appId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppInfoRoutingModule { }
