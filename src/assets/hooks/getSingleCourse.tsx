import axios from "axios"
import { useQuery } from "react-query"


export const useSingleCourse = (shortName:string) => {

const {data : course} = useQuery([shortName,'course'],()=>axios.get(`https://academic.liara.run/${shortName}`),{
    staleTime:1000000,
    cacheTime:1000000
  })
 return [course?.data]

}
