export class Product{
    id: number;
    title:String;
    price: number;
    img: string;
    ProductDes: string;
    constructor(){
        this.id = 0;
        this.ProductDes='';
        this.price= 0;
        this.title="";
        this.img="";
    }
}

export const PRODUCTS: Product[] = [
    {
        id:1,
        img: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title:'Nikon',
        ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
        price:20
      },
      {
        id:2,
        img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        title:'Vans',
        ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
        price:20
      },
      {
        id:3,
        title:'glass',
        img:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
        price:20
      },
        {
          id:4,
          title:'car',
          img:'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
          price:20
        },
        {
          id:5,
          title:'watch',
          img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
          price:20
        },
        {
          id:6,
          title:'Bag',
          img:'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
          price:20
        },
        {
          id:7,
          img: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          title:'Nikon',
          ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
          price:20
        },
        {
          id:8,
          img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          title:'Vans',
          ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
          price:20
        },
        {
          id:9,
          title:'glass',
          img:'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
          ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
          price:20
        },
          {
            id:10,
            title:'car',
            img:'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
            price:20
          },
          {
            id:11,
            title:'watch',
            img:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            ProductDes:'Some quick example text to build on the card title and make up the bulk of the card',
            price:20
          }
]