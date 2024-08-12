
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import CourseCard from "../../Components/CourseCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";


export default function CourseList() {
    const dispatch = useDispatch();

    const { courseData }  = useSelector( (state) => state.course );

    async function loadCourses(){
        try {
            console.log("Dispatching getAllCourses");
            await dispatch(getAllCourses());
        } catch (error) {
            console.error("Error dispatching thunk:", error);
        }
    }

    useEffect(()=>{
        loadCourses()
    },[]);

    console.log("Course Data:", courseData);
  return (
    <HomeLayout>
        <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
                <h1 className="text-center text-3xl font-semibold mb-5">
                    Explore the courses made by
                    <span className="font-bold text-yellow-500">
                        Industry experts
                    </span>
                </h1>
                <div className="mb-10 flex flex-wrap ml-28 gap-14">
                    {
                    courseData?.map( (element) => {
                        return <CourseCard key={element._id} data={element}/>
                    })
                    }
                </div>
                
            </div>
    </HomeLayout>

  )
}
