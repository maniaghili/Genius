import { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import useCourses from "../assets/hooks/courses";


 const allCourse = createContext(null)


 const CoursesProvider:FC<PropsWithChildren> = ({children}):JSX.Element => {

    const [courses,setCourses] = useState([])
    const [allCourses] = useCourses(undefined) as any
    useEffect(()=>{
      
      setCourses(allCourses as any)
    },[allCourses?.length])

    const coursesStates = {
        courses,
        setCourses
    }

    return (

        <allCourse.Provider value={coursesStates as  any}>
            {children}
        </allCourse.Provider>
    )
}

export {CoursesProvider,allCourse}