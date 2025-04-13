// 'use client';
// import { IconArrowNarrowRight } from '@tabler/icons-react';
// import { useState, useRef, useId, useEffect } from 'react';

// interface SlideData {
// 	title: string;
// 	button: string;
// 	src: string;
// }

// interface SlideProps {
// 	slide: SlideData;
// 	index: number;
// 	current: number;
// 	handleSlideClick: (index: number) => void;
// }

// const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
// 	const slideRef = useRef<HTMLLIElement>(null);

// 	const xRef = useRef(0);
// 	const yRef = useRef(0);
// 	const frameRef = useRef<number>();

// 	useEffect(() => {
// 		const animate = () => {
// 			if (!slideRef.current) return;

// 			const x = xRef.current;
// 			const y = yRef.current;

// 			slideRef.current.style.setProperty('--x', `${x}px`);
// 			slideRef.current.style.setProperty('--y', `${y}px`);

// 			frameRef.current = requestAnimationFrame(animate);
// 		};

// 		frameRef.current = requestAnimationFrame(animate);

// 		return () => {
// 			if (frameRef.current) {
// 				cancelAnimationFrame(frameRef.current);
// 			}
// 		};
// 	}, []);

// 	const handleMouseMove = (event: React.MouseEvent) => {
// 		const el = slideRef.current;
// 		if (!el) return;

// 		const r = el.getBoundingClientRect();
// 		xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
// 		yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
// 	};

// 	const handleMouseLeave = () => {
// 		xRef.current = 0;
// 		yRef.current = 0;
// 	};

// 	const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
// 		event.currentTarget.style.opacity = '1';
// 	};

// 	const { src, button, title } = slide;

// 	return (
// 		// Perspective container remains the same
// 		<div className="[perspective:1200px] [transform-style:preserve-3d]">
// 			{/* --- CHANGE HERE: Reduced width, height, and margin --- */}
// 			<li
// 				ref={slideRef}
// 				className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[40vmin] h-[40vmin] mx-[3vmin] z-10 " // Changed 70vmin to 60vmin, 4vmin to 3vmin
// 				onClick={() => handleSlideClick(index)}
// 				onMouseMove={handleMouseMove}
// 				onMouseLeave={handleMouseLeave}
// 				style={{
// 					transform: current !== index ? 'scale(0.98) rotateX(8deg)' : 'scale(1) rotateX(0deg)',
// 					transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
// 					transformOrigin: 'bottom'
// 				}}
// 			>
// 				{/* Inner content structure remains the same */}
// 				<div
// 					className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
// 					style={{
// 						transform: current === index ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)' : 'none'
// 					}}
// 				>
// 					<img
// 						className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
// 						style={{
// 							opacity: current === index ? 1 : 0.5
// 						}}
// 						alt={title}
// 						src={src}
// 						onLoad={imageLoaded}
// 						loading="eager"
// 						decoding="sync"
// 					/>
// 					{current === index && <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />}
// 				</div>

// 				<article
// 					className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${current === index
// 						? 'opacity-100 visible'
// 						: 'opacity-0 invisible'}`}
// 				>
// 					<h2 className="text-lg md:text-2xl lg:text-4xl font-semibold  relative">{title}</h2>
// 					<div className="flex justify-center">
// 						{/* <button className="mt-6  px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
// 							{button}
// 						</button> */}
// 					</div>
// 				</article>
// 			</li>
// 		</div>
// 	);
// };

// interface CarouselControlProps {
// 	type: string;
// 	title: string;
// 	handleClick: () => void;
// }

// const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
// 	return (
// 		<button
// 			className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type ===
// 			'previous'
// 				? 'rotate-180'
// 				: ''}`}
// 			title={title}
// 			onClick={handleClick}
// 		>
// 			<IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
// 		</button>
// 	);
// };

// interface CarouselProps {
// 	slides: SlideData[];
// }

// export function Carousel({ slides }: CarouselProps) {
// 	const [ current, setCurrent ] = useState(0);

// 	const handlePreviousClick = () => {
// 		const previous = current - 1;
// 		setCurrent(previous < 0 ? slides.length - 1 : previous);
// 	};

// 	const handleNextClick = () => {
// 		const next = current + 1;
// 		setCurrent(next === slides.length ? 0 : next);
// 	};

// 	const handleSlideClick = (index: number) => {
// 		if (current !== index) {
// 			setCurrent(index);
// 		}
// 	};

// 	const id = useId();

