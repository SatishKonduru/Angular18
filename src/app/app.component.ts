import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { InterpolationComponent } from "./components/interpolation/interpolation.component";
import { PropertyBindingComponent } from "./components/property-binding/property-binding.component";
import { StyleBindingComponent } from "./components/style-binding/style-binding.component";
import { ClassBindingComponent } from "./components/class-binding/class-binding.component";
import { EventBindingComponent } from "./components/event-binding/event-binding.component";
import { TempRefVariablesComponent } from "./components/temp-ref-variables/temp-ref-variables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InterpolationComponent, PropertyBindingComponent, StyleBindingComponent, ClassBindingComponent, EventBindingComponent, TempRefVariablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular18';
}
