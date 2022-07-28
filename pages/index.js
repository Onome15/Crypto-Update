import axios from 'axios';
import {useState} from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import Link from "next/link"
import Image from "next/image"

export default function Home() {
	const [page, setPage] = useState(1);
	const [response, setResponse] = useState(null);
	
	const getNews = async () => {
		try {
			const res = await axios.get('api/news/', {
				params: {page}
			});
			const {data} = res;
			setResponse(data.data[0].screen_data.news);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<main className='bg-background'>
		<div className=" flex flex-col relative container font-raleway items-center min-h-screen">
			<h1 className="text-3xl md:text-6xl text-primary font-bold mt-20">
				Crypto News<span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-xl  md:text-3xl mt-6 text-center">
				A Crypto news website that Provides Information about the Crypto Market using Investing Cryptocurrency API
			</h2>
			<div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
				<div className="mt-4 sm:mt-0 sm:ml-3">
					{!response && (
						<button
							className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
							onClick={() => getNews()}
						>
							Get Latest News
						</button>
					)}
				</div>
			</div>
			<div className="mt-10 grid grid-cols-2 gap-16 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
			{response &&
					response.map((news, index) => {
						return (
							<div className="mt-10 grid justify-items-center" key={index}>
								<img
									src={news.related_image_big}
									width="300"
									length="300"
									className="rounded-lg"
								></img>
								<a
									className="text-primary text-center hover:text-active transition-colors duation-200"
									key={news.news_ID}
									href={
										news.news_link
											? news.news_link
											: news.third_party_url
									}
								>
									<h3 className="mt-10 text-xl  md:text-2xl">
										{news.HEADLINE}
									</h3>
									<p className="mt-4 text-center text-md md:text-lg opacity-60">
										{news.news_provider_name}
									</p>
								</a>
							</div>
						);
					})}
			</div>
			{response && (
				<div className="flex flex-col mt-10 justify-center">
					<button
						className="block text-active text-base font-bold"
						onClick={() => {
							setPage(page + 1);
							getNews();
						}}
					>
						Load next page
					</button>
				</div>
			)}
		</div>
		<footer className="text-center text-primary lg:text-left text-lg">
            <hr className="footer" />
            <div className="text-center p-3">
                <ul className="flex place-content-center">
                    <li >
                        <Link href="https://github.com/Onome15" >
                            <a target="_blank" rel="noopener noreferrer">
                                <AiFillGithub size={30} className='text-green-400' />
                            </a>
                        </Link>
                    </li>

                    <li >
                        <Link href="https://www.linkedin.com/in/orhero-onome/" >
                            <a target="_blank" rel="noopener noreferrer">
                                <RiLinkedinBoxFill size={30} className='text-green-400' />
                            </a>
                        </Link>
                    </li>
                </ul>
                © 2022 Copyright:
                <Link href="https://orherojoe.netlify.com/"><a className="underline text-purple-900"> JoeTechOn</a></Link>
            </div>
        </footer>
		</main>
	);
}