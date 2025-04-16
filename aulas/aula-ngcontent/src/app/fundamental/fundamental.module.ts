import { NgModule } from '@angular/core';
import { AvatarComponent, ButtonComponent, TextComponent } from '@fundamental-ngx/core';
import { CardModule } from '@fundamental-ngx/core/card';
import { ListModule } from '@fundamental-ngx/core/list';


@NgModule({
  declarations: [],
  imports: [
    CardModule, ListModule, AvatarComponent, ButtonComponent, TextComponent
  ], exports: [CardModule, ListModule, AvatarComponent, ButtonComponent, TextComponent]
})
export class FundamentalModule { }
