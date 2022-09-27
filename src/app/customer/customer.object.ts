export class Customer{
    id: number;
    name:String;   
    img: string;
    Phone: string;
    email: string;
    age: number;
    constructor(){
        this.id = 0;
        this.Phone='';
        this.name="";
        this.img="";
        this.email="";
        this.age=0;

    }
}

export const CUSTOMER: Customer[] =[
    {
    name: "Lori O'Connell",
    img: "http://placeimg.com/640/480/abstract",
    Phone: "441-423-1807 x7573",
    email: "Keeley_Padberg55@yahoo.com",
    age: 64,
    id: 1
    },
    {
    name: "Tammy Feeney",
    img: "http://placeimg.com/640/480/nature",
    Phone: "(554) 986-4209 x64190",
    email: "Lorine_McDermott10@hotmail.com",
    age: 63,
    id: 2
    },
    {
    name: "Dora Kunze",
    img: "http://placeimg.com/640/480/abstract",
    Phone: "997.774.7177",
    email: "Alia_Bartell34@gmail.com",
    age: 54,
    id: 3
    },
    {
    name: "Christy Langosh",
    img: "http://placeimg.com/640/480/business",
    Phone: "1-361-964-9224 x88829",
    email: "Payton76@yahoo.com",
    age: 27,
    id: 4
    },
    {
    name: "Dennis Keebler",
    img: "http://placeimg.com/640/480/nature",
    Phone: "993.816.4701 x161",
    email: "Terence.Kirlin@gmail.com",
    age: 86,
    id: 5
    },
    {
    name: "Glenn O'Connell",
    img: "http://placeimg.com/640/480/cats",
    Phone: "652-452-7864",
    email: "Nicholas_Feeney62@yahoo.com",
    age: 71,
    id: 6
    },
    {
    name: "Kent Mueller III",
    img: "http://placeimg.com/640/480/nightlife",
    Phone: "365-440-9122",
    email: "Mckenzie_Larson@gmail.com",
    age: 92,
    id: 7
    },
    {
    name: "Allen Prosacco",
    img: "http://placeimg.com/640/480/food",
    Phone: "1-570-611-0005",
    email: "Alvis_Ward@yahoo.com",
    age: 91,
    id: 8
    }
    ]