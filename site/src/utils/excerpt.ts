import MarkdownIt from "markdown-it";
import { convert } from "html-to-text";
const parser = new MarkdownIt();

export const createExcerpt = (body: string) => {
    const html = parser.render(body);
    const options = {
        wordwrap: null,
        selectors: [
            { selector: "a", options: { ignoreHref: true } },
            { selector: "img", format: "skip" },
            { selector: "figure", format: "skip" },
            { selector: "hr", format: "blockString", options: { string: "~MORE~" } },
        ],
    };
    const text = convert(html, options);
    const distilled = convert(text, options);
    const end = distilled.indexOf('~MORE~');

    if (end > -1) {
        return distilled.substring(0, end);
    }

    return distilled.substring(0, 400) + " ...";
}
