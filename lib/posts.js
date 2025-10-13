const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function normalizeDate(d) {
  if (!d) return '';
  if (typeof d === 'string') return d;
  const dt = new Date(d);
  return isNaN(dt.getTime()) ? String(d) : dt.toISOString().slice(0, 10);
}

const postsDir = path.join(process.cwd(), 'content', 'posts');

function getAllPosts() {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
  const items = files.map((file) => {
    const slug = file.replace(/\.(md|mdx)$/i, '');
    const full = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const { data } = matter(full);
    return {
      slug,
      title: data.title,
      date: normalizeDate(data.date),
      excerpt: data.excerpt,
      cover: data.cover || null,
    };
  });
  return items.sort((a,b)=> (a.date < b.date ? 1 : -1));
}

function getPostBySlug(slug) {
  const file = ['.mdx','.md'].map(ext => path.join(postsDir, slug + ext)).find(p => fs.existsSync(p));
  if (!file) return null;
  const full = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(full);
  return {
    slug,
    title: data.title,
    date: normalizeDate(data.date),
    excerpt: data.excerpt,
    cover: data.cover || null,
    html: simpleMarkdownToHtml(content)
  };
}

// Super‑light markdown → HTML
function simpleMarkdownToHtml(md) {
  let html = md;
  html = html.replace(/^###\s?(.*)$/gm, '<h3>$1</h3>');
  html = html.replace(/^##\s?(.*)$/gm, '<h2>$1</h2>');
  html = html.replace(/^#\s?(.*)$/gm, '<h1>$1</h1>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/^-\s(.*)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (m)=>`<ul>${m}</ul>`);
  html = html.replace(/\n\n+/g, '<br/><br/>' );
  return html;
}

module.exports = { getAllPosts, getPostBySlug };
