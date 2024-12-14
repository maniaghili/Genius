import axios from "axios"
import { FC } from "react"
import { useQuery } from "react-query"

type filter = string | undefined


const useCourses:FC<filter> = (filters) => {
  
  const allCourses = useQuery("Courses",() =>axios.get("https://academic.liara.run/v1/courses"),
  {staleTime:3000000,
    cacheTime:30000000,
    keepPreviousData:true,
})

if(filters){
   let filteredCourses = allCourses?.data?.data?.filter((course:any)=>course.categoryID.name == filters)
  return [filteredCourses]
    
}else{


    return [allCourses?.data?.data]
}
}

export default useCourses
