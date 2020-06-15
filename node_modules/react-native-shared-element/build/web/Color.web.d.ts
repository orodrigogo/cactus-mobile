export declare type Color = number[];
export declare function parseColor(color: string | Color): Color;
export declare function formatColor(color: Color): string;
export declare function interpolateColor(color1: Color, color2: Color, position: number): Color;
