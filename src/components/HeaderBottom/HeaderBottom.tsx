import { Link } from 'react-router-dom'
import main from './../../../public/main.png'
import './HeaderBottom.css'

const HeaderBottom = () => {
  return (
    <div className='w-full overflow-hidden dark:bg-gray-950  flex items-center justify-center mt-6'>
      <div className='w-[95%] flex sm:flex-col md:flex-row dark:bg-gray-900 dark:text-white justify-center items-center  bg-slate-50 rounded-2xl  py-12 h-full gap-10 flex-wrap '>

        <div className='md:w-2/5 sm:w-4/5 flex-col flex gap-4'>
          <div className='flex justify-start items-center gap-1'>
           <div className='flex items-center gap-2 rounded-2xl text-white bg-blue-600 p-1 kk'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"></path>
            </svg>
            <p >جشنــــواره تخفیف !</p>
           </div>
           <span className='text-blue-700'>به زودی :)</span>
          </div>
          <h1 className='font-bold titleh1'>داستان برنامه‌نویس شدنت
          از اینجا شروع میشه!</h1>
          <p className='opacity-70'>یادگیری برنامه‌نویسی آرزو نیست، فقط نیاز هست که تلاش و تمرین داشته باشید، بقیه‌اش با نابغه</p>
          <Link to='/series' className='flex gap-1 cursor-pointer  items-center bg-blue-600 w-fit rounded-2xl text-white p-2 transition-all hover:bg-blue-500'>
            <p>شروع یادگیری برنامه‌نویسی</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fill-rule="evenodd" d="M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z" clip-rule="evenodd"></path>
            </svg>
          </Link>
        </div>
        <div className="flex-shrink-0 flex justify-center md:w-2/5 sm:w-full md:order-2 -order-1 h-full ">
          <img src={main} className="max-w-full h-full" alt="..." />
        </div>


      </div>
    </div>
  )
}

export default HeaderBottom
