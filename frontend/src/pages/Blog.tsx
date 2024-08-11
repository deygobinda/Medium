import { FullBlog } from "../components/FullBlog"
import { SingleBlogSekeleton } from "../components/SingleBlogSekeleton"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"


export  function Blog() {
  const {id} = useParams()
  const {loading , blog} = useBlog({
    id : id || ""
  })
  if(loading){
    return <div>
      <SingleBlogSekeleton/>
    </div>
  }
  return (
    <div>
      <FullBlog blog={blog}/>
    </div>
  )
}


