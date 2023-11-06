import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import ListLayout from '@/layouts/ListLayoutWithoutTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'

const POSTS_PER_PAGE = 5

const posts = allCoreContent(sortPosts(allBlogs))
const pageNumber = 1
const initialDisplayPosts = posts.slice(
  POSTS_PER_PAGE * (pageNumber - 1),
  POSTS_PER_PAGE * pageNumber
)
const pagination = {
  currentPage: pageNumber,
  totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
}

export default function Home({ posts }) {
  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
