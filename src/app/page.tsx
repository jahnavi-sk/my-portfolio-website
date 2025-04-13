// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

'use client';
import Image from 'next/image';
import React from 'react';
import { WavyBackground } from '../components/ui/wavy-background';
import { PinContainer } from '../components/ui/3d-pin';
import { Cover } from '../components/ui/cover';
import { BackgroundBeams } from '../components/ui/background-beams';
import { Carousel } from '../components/ui/carousel';

import { Box, Lock, Search, Settings, Sparkles } from 'lucide-react';
import { GlowingEffect } from '../components/ui/glowing-effect';
import { ColourfulText } from '../components/ui/colorful-text';

import { FloatingDock } from '../components/ui/floating-dock';
import {
	IconArtboard,
	IconBrandGithub,
	IconBrandLinkedin,
	IconBrandX,
	IconExchange,
	IconHome,
	IconNewSection,
	IconPhoneDone,
	IconSparkles,
	IconTerminal2,
	IconUserSearch
} from '@tabler/icons-react';
import { Footer } from '../components/ui/footer';
import { Pixelify_Sans } from 'next/font/google';

const pixelify = Pixelify_Sans({
	weight: [ '400', '700' ],
	subsets: [ 'latin' ]
});

export default function Page() {
	const slideData = [
		{
			title: 'Next.js',

			src: 'https://skillicons.dev/icons?i=nextjs'
		},
		{
			title: 'SQL',

			src: 'https://skillicons.dev/icons?i=mysql'
		},
		{
			title: 'PostgreSQL',

			src: 'https://skillicons.dev/icons?i=postgres'
		},
		{
			title: 'React.js',

			src: 'https://skillicons.dev/icons?i=react'
		},
		{
			title: 'Node.js',

			src: 'https://skillicons.dev/icons?i=nodejs'
		},
		{
			title: 'Java',

			src: 'https://skillicons.dev/icons?i=java'
		},
		{
			title: 'Javascript',
			src: 'https://cdn.simpleicons.org/javascript'
		},
		{
			title: 'Python',

			src: 'https://skillicons.dev/icons?i=python'
		},
		{
			title: 'AI/ML',
			button: 'Explore Skills',
			src: 'https://skillicons.dev/icons?i=AI'
		},
		{
			title: 'Tailwind CSS',
			button: 'Explore Skills',
			src: 'https://skillicons.dev/icons?i=tailwind'
		},
		{
			title: 'HTML',
			button: 'Explore Skills',
			src: 'https://skillicons.dev/icons?i=html'
		},
		{
			title: 'Git',
			button: 'Explore Skills',
			src: 'https://skillicons.dev/icons?i=git'
		}
	];

	const links = [
		{
			title: 'Home',
			icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
			href: '#home-section'
		},

		{
			title: 'About Me',
			icon: <IconUserSearch className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
			href: '#about-me-section'
		},
		{
			title: 'Skills',
			icon: <IconSparkles className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
			href: '#skills-section'
		},
		{
			title: 'Projects',
			icon: <IconArtboard className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
			href: '#projects-section'
		},
		{
			title: 'Contact',
			icon: <IconPhoneDone className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
			href: '#contact-section'
		},

		{
			title: 'LinkedIn',
			icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
			href: 'https://www.linkedin.com/in/jahnavi-s-kumar-7b5740306'
		},
		{
			title: 'GitHub',
			icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
			href: 'https://github.com/jahnavi-sk'
		}
	];

	return (
		<div>
			{/* Section 1 */}
			<section id="home-section">
				<div className="min-h-screen flex items-center justify-center">
					<div className="flex flex-col items-center justify-center text-center">
						<p className="text-2xl sm:3xl md:text-5xl lg:text-7xl text-white font-bold  inter-var">Hi there! I am Jahnavi.</p>

						<p className="md:text-2xl mt-4 text-white font-normal inter-var">
							A passionate computer science undergrad creating exciting projects and having fun along the way :)
						</p>
					</div>
				</div>
			</section>
			<BackgroundBeams />

			{/* About Me*/}
			<section id="about-me-section">
				<h1 className="pb-20 text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
					<ColourfulText text="About me !" />
				</h1>
				<ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
					<GridItem
						area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
						icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
						title="Introduction"
						description="A software developer in the making. Bright, curious and always up to fix a new problem !"
					/>

					<GridItem
						area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
						icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
						title="What am I doing currently ?"
						description="I am writing a research paper along with a peer about home-based physiotherapy based on a project I worked on during my internship at the PES University Research Centre."
					/>

					<GridItem
						area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
						icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
						title="Current Project ?"
						description="I have been working on a group based recommendation system focussed on student research community for a while now as a part of my final year project. Busy researching and cleaning data... Stay tuned for more updates !"
					/>

					<GridItem
						area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
						icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
						title="Artificial Intelligence Journey"
						description="I have recently been working with LLM's and exploring its capacities and limitations. Fascinating."
					/>

					<GridItem
						area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
						icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
						title="Coming soon on Aceternity UI"
						description="Film enthusiast + Music lover. So much that I made a playlist recommender based on a user's diary entry :P"
					/>
				</ul>
			</section>

			{/* Skills */}
			<section id="skills-section">
				<h2 className="pt-30 text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
					<div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
						<div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
							<span className="">My skill set</span>
						</div>
					</div>
				</h2>
				<Carousel slides={slideData} />
			</section>
			{/* Projects */}
			<section id="projects-section">
				<h1 className="pt-40 text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
					Check out some of my <br /> <Cover>projects</Cover>
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-2 place-items-center p-8">
					<PinContainer title="YATDQ !" href="https://github.com/jahnavi-sk/YATDQ">
						<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
							<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">Yet Another Distributed Task Queue</h3>
							<div className="text-base !m-0 !p-0 font-normal">
								<span className="text-slate-500 ">
									A distributed task queue system where clients can send asynchronous tasks to be processed by worker nodes.
								</span>
							</div>
							<Image src="/yatdq.png" alt="YATDQ preview" width={400} height={300} className="rounded-lg mt-4" />
							<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
						</div>
					</PinContainer>
					<PinContainer title="Playlist Creator !" href="https://github.com/jahnavi-sk/playlist-generator">
						<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
							<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">Smart Playlist Creator</h3>
							<div className="text-base !m-0 !p-0 font-normal">
								<span className="text-slate-500 ">
									A music recommendation system that analyzes a user's diary entry and crafts a personalized playlist to guide them through an
									emotional journey.
								</span>
							</div>
							<Image src="/playlist.jpeg" alt="YATDQ preview" width={400} height={300} className="rounded-lg mt-4" />

							<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
						</div>
					</PinContainer>
					<PinContainer title="C Parser" href="https://github.com/jahnavi-sk/c_parser">
						<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
							<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">C Parser Website</h3>
							<div className="text-base !m-0 !p-0 font-normal">
								<span className="text-slate-500 ">
									A user friendly platform designed for academic environments where students can submit their C Code for which parsing is
									done. The teacher can also correct the code.
								</span>
							</div>
							<Image src="/cparser.png" alt="C Parser" width={400} height={300} className="rounded-lg mt-4" />
							<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
						</div>
					</PinContainer>
					<PinContainer title="Portfolio Tracker !" href="https://github.com/jahnavi-sk/PortfolioTracker">
						<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
							<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">Stock Portfolio Tracker</h3>
							<div className="text-base !m-0 !p-0 font-normal">
								<span className="text-slate-500 ">A website whick keeps track of user's stocks and changes in the stock market.</span>
							</div>
							<Image src="/portfolioTracker.png" alt="portfolio tracker" width={400} height={300} className="rounded-lg mt-4" />

							{/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
						</div>
					</PinContainer>
					<PinContainer title="Neat Folder !" href="https://github.com/jahnavi-sk/neat-folder">
						<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
							<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">Neat Folder</h3>
							<div className="text-base !m-0 !p-0 font-normal">
								<span className="text-slate-500 ">
									Python script to keep the Downloads folder in Windows clean and sorted in different folders.
								</span>
							</div>
							<Image src="/neatfolder.jpeg" alt="Neat Folder" width={400} height={300} className="rounded-lg mt-4" />

							<div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
						</div>
					</PinContainer>
					<PinContainer title="Video Streaming !" href="https://github.com/jahnavi-sk/video-streaming">
						<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
							<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">Video Streaming with Multiple Clients</h3>
							<div className="text-base !m-0 !p-0 font-normal">
								<span className="text-slate-500 ">
									Server-Client system for real-time video and audio streaming over secure connections using SSL/TLS.
								</span>
							</div>
							<Image src="/videostreaming.jpeg" alt="Neat Folder" width={400} height={300} className="rounded-lg mt-4" />
							{/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
						</div>
					</PinContainer>
				</div>
			</section>

			<FloatingDock
				mobileClassName="translate-y-20" // only for demo, remove for production
				items={links}
			/>
			<br />
			<br />
			{/* Footer */}
			<section id="contact-section">
				<Footer />
			</section>
		</div>
	);
}

interface GridItemProps {
	area: string;
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
	return (
		<li className={`min-h-[14rem] list-none ${area}`}>
			<div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
				<GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
				<div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
					<div className="relative flex flex-1 flex-col justify-between gap-3">
						<div className="w-fit rounded-lg border border-gray-600 p-2">{icon}</div>
						<div className="space-y-3">
							<h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
								{title}
							</h3>
							<h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
								{description}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
