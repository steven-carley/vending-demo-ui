export class Coin {
  weight: string | undefined;
  diameter: string | undefined;
  value: string | undefined;

  constructor(json?: any) {
    this.weight = json?.weight;
    this.diameter = json?.diameter;
    this.value = json?.value;
  }
}
