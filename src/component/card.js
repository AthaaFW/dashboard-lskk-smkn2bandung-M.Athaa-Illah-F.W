import Prof from "../asset/images.jpg"

const Card = ({nama}) => {
    return ( 
        <div className="flex flex-col items-center w-fit space-y-14 relative">
            <img src={Prof} alt="" srcset="" className="rounded-full w-1/4 absolute border-blueSec border-2"/>
            <div className="flex flex-col p-4 justify-center shadow-lg rounded-xl bg-white space-y-2">
                <h1 className="text-xl text-blueSec">{nama}</h1>
                <div className="flex-col flex">
                <h1 className="text-gray-500 text-sm">email@gmail.com</h1>
                <h1 className="text-gray-500 text-sm">Jl. Bandung kota Bandung kecamatan bandung</h1>
                <h1 className="text-gray-500 text-sm">1266385728912836</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Card;