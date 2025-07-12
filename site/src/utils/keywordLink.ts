import type { RehypePlugin } from "@astrojs/markdown-remark";
import type { ElementContent, Root, RootContent } from "hast";
import { keywords } from "../content/keywords";

interface Options {
}

export const keywordLink: RehypePlugin = (_options: Options) => {
    return (tree) => {
        visitNode(tree)
    };
};

const regex = new RegExp(`(?<before>.*?(?:^|\\s|\\.|,|¿|¡))(?<keyword>${keywords.map(k => k[0].source).join('|')})(?<after>(?=$|\\s|\\.|,|\\?|!).*)`, 'gi');
console.log(regex);

function visitNode(node: Root | RootContent | ElementContent): any[] {
    if ('children' in node) {
        if (node.type === 'element' && ['a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
            return [node]
        }

        node.children = node.children.map(i => visitNode(i)).flatMap(i => i)
        return [node]
    }

    if (node.type !== 'text') {
        return [node]
    }

    const matches = [];
    let match;
    while ((match = regex.exec(node.value)) != null) {
        matches.push(match);
        regex.lastIndex = match.index + match[1].length + match[2].length;
    }

    const nodes: ElementContent[] = []
    for (let i = 0; i < matches.length; ++i) {
        const { before, keyword, after } = matches[i].groups ?? {}

        nodes.push({
            type: 'text',
            value: before
        })

        const href = keywords.map(k => [new RegExp(k[0].source, 'i').test(keyword), k[1]] as const).find(k => k[0])![1]

        nodes.push({
            type: 'element',
            properties: { href },
            tagName: 'a',
            children: [{
                type: 'text',
                value: keyword
            }]
        })

        if (i === matches.length - 1) {
            nodes.push({
                type: 'text',
                value: after
            })
        }
    }

    return nodes.length ? nodes : [node]
}
