import Layout from '@/components/Layout'
import { Player } from "@lottiefiles/react-lottie-player";




export default function Home() {
  return (
    <Layout>
		<section className="container mx-auto flex justify-center items-center pt-[130px]">
			<div className="w-[30%]">
        <Player 
        autoplay
        loop
        src={"/images/404.json"}
        />
			</div>
		</section>
    </Layout>
  );
  
}
