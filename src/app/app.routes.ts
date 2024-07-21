import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { IfComponent } from './components/if/if.component';


export const routes: Routes = [
    {
        path: 'course',
        component: CourseComponent
    },
    {
        path:'courseDetails',
        component: CourseDetailsComponent
    }

];
