/* eslint-disable react/prop-types */
function App() {
  return (
    <div className="">
      <PageLoader bgColor="bg-teal-200" lineColor="bg-teal-700"/>
    </div>
  )
}

function PageLoader({bgColor = 'bg-teal-200', lineColor='bg-teal-700'}){
  return (
    <div className={`${bgColor} relative h-1 block w-full rounded-sm overflow-hidden`}>
      <div className={`${lineColor} wiggle
       `}></div>
    </div>
  )
}

export default App
/*

      before:content:-[''] before:absolute before:bg-inherit 
      before:top-0 before:left-0 before:bottom-0 wiggle 
      after:delay-1000 

*/