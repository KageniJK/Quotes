export class Quotes {
  public showDescription: boolean;
  constructor (public id: number, public quote: string, public author: string, public submitter: string, public upvotes: number, public downvotes: number, public totalVotes: number) { this.showDescription = false; }
}
