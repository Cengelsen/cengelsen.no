import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export const load = async ({ params }) => { 
    try {
        // Assuming markdown files are stored in src/content
        const filePath = path.join(process.cwd(), 'src', 'content', `${params.lang}`, `${params.slug}.md`).replace(/\/+/g, '/');
        
        // Read the markdown file
        const fileContent = await fs.readFile(filePath, 'utf-8');
        
        // Parse frontmatter and content
        const { data: frontmatter, content } = matter(fileContent);
        
        // Convert markdown to HTML
        const html = marked(content);
        
        return {
            html,
            slug: params.slug,
            frontmatter,
        };
    } catch (err) {
        console.error('Error loading markdown:', err);
        throw error(404, {
            message: `Post "${params.slug}" not found`
        });
    }
};