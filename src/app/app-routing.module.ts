import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { SheetComponent } from './sheet/sheet.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
{ path: 'list', component: ListComponent },
{ path: 'us', component: AboutUsComponent },
{ path: 'login', component: LoginComponent},
{ path: 'search', component: SearchComponent },
{ path: 'sheet', component: SheetComponent},

{ path: '', redirectTo: '/list', pathMatch:'full'},
{ path:'**', component:PageNotFoundComponent}
];
@NgModule({
exports: [RouterModule],
imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

