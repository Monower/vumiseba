export default function CardBody(prop){
    return (<>
        <div className="lg:h-[127px] flex flex-col space-y-4">
            <h3 className="font-bold text-16 leading-[18px] lg:text-24 lg:leading-[27.5px] ">{prop.data.heading}</h3>
            <p className="text-14 leading-[16.66px] lg:text-20 lg:leading-[23.8px]">{prop.data.para}</p>
        </div>
    </>);
}