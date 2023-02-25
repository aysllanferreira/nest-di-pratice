import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    return `Providing ${watts} watts of power.`;
  }
}
