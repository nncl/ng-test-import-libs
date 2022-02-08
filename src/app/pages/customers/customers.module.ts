import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { UiModule } from 'customer-libs/dist/ui';

@NgModule({
  declarations: [CustomersComponent],
  imports: [CommonModule, CustomersRoutingModule, UiModule],
})
export class CustomersModule {}
