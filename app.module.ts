import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ProductComponent } from './Product/product.component';
import { CustomerComponent } from './Customer/customer.component';
import { GreetingComponent } from './greeting/greeting.component';
import { ParentComponent } from './nested/parent.component';
import { ChildComponent } from './nested/child.component';
import { CoronaComponent } from './CoronaNested/corona.component';
import { TableComponent } from './CoronaNested/table.component';
import { BrandComponent } from './carbrand/carbrand.component';
import { NgSwitchComponent } from './NgSwitch/ngSwitch.component';
import { AttributeComponent } from './attribute/attribute.component';

import { HighlightDirective } from './myhighlight/highlight.directive';


import { EmployeeComponent } from './Emp/emp.component';
import { OrderComponent } from './order/order.component';
import { msgparentComponent } from './compcommunication/msgparent.component';
import { MsgchildComponent } from './compcommunication/msgchild.component';
import { ReversePipe } from './reverse/reverse.pipe';
import { pipedemoComponent } from './pipedemo/pipedemo.component';
import { CodePipe } from './pipedemo/code.pipe';
import { ParentMsgComponent } from './msgcommunication/parent-component';
import { ChildMsgComponent } from './msgcommunication/child-component';
import { BindingDemoComponent } from './bindingdemo/bindingdemo.component';

import { TouristChildComponent } from './touristapp/touristchild.component';
import { TouristParentComponent } from './touristapp/touristparent.component';
import { routing } from './app.routing';
import {RouterModule} from  '@angular/router'
import { HomeComponent } from './routing_demo/home.component';
import { MessageComponent } from './routing_demo/message.component';
import { NotFoundComponent } from './routing_demo/notfound.component';
import { PhotoComponent } from './routing_demo/photos.component';
import { Home123Component } from './RoyalRider/Home/home.component';
import { MemberComponent } from './RoyalRider/Member/member.component';
import { EventComponent } from './RoyalRider/Event/event.component';
import { TemplateFormComponent } from './RoyalRider/Form/templateForm.component';

import { FeedbackComponent } from './RoyalRider/Feedback/feedback.component';
import { HelloService } from './HelloService/servicemain.service';
import { HelloSeriveComponent } from './HelloService/helloservice.component';
import { MathServiceComponent } from './MathService/math.component';
import { SearchServiceComponent } from './SerchService/searchservice.component';
import { SubModule } from './submodule/submodule.module';
import { ShoppingModule } from './ShoppingModule/shoppingmodule.module';
// import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { Hello123Component } from './hello123/hello123.component';
import { EventBikeComponent } from './RoyalBike/EventBike/EventBike.component';
import { HomeBike4Component } from './RoyalBike/HomeBike/HomeBike.component';
import { MemberBikeComponent } from './RoyalBike/Member/member.component';
import { PlayerComponent } from './Player/player.component';
import { GreetComponent } from './Greet/greet.component';
import { NestedChildComponent } from './nestedChildParent/nestedChild.component';
import { NestedParentComponent } from './nestedChildParent/nestedParent.component';
import { DirectivedemoStatusComponent } from './directiveDemoStatus/directivedemoStatus.component';
import { AttributeDirectiveComponent } from './attributedirective/attributedirective.component';
import { SwitchcaseComponent } from './SwitchCase/switchcase.component';
import { HighLightDirective } from './customdirective/highlight1.directive';
import { Pipe2demoComponent } from './pipe2demo/pipe2demo.component';
import { ComputerChildComponent } from './ComputerCommunication/ComputerChild.component';
import { ComputerParentComponent } from './ComputerCommunication/ComputerParent.component';
import { BindingDemoImageComponent } from './BindingDemoImage/bindingdemoimage.component';
import { ImageBindingComponent } from './challangebindingImage/imagebinding.component';
import { TouristChild123Component } from './touristapp123/touristappchild123.component';
import { TouristParent123Component } from './touristapp123/touristparent123.component';
import { Home999Component } from './routingdemo999/home999.component';
import { Message999Component } from './routingdemo999/message999.component';
import { Photos999Component } from './routingdemo999/Photos999.component';
import { NotFound999Component } from './routingdemo999/notfound999.component';

import { EventMercedesVComponent } from './MercedesVehicle/EventMercedesV.component';
import { HomeMercedesVComponent } from './MercedesVehicle/HomeMercedesV.component';
import { MemberMercedesVComponent } from './MercedesVehicle/MemberMercedesV.component';
import { TemplateForm123Component } from './TemplateForm123/templateForm123.component';
import { ModelDriven123Component } from './ModelDriven123/modeldriven123.component';
import { ServiceDemo } from 'src/ServiceDemo123/ServiceDemo.service';
import { ServiceDemo123Component } from 'src/ServiceDemo123/servicedemo123.component';
import { HttpDemo123Component } from './http_demo123/http_demo123.component';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { Bookdata } from './http_demo123/Book-data';
import { SubModuleDemo } from './SubModuleDemo/submoduledemo.module';
import { FirstModuleComponent } from './SubModuleDemo/firstmodule.component';
import { SecondModuleComponent } from './SubModuleDemo/secondmodule.component';
import { Employee31Component } from './employee31/employee31.component';
import { Product1Component } from './product1java/product1.component';

