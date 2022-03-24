import Head from 'next/head'
import { Categories, PostCard, PostWidget } from '../components'
import { getPosts } from '../services'

export default function Home({ posts }) {
  return (
    <div className="container mx-auto  mb-8 px-10">
      <Head>
        <title>choonsik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <div>
              <PostCard post={post.node} key="{post.title}" />
            </div>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative top-8 text-black lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// fetch data
export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts },
  }
}
