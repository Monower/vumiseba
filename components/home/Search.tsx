import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";



const Search = ()=> {
    const [term, setTerm] = useState("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (term.trim()) {
          router.push(`/consultants?search=${term}`);
        }
      };





    return (<>
        <div className="hidden md:block lg:w-[40%] md:absolute md:top-[30%] lg:top-[63%] left-[3em]">
            <form
            className="flex justify-between items-center border-b bg-slate-50 drop-shadow-lg mb-5 rounded-md h-10"
            onSubmit={handleSubmit}
            >
            <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                type="text"
                className="w-[75%] h-10 border-none focus:outline-none focus:ring-0 placeholder:text-12 lg:placeholder:text-16 font-light placeholder:text-gray-600 rounded-l-md"
                placeholder="যে কোন অনুসন্ধানে"
            />
            <button className="h-10 inline-flex items-center justify-center space-x-2 bg-green1 w-[25%] min-[1280px]:py-2 text-slate-50 hover:bg-green-400 rounded-r-md text-12 min-[1300px]:text-16" type="submit"><span><i className="fa-solid fa-magnifying-glass"></i></span><span>অনুসন্ধান করুন</span></button>
            </form>
            <div className="flex items-center justify-center lg:justify-start space-x-5">
            <Link
                href={`/consultants`}
                className="bg-green1 text-slate-50 px-3 py-1 rounded-full"
            >
                পরামর্শকদের তালিকা
            </Link>
            <Link
                href="/about"
                className="bg-slate-50 border border-green1 px-3 py-1 rounded-full"
            >
                ভূমিসেবা
            </Link>
            </div>
        </div>
    </>);
}

export default Search;