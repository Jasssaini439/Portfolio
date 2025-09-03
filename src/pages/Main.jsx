import Spline from '@splinetool/react-spline';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  function onLoad(splineApp) {
    
    splineApp.addEventListener('mouseDown', (e) => {
      console.log("Spline event:", e);

      const objectName = e.target.name;
      console.log("Clicked object:", objectName);
    setTimeout(() => {
      if (objectName === "Key Esc") {
        navigate("/landing");
      }else if(objectName === "Key Send"){
        navigate("/landing/contact")
      }else if(objectName === "Key YOU"){
        navigate("/landing/portfolio")
      }
    }, 500);
      
    });
  }

  return (
    <main className="w-full h-full bg-black  ">
      <div className='flex flex-wrap justify-center'><h1 className='pt-52 pr-[85vh] text-8xl font-serif 
bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500 bg-clip-text text-transparent
'>
    FRONT
  </h1></div>
      
      <div className='flex flex-wrap justify-center'><h1 className=' pl-[89vh] pt-72 text-8xl font-serif bg-gradient-to-r from-fuchsia-500 via-purple-600 to-blue-500 bg-clip-text text-transparent
'>END</h1></div>
        <div>
         <Spline
         className='-mt-[87vh] pb-20 '
          scene="https://prod.spline.design/aep-66q6Qft44kna/scene.splinecode" 
        onLoad={onLoad}  
      />  
</div> 

{/* <div className="w-[20vh] h-[20vh] absolute top-9 right-5 object-cover  flex items-center justify-center ">
<Spline scene="https://prod.spline.design/tKiIkRkpuJAQNCp2/scene.splinecode" />
      </div>*/}
    </main> 
  );
}