import { HttpClientModule } from '@angular/common/http';
import { UserJavaComponent } from './userjava/user.component';
import { UserService } from './userjava/user.service';
import { BeerComponent } from './Beer/beer.component';
import { ProductListComponent } from './ProductPackage/productlist/productlist.component';
import { AppRoutingModule } from './app-routing.module';
import { AddProductComponent } from './ProductPackage/addproduct/addproduct.component';
import { EditProductComponent } from './ProductPackage/editproduct/editproduct.component';
import { ViewProductComponent } from './ProductPackage/viewproduct/viewproduct.component';
import { DeleteProductComponent } from './ProductPackage/deleteproduct/deleteproduct.component';
import { EmployeelistComponent } from './EmployeePackage/EmployeeList/employeelist.component';
import { AddmployeeComponent } from './EmployeePackage/addmployee/addmployee.component';
import { RegistrationComponent } from './registrationProduct/register/registration.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { RegistrationDemoService } from './registrationProduct/registrationdemo.service';
import { BookShelfAngularComponent } from './book-shelf-angular/book-shelf-angular.component';
import { AddBookShelfComponent } from './BookShelfPackage/AddBook/addbook.component';
import { BookListComponent } from './BookShelfPackage/booklist/booklist.component';
import { UserComponent } from './backendproject/user/user.component';
import { UserRegisterComponent } from './backendproject/user-register/user-register.component';
import { UserlistComponent } from './P_UserPackage/userlist/userlist.component';
import { UserRegistrationComponent } from './userRegistration/registration/registration.component';
import { DeleteUserComponent } from './userRegistration/deleteUser/deleteUser.component';
import { UserHomeComponent } from './UserWebsite/homeuser.component';
import { UserMessageComponent } from './UserWebsite/message.component';
import { UserNotFoundComponent } from './UserWebsite/notfound.component';
import { UserPhotoComponent } from './UserWebsite/photos.component';
import { ButtonProjectComponent } from './buttonProject/buttonproject.component';
import { StudentButtonComponent } from './buttonProject/Student/studentbutton.component';
import { SuccessUserComponent } from './userRegistration/successUser/successUser.component';
import { LoginUserComponent } from './userRegistration/loginUser/loginUser.component';
import { UserFormCompomemt } from './UserForm/userForm.component';
import { SuccessFormUserComponent } from './UserForm/successUserForm.component';
import { UserformfolderComponent } from './UserFormFolder/userformfolder.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { ToDoProductComponent } from 'src/ToDoProduct/ToDoProduct.component';
import { bookMComponent } from './BookManager/book.component';





@NgModule({
  declarations: [
    AppComponent,HelloComponent,ProductComponent,CustomerComponent,GreetingComponent,ParentComponent,ChildComponent,CoronaComponent,TableComponent,BrandComponent,NgSwitchComponent,AttributeComponent,HighlightDirective,EmployeeComponent,OrderComponent,msgparentComponent,MsgchildComponent,ReversePipe,pipedemoComponent,CodePipe,ParentMsgComponent,ChildMsgComponent,BindingDemoComponent,TouristChildComponent,TouristParentComponent,HomeComponent,MessageComponent,NotFoundComponent,PhotoComponent,Home123Component,MemberComponent,EventComponent,TemplateFormComponent,FeedbackComponent,HelloSeriveComponent,MathServiceComponent,SearchServiceComponent, BookComponent,Hello123Component,EventBikeComponent,HomeBike4Component,MemberBikeComponent,PlayerComponent,GreetComponent,NestedChildComponent,NestedParentComponent,DirectivedemoStatusComponent,AttributeDirectiveComponent,SwitchcaseComponent,Pipe2demoComponent,ComputerChildComponent,ComputerParentComponent,BindingDemoImageComponent,ImageBindingComponent,TouristChild123Component,TouristParent123Component,Home999Component,Message999Component,Photos999Component,NotFound999Component,EventMercedesVComponent,HomeMercedesVComponent,MemberMercedesVComponent,TemplateForm123Component,ModelDriven123Component,ServiceDemo123Component,HttpDemo123Component,Employee31Component,Product1Component,UserJavaComponent,BeerComponent,Product1Component,ProductListComponent,AddProductComponent,EditProductComponent,ViewProductComponent,DeleteProductComponent,EmployeelistComponent,AddmployeeComponent, RegistrationComponent, SearchDeleteComponent, BookShelfAngularComponent,AddBookShelfComponent,BookListComponent,UserComponent,UserRegisterComponent,UserlistComponent,UserRegistrationComponent,DeleteUserComponent,UserHomeComponent,UserMessageComponent,UserNotFoundComponent,UserPhotoComponent,ButtonProjectComponent,StudentButtonComponent,SuccessUserComponent,LoginUserComponent,UserFormCompomemt,SuccessFormUserComponent,UserformfolderComponent, EmployeeformComponent,ToDoProductComponent,bookMComponent
  
  ],
  imports: [
    BrowserModule,FormsModule,routing,RouterModule,ReactiveFormsModule,SubModule,ShoppingModule,SubModuleDemo,HttpClientModule,AppRoutingModule
  ],
  providers: [HelloService,ServiceDemo,RegistrationDemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
