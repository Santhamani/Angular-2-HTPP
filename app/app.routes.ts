
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component'

export const routes : Routes = [
    // {path:'',component:AppComponent},
    {path:'observable',component: ObservableComponent },
    {path:'promise',component: PromiseComponent },
    {path:'', redirectTo:'/observable', pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
];
export const routing = RouterModule.forRoot(routes);