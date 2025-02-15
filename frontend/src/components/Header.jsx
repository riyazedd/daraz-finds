import { FaInstagram, FaYoutube } from "react-icons/fa";
import category from "../../category";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	const [menu, setMenu]=useState('home');
	return (
		<>
			<div className="w-full relative">
				<img src="banner.webp" alt="banner" className="w-full" />
				<div className="flex flex-col gap-3 items-center justify-center w-full text-white absolute left-0 top-50">
					<img src="profile.png" alt="profile" className="w-40 rounded-lg" />
					<h1 className="text-2xl font-semibold">daraznepalfinds</h1>
					<p className="text-lg">Discover the best Daraz finds</p>
					<div className="flex gap-5 text-3xl">
						<a href="https://www.instagram.com/daraz.nepal.finds/">
							<FaInstagram />
						</a>
						<a href="https://www.youtube.com/@Daraznepalfinds">
							<FaYoutube />
						</a>
					</div>
				</div>
			</div>
			<div className="mt-55 w-full ">
				<nav>
					<ul className="flex text-lg text-white gap-5 justify-center">
						<li><Link to='/' className={`px-7 py-3 hover:bg-gray-800 ${menu==='home'?'bg-gray-800':''}`} onClick={()=>{setMenu('home')}}>Home</Link></li>
						{category.map((x)=>(
							<li key={x._id} ><Link to={`/category/${x.name}`} onClick={()=>{setMenu(x.name)}} className={`capitalize px-7 py-3 hover:bg-gray-800 ${menu===x.name?'bg-gray-800':''}`}>{x.name}</Link></li>
						))}
					</ul>
				</nav>
			</div>
		</>
	);
};

export default Header;