// 	return (
// 		// --- CHANGE HERE: Reduced container width and height ---
// 		<div className="relative w-[60vmin] h-[60vmin] mx-auto" aria-labelledby={`carousel-heading-${id}`}>
// 			{' '}
// 			{/* Changed 70vmin to 60vmin */}
// 			<ul
// 				// --- CHANGE HERE: Adjusted negative margin to match slide margin ---
// 				className="absolute flex mx-[-3vmin] transition-transform duration-1000 ease-in-out" // Changed -4vmin to -3vmin
// 				style={{
// 					transform: `translateX(-${current * (100 / slides.length)}%)` // This calculation remains the same percentage logic
// 				}}
// 			>
// 				{slides.map((slide, index) => <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={handleSlideClick} />)}
// 			</ul>
// 			{/* Controls position adjusted relative to the container height */}
// 			<div className="absolute flex justify-center w-full top-[calc(70%+1rem)]">
// 				<CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
// 				<CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
// 			</div>
// 		</div>
// 	);
// }

'use client';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import { useState, useRef, useId, useEffect } from 'react';

interface SlideData {
	title: string;
	button?: string;
	src: string;
}

interface SlideProps {
	slide: SlideData;
	index: number;
	current: number;
	handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
	const slideRef = useRef<HTMLLIElement>(null);

	const xRef = useRef(0);
	const yRef = useRef(0);
	// const frameRef = useRef<number>();
	const frameRef = useRef<number | null>(null);

	useEffect(() => {
		const animate = () => {
			if (!slideRef.current) return;

			const x = xRef.current;
			const y = yRef.current;

			slideRef.current.style.setProperty('--x', `${x}px`);
			slideRef.current.style.setProperty('--y', `${y}px`);

			frameRef.current = requestAnimationFrame(animate);
		};

		frameRef.current = requestAnimationFrame(animate);

		return () => {
			if (frameRef.current) {
				cancelAnimationFrame(frameRef.current);
			}
		};
	}, []);

	const handleMouseMove = (event: React.MouseEvent) => {
		const el = slideRef.current;
		if (!el) return;

		const r = el.getBoundingClientRect();
		xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
		yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
	};

	const handleMouseLeave = () => {
		xRef.current = 0;
		yRef.current = 0;
	};

	const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
		event.currentTarget.style.opacity = '1';
	};

	const { src, button, title } = slide;

	return (
		// Perspective container remains the same
		<div className="[perspective:1200px] [transform-style:preserve-3d]">
			<li
				ref={slideRef}
				className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[calc(100vw/3-2rem)] md:w-[calc(100vw/4-2rem)] lg:w-[calc(100vw/5-2rem)] h-[40vmin] mx-4 z-10"
				onClick={() => handleSlideClick(index)}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					transform: current !== index ? 'scale(0.98) rotateX(8deg)' : 'scale(1) rotateX(0deg)',
					transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
					transformOrigin: 'bottom'
				}}
			>
				{/* Inner content structure remains the same */}
				<div
					className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
					style={{
						transform: current === index ? 'translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)' : 'none'
					}}
				>
					<img
						className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
						style={{
							opacity: current === index ? 1 : 0.5
						}}
						alt={title}
						src={src}
						onLoad={imageLoaded}
						loading="eager"
						decoding="sync"
					/>
					{current === index && <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />}
				</div>

				<article
					className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${current === index
						? 'opacity-100 visible'
						: 'opacity-0 invisible'}`}
				>
					<h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">{title}</h2>
					<div className="flex justify-center">
						{/* <button className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
							{button}
						</button> */}
					</div>
				</article>
			</li>
		</div>
	);
};

interface CarouselControlProps {
	type: string;
	title: string;
	handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
	return (
		<button
			className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${type ===
			'previous'
				? 'rotate-180'
				: ''}`}
			title={title}
			onClick={handleClick}
		>
			<IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
		</button>
	);
};

interface CarouselProps {
	slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
	const [ current, setCurrent ] = useState(0);

	const handlePreviousClick = () => {
		const previous = current - 1;
		setCurrent(previous < 0 ? slides.length - 1 : previous);
	};

	const handleNextClick = () => {
		const next = current + 1;
		setCurrent(next === slides.length ? 0 : next);
	};

	const handleSlideClick = (index: number) => {
		if (current !== index) {
			setCurrent(index);
		}
	};

	const id = useId();

	return (
		<div className="relative w-full overflow-hidden py-12" aria-labelledby={`carousel-heading-${id}`}>
			<ul
				className="flex transition-transform duration-1000 ease-in-out px-4 md:px-8 lg:px-12"
				style={{
					transform: `translateX(calc(-${current} * (100vw / 5 - 0.4rem)))`
				}}
			>
				{slides.map((slide, index) => <Slide key={index} slide={slide} index={index} current={current} handleSlideClick={handleSlideClick} />)}
			</ul>
			<div className="absolute flex justify-center w-full bottom-0">
				<CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
				<CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
			</div>
		</div>
	);
}
