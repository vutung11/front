import React, {useState, useEffect} from 'react'
import Blog from '../../components/Blog'

const ListBlog = () => {
  const [data, setData] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            const response = await fetch('http://localhost:1337/api/watches');
            const responseJson = await response.json();
            setData(responseJson)
        }
        fetchData()

    },[])
  return (
    <div className='container_listpost'>
      <Blog data={data}/>
    </div>
  )
}

export default ListBlog