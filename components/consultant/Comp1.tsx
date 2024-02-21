import Card from "./Card";




export default function Comp1(prop:any){
    return (<>
        <section className="container mx-auto px-[4vw] lg:px-[2vw] pt-[30px] lg:pt-[49px] pb-[58px] lg:pb-[127px]">
            <div>
                <h3 className="text-16 lg:text-24">পরামর্শক হলে</h3>
                <h3 className="font-medium text-32 lg:text-48">আপনি যেসব সুবিধা পাবেন !</h3>
            </div>
            <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-9 justify-center items-center pt-[41px] lg:pt-[52px]">
                <Card data={prop.data.card1} />
                <Card data={prop.data.card2} />
                <Card data={prop.data.card3} />
                <Card data={prop.data.card4} />
            </div>
        </section>
    
    
    
    </>);
}