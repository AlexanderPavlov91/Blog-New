import fs from 'fs'
import path from 'path'

const title = process.argv[2]

if (!title) {
  console.error('Usage: npm run new-post -- "Your Post Title"')
  process.exit(1)
}

const today = new Date().toISOString().split('T')[0]

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim()

const filename = `${today}-${slug}.mdx`
const dir = path.join(process.cwd(), 'content', 'posts')
const filepath = path.join(dir, filename)

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true })
}

if (fs.existsSync(filepath)) {
  console.error(`File already exists: content/posts/${filename}`)
  process.exit(1)
}

const template = `---
title: "${title}"
date: "${today}"
excerpt: ""
tags: []
featured: false
---

Write your post here.
`

fs.writeFileSync(filepath, template, 'utf8')
console.log(`\nCreated: content/posts/${filename}\n`)
