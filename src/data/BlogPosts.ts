import FHIR  from '../assets/img/FHIR.png'


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
	body: string;
}

export const Posts: IBlogPost[] = [
	{
		id: 1,
		category: Category.CAREER,
		title: 'My Journey with AWS DeepRacer: A Hands-On Dive into Reinforcement Learning',
		meta: 'By Abdallah Bahrawi | September 1, 2024 | career',
		preview: 'My journey with AWS DeepRacer began with a simple LinkedIn discovery. As someone deeply interested in AI and machine learning, I was naturally drawn to this innovative platform.',
		imgSrc: FHIR,
		body: `
		<h2>Discovering AWS DeepRacer</h2>
		<p>My journey with AWS DeepRacer began with a simple LinkedIn discovery. As someone deeply interested in AI and machine learning, I was naturally drawn to this innovative platform. The AWS DeepRacer Student version stood out as an excellent entry point into the industry, offering a unique blend of competition and learning. The challenge of competing for a scholarship, coupled with the gamified learning experience, made it an exciting way to delve into reinforcement learning.</p>
  
		<h2>Learning the Ropes</h2>
		<p>To get started, I utilized a range of resources, including the official AWS DeepRacer documentation, GitHub repositories, and insightful articles from Medium and Dev.com. The AWS DeepRacer Student website provided foundational materials, but I also sought out additional knowledge through Discord communities and YouTube channels like Boltron. This diverse mix of resources helped me build a solid understanding of reinforcement learning and model training.</p>
  
		<h2>Overcoming Challenges</h2>
		<p>The path was not without its hurdles. One major challenge was dealing with complex reward functions and the risk of overfitting. To tackle this, I simplified my reward functions and sought advice from experienced racers. Another significant challenge was the limited training hours. With only 10 hours available, I initially trained multiple models for short periods to test various functions. In the second month, I extended training durations and saw improved results. Although I didn’t train locally, that’s an option I considered for future experiments.</p>
  
		<h2>Training Approach and Techniques</h2>
		<p>My training strategy focused on simplicity. I aimed to keep reward functions straightforward to enhance learning efficiency. By rewarding the car for staying near the center of the track and penalizing deviations, I improved stability. I also experimented with different training durations, emphasizing continuous rather than discrete reward functions.</p>
  
		<h2>Competing and Performance</h2>
		<p>In my second month of competing in the student league, I achieved a regional ranking of 12th. Despite some setbacks in my initial month, this was a significant milestone. My model's performance, while slightly trailing behind a friend's model by 1.8 seconds, pushed me to further optimize my reward function. Though there was always room for improvement, my model showed consistent performance with decent lap times.</p>
  
		<h2>Key Takeaways and Future Plans</h2>
		<p>From this experience, I learned the importance of experimentation, balancing exploration and exploitation, and the value of persistence. Precise reward functions play a crucial role in shaping desired behaviors. I achieved a notable regional ranking, a testament to my progress from the first month.</p>
		
		<p>Looking ahead, I plan to continue working with AWS DeepRacer, aiming to participate in both the student league and original races. I also hope to pursue scholarships and further refine my skills. AWS DeepRacer has proven to be a valuable tool in mastering AI and machine learning concepts, serving as a practical stepping stone towards more complex reinforcement learning projects.</p>
  
		<h2>Tips for Newcomers</h2>
		<p>For those new to AWS DeepRacer, start with simple reward functions and gradually increase complexity. Don’t be discouraged by failures; each one provides valuable insights. Engaging with the community and participating in discussions can also enhance your learning experience.</p>
  
		<h2>Common Pitfalls to Avoid</h2>
		<p>Avoid overly complex reward functions, training for excessively long periods, and neglecting to monitor training runs closely. These pitfalls can negatively impact your model’s performance and hinder your progress.</p>
  
		<p>AWS DeepRacer aligns perfectly with my broader career goals, offering practical experience and valuable skills in AI and machine learning. I'm excited to continue this journey and explore new opportunities in the world of reinforcement learning.</p>
	  `,
	}
];
