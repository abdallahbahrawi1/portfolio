// import FHIR  from '../assets/img/FHIR.png'


export enum Category {
	FULLSTACK = 'fullstack',
	CLOUD = 'cloud',
	PROJECTS = 'projects',
	CAREER = 'career',
}

export interface IBlogPost {
	id: number;
	category: Category;
	title: string;
	meta: string;
	preview: string;
	imgSrc: string;
	link: string;
}

export const Posts: IBlogPost[] = [
	// {
	// 	id: 1,
	// 	category: Category.FULLSTACK,
	// 	title: 'title1',
	// 	meta: 'By Abdallah Bahrawi | June 15, 2023 | Fullstack Development',
	// 	preview: 'preview1',
	// 	imgSrc: FHIR,
	// 	link: 'link1',
	// }
];
