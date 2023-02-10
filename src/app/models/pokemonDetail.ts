export interface PokemonDetail {
    id?: number;
    order: number;
    name: string;
    height: number;
    weight: number;
    sprites: Sprite;
    price: number;
    stock: number
}


interface Sprite {
    front_default: string;
}