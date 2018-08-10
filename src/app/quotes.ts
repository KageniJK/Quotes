export class Quotes {
  public showDescription: boolean;
  constructor (public id: number, public quote: string, public author: string, public submitter: string) { this.showDescription = false; }
}
