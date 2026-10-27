import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

export type Faq = { question: string; answer: string };
export type Step = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  idealFor: string;
  heroStatement: string;
  benefits: string[];
  process: Step[];
  faqs: Faq[];
  order: number;
  html: string;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  author: string;
  category: string;
  html: string;
};

const root = path.join(process.cwd(), 'content');

function readDir(dir: string) {
  const full = path.join(root, dir);
  return fs
    .readdirSync(full)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, file), 'utf8'));
      return { slug: file.replace(/\.md$/, ''), data, html: marked.parse(content, { async: false }) as string };
    });
}

export function getServices(): Service[] {
  return readDir('servicios')
    .map(({ slug, data, html }) => ({ slug, html, ...(data as Omit<Service, 'slug' | 'html'>) }))
    .sort((a, b) => a.order - b.order);
}

export function getService(slug: string) {
  return getServices().find((item) => item.slug === slug);
}

export function getPosts(): Post[] {
  return readDir('blog')
    .map(({ slug, data, html }) => ({
      slug,
      html,
      ...(data as Omit<Post, 'slug' | 'html' | 'publishDate'>),
      publishDate: new Date(data.publishDate).toISOString().slice(0, 10),
    }))
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function getPost(slug: string) {
  return getPosts().find((item) => item.slug === slug);
}
