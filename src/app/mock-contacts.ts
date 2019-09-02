import { Contact} from './contact';

export const CONTACTS: Contact[] = [
    {id: 1, 
    name: 'Sergio Garroni', 
    companyName: 'Solstice',
    isFavorite:true,
    smallImageUrl:"https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg",
    largeImageUrl : "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg",
    emailAdress: "sergiogarroni@hotmail.com",
    birthdate: new Date(),
    phone: "1125787834",
    address:"Guemes 3722"
    }, 
    {
    id: 2, 
    name: 'Nicole Rivas', 
    companyName: 'TasteNTreats',
    isFavorite:false,
    smallImageUrl:"https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg",
    largeImageUrl : "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg",
    emailAdress: "nicoletarivas@gmail.com",
    birthdate: new Date(),
    phone: "1122255569",
    address:"Guemes 3722"
    }
]
