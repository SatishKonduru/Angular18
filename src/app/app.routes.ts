import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { IfComponent } from './components/if/if.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { SelectedCourseDetailsComponent } from './components/selected-course-details/selected-course-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { authGuard, authGuardChild } from './guards/auth.guard';
import { unsavedPageGuard } from './guards/unsaved-page.guard';
import { canMatchAdminGuard, canMatchUserGuard } from './guards/can-match-admin.guard';
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
import { RegisterComponent } from './components/register/register.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo: '/home',
        pathMatch:'full'
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'course',
        component: CourseComponent
    },
    {
        path:'courseDetails',
        component: CourseDetailsComponent
    },
    {
        path:'courseDetails/:id',
        component: CourseDetailsComponent
    },
    {
        path: 'selectedCourse/:course',
        component: SelectedCourseComponent,
        canActivateChild: [authGuardChild],
        children: [
            {
                path: 'selectedCourseDetails',
                component: SelectedCourseDetailsComponent
            }
        ]
    },
    {
        path: 'selectedCourse',
        component: SelectedCourseComponent,
        
    },
    {
        path: 'login',
        component: LoginComponent,
        // canDeactivate: [unsavedPageGuard]
    },
    {
        path: 'userDashboard',
        component: UserDashboardComponent,
        canActivate: [authGuard],
        // data: {role: 'user'},
        // canMatch: [canMatchUserGuard]
        
    },
    {
        path: 'adminDashboard',
        component: AdminDashboardComponent,
        canActivate: [authGuard]
        // data: { role: 'admin' },
        // canMatch: [canMatchAdminGuard]
    },
    {
        path: 'pipes',
        component: BuiltInPipesComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path:'**',
        component: PageNotFoundComponent
    }

];
