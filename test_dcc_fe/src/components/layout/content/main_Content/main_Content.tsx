import Left_Content from "../left_Content/left_Content";
import Right_Content from "../right_Content/right_Content";

export default function Main_Content() {
  return (
    <div className="flex flex-1 flex-col gap-3 p-2 bg-gray-50/50 overflow-y-auto h-full">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-3 min-h-full">

         <Right_Content/>
         <Left_Content/>

      </div>
    </div>
  )
}