import axios from "axios"
import { useQuery } from "react-query"


export const useSingleArticle = (shortName:string) => {

const {data : article} = useQuery([shortName,'article'],()=>axios.get(`https://academic.liara.run/v1/${shortName}`),{
    staleTime:1000000,
    cacheTime:1000000
  })
 return [article?.data]

}
