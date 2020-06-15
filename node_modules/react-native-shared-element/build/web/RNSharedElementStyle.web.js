import { parseColor, interpolateColor } from "./Color.web";
import { Rect } from "./Rect.web";
/*int backgroundColor = Color.TRANSPARENT;
    float opacity = 1;
    float borderTopLeftRadius = 0;
    float borderTopRightRadius = 0;
    float borderBottomLeftRadius = 0;
    float borderBottomRightRadius = 0;
    float borderWidth = 0;
    int borderColor = Color.TRANSPARENT;
    String borderStyle = "solid";
    float elevation = 0;*/
function interpolate(val1, val2, position) {
    return val1 + (val2 - val1) * position;
}
export class RNSharedElementStyle {
    constructor(layout, style) {
        this.layout = layout;
        this.style = style;
        this.opacity = Number(style.opacity);
        this.backgroundColor = parseColor(style.backgroundColor);
    }
    static getInterpolatedLayout(layout1, layout2, position) {
        return new Rect({
            x: interpolate(layout1.x, layout2.x, position),
            y: interpolate(layout1.y, layout2.y, position),
            width: interpolate(layout1.width, layout2.width, position),
            height: interpolate(layout1.height, layout2.height, position)
        });
    }
    static getInterpolatedStyle(style1, style2, position) {
        const layout = RNSharedElementStyle.getInterpolatedLayout(style1.layout, style2.layout, position);
        return new RNSharedElementStyle(layout, {
            ...style1,
            opacity: interpolate(style1.opacity, style2.opacity, position),
            backgroundColor: interpolateColor(style1.backgroundColor, style2.backgroundColor, position)
        });
    }
}
//# sourceMappingURL=RNSharedElementStyle.web.js.map