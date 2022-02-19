import { useRouter } from 'next/router'
import React from 'react'
import {
  Categories,
  PostWidget,
  PostDetail,
  Loader,
  Author,
  CommentForm,
  Comments,
} from '../../components'

const About = () => {
  return (
    <div className="container mx-auto mb-8 px-10 pb-3">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 col-span-12">
          <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
            <div className="px-4 lg:px-0">
              <h1 className="mb-8 text-3xl font-semibold">
                What is an About Us Page?
              </h1>
              An about us page is a specific page on your website where visitors
              can go if they want to learn more about you or your company. They
              can be called by many different names including about, about me,
              our story, mission, etc. But, the purpose is always the same: To
              tell website visitors who you are and why they should choose your
              business. And the purpose is the same whether you’re a new blogger
              or a giant eCommerce company. Because when a visitor first lands
              on your website, you’re a stranger to them. They have to get to
              know you in order to want to read your blog posts, subscribe to
              your email newsletter, or buy what you’re selling. So, the about
              us page is your chance to share your story, build a connection,
              and convince visitors to trust you.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
