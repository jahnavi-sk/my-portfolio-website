import React from 'react';
import { IconBrandLinkedin, IconBrandGithub, IconBrandTwitter, IconMail, IconBrandDiscord, IconBrandLeetcode } from '@tabler/icons-react';
import Link from 'next/link';

export const Footer = () => {
	const contactLinks = [
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/jahnavi-s-kumar-7b5740306/',
			icon: <IconBrandLinkedin className="h-5 w-5" />
		},
		{
			name: 'GitHub',
			href: 'https://github.com/jahnavi-sk',
			icon: <IconBrandGithub className="h-5 w-5" />
		},
		{
			name: 'Email',
			href: 'mailto:jahnavi31blr@gmail.com',
			icon: <IconMail className="h-5 w-5" />
		},
		{
			name: 'LeetCode',
			href: 'https://leetcode.com/u/feat_jahnavi/',
			icon: <IconBrandLeetcode className="h-5 w-5" />
		}
	];

	return (
		<footer className="bg-gray-100 dark:bg-neutral-900 mt-auto py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-center">
					<h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Connect With Me</h3>

					<div className="flex space-x-6 mb-6">
						{contactLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
								target="_blank"
								rel="noopener noreferrer"
								aria-label={link.name}
							>
								<div className="bg-white dark:bg-neutral-800 p-3 rounded-full shadow-sm hover:shadow-md transition-shadow">{link.icon}</div>
							</Link>
						))}
					</div>

					<div className="text-center">
						<p className="text-sm text-gray-600 dark:text-gray-400">Feel free to reach out for collaborations or just to say hello!</p>
						<p className="text-sm text-gray-500 dark:text-gray-500 mt-4">© {new Date().getFullYear()} Jahnavi SK. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};
