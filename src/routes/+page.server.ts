import { promises as fs } from 'fs';
import path from 'path';
import process  from 'process';

export async function load() {
    const contentDir = path.join(process.cwd(), 'src', 'content');
    const languages = ['en', 'no'];
    const posts = {};

    for (const lang of languages) {
        const langDir = path.join(contentDir, lang);
        const files = await fs.readdir(langDir);
        posts[lang] = await Promise.all(
            files
                .filter(file => file.endsWith('.md'))
                .map(async file => {
                    const content = await fs.readFile(path.join(langDir, file), 'utf-8');
                    const [, frontMatter] = content.split('---');
                    const metadata = Object.fromEntries(
                        frontMatter.trim().split('\n').map(line => {
                            const [key, ...value] = line.split(':');
                            return [key.trim(), value.join(':').trim()];
                        })
                    );
                    return {
                        slug: file.replace('.md', ''),
                        ...metadata,
                        content: content.split('---').slice(2).join('---').trim()
                    };
                })
        );
    }
    
    return { posts };
}
