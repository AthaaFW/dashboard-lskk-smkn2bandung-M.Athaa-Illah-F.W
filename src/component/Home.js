import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import imgKar from '../asset/hunters-race-MYbhN8KaaEc-unsplash.jpg';
import imgGur from '../asset/christina-wocintechchat-com-4T-02pK0jUg-unsplash.jpg';
import imgSis from '../asset/taylor-flowe-4nKOEAQaTgA-unsplash.jpg';

const Home = ({open, onTabKar, onTabSis, onTabGur}) => {
    return ( 
        <div className={open?"flex flex-col items-center mx-auto w-full h-full space-y-20 ":"hidden"}>
              <AwesomeSlider bullets={false} className='h-screen relative bg-transparent'>
            <div className="flex flex-col items-center justify-center card w-full h-full">
                <h1 className="text-7xl text-white w-full h-full flex flex-row items-center justify-center font-bold bg-blackTrans">HIGH SECURITY DATABASE</h1>
            </div>
            <div className="flex flex-col items-center justify-center card2 w-full h-full">
                <h1 className="text-7xl text-white w-full h-full flex flex-row items-center justify-center font-bold bg-blackTrans">YOUR DATA STORED IN CLOUD</h1>
            </div>
            <div className="flex flex-col items-center justify-center card3 w-full h-full">
                <h1 className="text-7xl text-white w-full h-full flex flex-row items-center justify-center font-bold bg-blackTrans">STORE YOUR DATA DIGITALY</h1>
            </div>
             </AwesomeSlider>
             <h1 className='text-6xl text-blueSec'>Table Categories</h1>
             <div className='flex flex-row justify-around items-center w-full h-full'>

                <div className='flex flex-col rounded-lg shadow-lg w-1/4'>
                 <img src={imgKar} alt="" className='rounded-t-lg'/>
                 <div className='flex flex-col justify-center items-center p-5 space-y-5 bg-white text-blueSec'>
                    <h1 className="text-5xl">Karyawan</h1>
                    <button className='text-lg bg-blueSec p-2 text-white rounded-3xl w-1/4 cursor-pointer' onClick={onTabKar}>GO</button>
                 </div>
                </div>

                <div className='flex flex-col rounded-lg shadow-lg w-1/4'>
                 <img src={imgSis} alt="" className='rounded-t-lg'/>
                 <div className='flex flex-col justify-center items-center p-5 space-y-5 bg-white text-blueSec'>
                    <h1 className="text-5xl">Siswa</h1>
                    <button className='text-lg bg-blueSec p-2 text-white rounded-full w-1/4 cursor-pointer' onClick={onTabSis}>GO</button>
                 </div>
                </div>

                <div className='flex flex-col rounded-lg shadow-lg w-1/4'>
                 <img src={imgGur} alt="" className='rounded-t-lg'/>
                 <div className='flex flex-col justify-center items-center p-5 space-y-5 bg-white text-blueSec'>
                    <h1 className="text-5xl">Guru</h1>
                    <button className='text-lg bg-blueSec p-2 text-white rounded-full w-1/4 cursor-pointer' onClick={onTabGur}>GO</button>
                 </div>
                </div>


                
             </div>
        </div>
     );
}
 
export default Home;