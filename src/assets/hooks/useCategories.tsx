import axios from "axios"
import { useQuery } from "react-query"


export const useCategories = () => {
   
    const {data : categories} = useQuery('Categories',()=>axios.get("https://academic.liara.run/v1/category").then(categories=>categories.data)
    ,{
       staleTime:1000000,
       cacheTime:1000000
     })

     return [categories]
}