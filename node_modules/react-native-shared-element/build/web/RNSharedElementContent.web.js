import { Rect } from "./Rect.web";
export class RNSharedElementContent {
    constructor(element, size) {
        this.element = element;
        this.size = size;
    }
    static getSize(element) {
        return new Promise(resolve => {
            if (element.style.backgroundImage) {
                const img = document.createElement("img");
                img.onload = () => {
                    resolve(new Rect({
                        x: 0,
                        y: 0,
                        width: img.width,
                        height: img.height
                    }));
                };
                img.onerror = () => resolve(null);
                const url = element.style.backgroundImage;
                img.src = url.substring(5, url.length - 2);
                return;
            }
            resolve(new Rect({
                x: 0,
                y: 0,
                width: element.clientWidth || 0,
                height: element.clientHeight || 0
            }));
        });
    }
    static getLayout(layout, content, resizeMode, reverse) {
        if (!content)
            return layout;
        if (!content.element.style.backgroundImage)
            return layout;
        let { width, height } = layout;
        const contentAspectRatio = content.size.width / content.size.height;
        const lo = width / height < contentAspectRatio;
        const aspectRatioCriteria = reverse ? !lo : lo;
        switch (resizeMode) {
            case "stretch":
            case "100% 100%":
                // nop
                break;
            case "cover":
                if (aspectRatioCriteria) {
                    width = height * contentAspectRatio;
                }
                else {
                    height = width / contentAspectRatio;
                }
                break;
            case "center":
                width = content.size.width;
                height = content.size.height;
                break;
            case "contain":
            default:
                if (aspectRatioCriteria) {
                    height = width / contentAspectRatio;
                }
                else {
                    width = height * contentAspectRatio;
                }
                break;
        }
        return new Rect({
            x: layout.x + (layout.width - width) / 2,
            y: layout.y + (layout.height - height) / 2,
            width,
            height
        });
    }
}
//# sourceMappingURL=RNSharedElementContent.web.js.map