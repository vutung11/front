import React from 'react'

import './index.css';

const Blog = (props) => {
    const {data} = props;
  return (
    <div className='container_blog'>
        <div className="container_blog--title">
            <h3>{data.title}</h3>
            <div className="container_blog-info">
                <div className="container_blog-info--author">
                    <p>Author:{data.author}</p>
                    <p>Created at: {data.time}</p>
                </div>
                <div className="container_blog-info--tag">
                    {data.tag.map((item)=> <p>{item}</p>)}
                </div>
            </div>
            <p className='container_blog-description'>
                {data.description}
            </p>
            <div className="container_blog-comment">
                <p>{data.coutcomment}</p>
            </div>
            <div className="container_blog-showcomment">
                <div className="container_blog-showcomment-box">
                    <div className="container_blog-showcomment-box--avatar">
                    <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/237209669_2754032388075638_8412174962747603408_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=o7fUTpxeAuAAX-YuImc&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfC6ho-qb1VYAUNCfINJ1i85K3aMqzholpm2ZWbAESEmtQ&oe=639DC953" alt="" />
                    </div>
                    <div className="container_blog-showcomment-box--info">
                        <p>Han solo <span className='container_blog-showcomment-box--info-time'> a day go</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore iste tenetur odit laboriosam quidem optio debitis dicta nihil officiis?</p>
                        <p>Reply to</p>
                    </div>
                </div>
                <div className="container_blog-showcomment-box">
                    <div className="container_blog-showcomment-box--avatar">
                    <img src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t39.30808-6/237209669_2754032388075638_8412174962747603408_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a4a2d7&_nc_ohc=o7fUTpxeAuAAX-YuImc&_nc_ht=scontent.fsgn2-1.fna&oh=00_AfC6ho-qb1VYAUNCfINJ1i85K3aMqzholpm2ZWbAESEmtQ&oe=639DC953" alt="" />
                    </div>
                    <div className="container_blog-showcomment-box--info">
                        <p>Han solo <span> a day go</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore iste tenetur odit laboriosam quidem optio debitis dicta nihil officiis?</p>
                        <p>Reply to</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Blog