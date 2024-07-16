import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { InterpolationComponent } from "./components/interpolation/interpolation.component";
import { PropertyBindingComponent } from "./components/property-binding/property-binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InterpolationComponent, PropertyBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular18';
}
