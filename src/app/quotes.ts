
export class Quotes {
    showDescription: boolean;

  constructor (public id:number,public quote: string,
    public author: string,
    public upvotes: number,
    public downvotes: number,
    public name: string
    ){
        this.showDescription=false;
        this.id = id;
        this.quote = quote;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.author = author;
        this.name = name;
  

  }

}
