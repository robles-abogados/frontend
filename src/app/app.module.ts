import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesModule } from 'primeng/messages';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { TreeModule } from 'primeng/tree';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { SkeletonModule } from 'primeng/skeleton';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TreeTableModule } from 'primeng/treetable';
import { CommonModule } from '@angular/common';
import { SkeletonDirective } from './roblesabogados/directives/skeleton.directive';
import { NumberDirective } from './roblesabogados/directives/number.directive';
import { AuthInterceptorService } from './roblesabogados/common/auth-interceptor.service';
import { LoginComponent } from './roblesabogados/views/seguridad/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonDirective,
    NumberDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule,
    ButtonGroupModule,
    DropdownModule,
    PaginatorModule,
    FontAwesomeModule,
    ContextMenuModule,
    MultiSelectModule,
    CheckboxModule,
    MenuModule,
    TableModule,
    TooltipModule,
    ToastModule,
    DialogModule,
    MessagesModule,
    CalendarModule,
    ConfirmDialogModule,
    CheckboxModule,
    FileUploadModule,
    TreeModule,
    TreeTableModule,
    ImageModule,
    CardModule,
    SkeletonModule,
    InputSwitchModule,
    FloatLabelModule,
    InputNumberModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
