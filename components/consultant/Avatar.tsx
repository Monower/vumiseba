import Image from "next/image";


export default function Avatar(prop){
    
    return (<>
        <div className={`rounded-md bg-`+(prop.data.background_color)}>
            <div className="">
                <Image
                    src={(prop.data.image)}
                    height={100}
                    width={100}
                    alt="img"
                    className="w-[25vw] lg:w-[8.5vw]"
                />
                {/* <img className="w-[25vw] lg:w-[8.5vw]" src={(prop.data.image)} alt="img" /> */}
            </div>
        </div>
    </>);
}