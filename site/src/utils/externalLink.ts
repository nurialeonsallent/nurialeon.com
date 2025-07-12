import type { RehypePlugin } from "@astrojs/markdown-remark";
import { visit } from "unist-util-visit";
import type { Element } from "hast";

interface Options {
}

export const externalLink: RehypePlugin = (_options: Options) => {
    return (tree) => {
        visit(tree, 'element', (element) => {
            if (!isAnchor(element)) {
                return;
            }

            if (isExternal(getUrl(element))) {
                element.properties!["target"] = "_blank";
                element.properties!["rel"] = "noopener";
            }
        });
    };
};

const isAnchor = (element: Element) => element.tagName == "a" && element.properties && "href" in element.properties;

const getUrl = (element: Element) => {
    if (!element.properties) {
        return "";
    }

    const url = element.properties["href"];

    if (!url) {
        return "";
    }

    return url.toString();
};

const isExternal = (url: string) => {
    return url.startsWith("http");
};
