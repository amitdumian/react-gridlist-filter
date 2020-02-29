export default class CardProps {
     cardData: cardObject;
 }

 // defined model and structure for the json response object
 // some of the fields can be marked optional based on final agreement on the api response model
 export interface cardObject{
    name: string;
    rarity: string;
    type: string;
    cost: number;
    set: setObject;
    collectible: boolean;
    text: string;
    attributes: [];
    unique: boolean;
    imageUrl: string;
    id: string;
 }

 export interface setObject{
    id: string;
    name: string;
    _self: string;
 }
 