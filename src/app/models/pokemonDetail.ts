export interface PokemonDetail {
    id?: number;
    order: number;
    name: string;
    height: number;
    weight: number;
    sprites: Sprite;
}


interface Sprite {
    front_default: string;
}