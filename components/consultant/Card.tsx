import Avatar from "./Avatar";
import CardBody from "./CardBody";






export default function Card(prop){
    return (<>
        <div className="flex flex-col space-y-4 justify-center items-start w-[80%]">
            <Avatar data={prop.data.avatar} />
            <CardBody data={prop.data.body} />
        </div>
    </>);
}