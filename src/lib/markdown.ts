import { marked, type RendererThis } from 'marked';
import { markedEmoji } from 'marked-emoji';
import emojilib from 'emojilib';

// emojilib format: { "😀": ["grinning_face", "face", "smile", ...], ... }
// Invert to: { "grinning_face": "😀", "face": "😀", ... }
// All names (including keyword aliases) become valid shortcodes.
const emojiMap: Record<string, string> = {};
for (const [char, names] of Object.entries(emojilib)) {
	for (const name of names) {
		emojiMap[name] = char;
	}
}

marked.use(
	markedEmoji({
		emojis: emojiMap,
		renderer: (token) => token.emoji
	})
);

marked.use({
	renderer: {
		heading(this: RendererThis, { tokens, depth }) {
			const text = this.parser.parseInline(tokens);
			const id = text
				.toLowerCase()
				.replace(/[^\p{L}\p{N}\s-]/gu, '')
				.trim()
				.replace(/\s+/g, '-');
			return `<h${depth} id="${id}">${text}</h${depth}>\n`;
		}
	}
});

marked.setOptions({
	breaks: true,
	gfm: true
});

/**
 * Renders markdown to HTML.
 * - Converts emoji shortcodes (e.g. :smile:) to Unicode via marked-emoji
 * - Unicode emojis pasted directly pass through unchanged
 * - Shortcodes inside code fences/spans are left as literal text
 */
export function renderMarkdown(content: string): string {
	return marked.parse(content) as string;
}
