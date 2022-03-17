****** *** Angular *** ******
cmd -> cd carpeta on volem crear projecte
  ng new cliente
    y

VisualStudio Code:
  terminal -> ng serve --o

  npm install bootstrap  --> configurar bootstrap
  angular.json
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],

  CREAR COMPONENTES
    ng g c components/crearProducto

  CREAR SERVICIOS
    ng g s service/producto

  MOSTRAR MENSAJES (EXITO) -> https://www.npmjs.com/package/ngx-toastr
    npm install ngx-toastr --save
    npm install @angular/animations --save
    en angular.json styles añadir "node_modules/ngx-toastr/toastr.css"
    en app.modules.ts añadir imports    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
                                        import { ToastrModule } from 'ngx-toastr';
                          y en imports BrowserAnimationsModule,
                                       ToastrModule.forRoot()

  CONFIGURACIÓ ROUTES WEB
    app-routing.module.ts -> Routes

  PARA TRABAJAR CON FORM COMPLEJOS EN ANGULAR
  -> Reactive forms
  en el app.modules.ts
    imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],


  BOOTSTRAP CSS
    fondo https://uigradients.com/#MoonlitAsteroid
    features https://getbootstrap.com/docs/5.0/content/tables/
    fontawesome copiar en index.html <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    iconos https://fontawesome.com/icons
    google fonts copiar a index.html <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap" rel="stylesheet">
        i el css font-family: 'Montserrat', sans-serif;

  INTEGRACION CLIENTE-SERVER
    app.module.ts -> import { HttpClientModule } from '@angular/common/http';



# Cliente

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
