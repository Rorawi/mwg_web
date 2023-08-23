// import React, { useState } from "react";
// import BlogSection from "./BlogSection";
// import BlogPost from "./BlogPost";
// import styles from "../components/mainblog.module.css";
// import img1 from "../assets/blog.avif";
// import director from "../assets/director.avif";
// import bridging from "../assets/bridgingdigiskills.avif";
// import girlscancode from "../assets/girlscancode.avif";
// import whatyouneedtoknow from "../assets/whatyouneedtoknowtoland.avif";
// import firstmedlit from "../assets/mobilewebmedialiteracy.avif";
// import trashtotreasure from "../assets/trashtotreasure.avif";
// import tiktok from "../assets/tiktokandracism.avif";
// import blogImg2 from "../assets/code-for-ghana.avif";
// import blogImg1 from "../assets/fime.avif";
// import blogImg3 from "../assets/Mobile-Web-Ghana-Tech-3.avif";
// import SingleBlogPost from "./SingleBlogPost";

// const MainBlog = () => {
//   const [selectedBlogPost, setSelectedBlogPost] = useState(null);
//   const [search, setSearch] = useState("");
//   const handleBlogPostClick = (blogPost) => {
//     setSelectedBlogPost(blogPost);
//   };

//   const blogPosts = [
//     {
//       title:
//         "Empowering Small Businesses with Digital Marketing: Mobile Web Ghana Shares Insights from Hopeline Institute’s Workshop",
//       content:
//         "On Tuesday 18th and Wednesday 19th April, Hopeline Institute hosted a digital marketing...",
//       blogImg: blogImg3,
//       day: "15th",
//       month: "May",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "Empowering Small Businesses with Digital Marketing: Mobile Web Ghana Shares Insights from Hopeline Institute’s Workshop",
//           name: "mobileweb_",
//           day: "29th",
//           month: "May",
//           year: "2023",
//           img: director,
//           blogImg: blogImg3,
//           content: `On Tuesday 18th and Wednesday 19th April, Hopeline Institute hosted a digital marketing workshop for SMEs aimed at equipping small business owners with the skills necessary to succeed in today’s digital landscape. Mobile Web Ghana attended the workshop as a participant, to gain valuable insights and share expertise in digital marketing.

//           The workshop ran from 10:00 am to 2:00 pm and featured a mix of in-person and online attendees, making it a hybrid session. The workshop covered a range of topics, from basic marketing concepts to advanced digital strategies. The facilitator, an experienced digital marketer, shared valuable insights on how to reach and engage with customers online, build a strong brand, and drive sales.

//           As a participant, Mobile Web Ghana gained valuable insights into the importance of having a well-defined digital marketing strategy. Small businesses must be intentional about their online presence and take the time to understand their target audience, competition, and market trends. By leveraging social media, email marketing, and search engine optimization (SEO), small businesses can effectively connect with customers and build brand awareness.

//           `,
//         }),
//     },
//     {
//       title:
//         "Enhancing Media Literacy: A Recap of the Second Youth Media Literacy Twitter Spaces Session",
//       content:
//         "On May 19, 2023, the second Youth Media Literacy Twitter Spaces session took place, focusing on the ...",
//       blogImg: blogImg1,
//       day: "29th",
//       month: "May",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "Enhancing Media Literacy: A Recap of the Second Youth Media Literacy Twitter Spaces Session",
//           name: "Isaac",
//           day: "29th",
//           month: "May",
//           year: "2023",
//           img: director,
//           blogImg: blogImg1,
//           content: `On May 19, 2023, the second Youth Media Literacy Twitter Spaces session took place, focusing on the pressing issue of
//            fake news and misinformation. The session aimed to equip participants with essential insights and strategies to identify and avoid
//            false information while empowering them to become responsible consumers and sharers of news.
//           Let’s dive into the key takeaways from the session and explore the tools and techniques discussed to combat the spread of fake news.
//            1. Techniques Used in Spreading Fake News: During the session, expert speakers shed light on various tactics employed in spreading fake news:

//           a) Clickbait headlines: These captivating but often misleading headlines are designed to grab attention and drive traffic to unreliable sources.

//           b) Manipulated images: Photoshopped or altered images are used to distort facts or evoke specific emotional responses.

//           c) Misinformation campaigns: Coordinated efforts to spread false information, often through social media platforms, with the intention to deceive and manipulate public opinion.

//           2. Identifying and Verifying Credible Sources:

//           The panelists emphasized the significance of critical evaluation and shared practical tips to identify reliable and trustworthy information:

//           a) Cross-referencing: Verify information by checking multiple reputable sources. Consistency across credible sources increases the likelihood of accurate information.

//           b) Fact-checking organizations: Utilize fact-checking websites such as Snopes, FactCheck.org, or PolitiFact to verify claims and debunk misinformation.

//           c) Source credibility assessment: Evaluate the reputation, expertise, and potential bias of news outlets or authors. Transparent sourcing and adherence to journalistic standards are indicators of trustworthiness.

//           3. Tools for Identifying False Information and Verifying News:
//           Several tools and resources were discussed during the session to assist in identifying false information and verifying news:

//           a) Reverse image search: Utilize tools like Google Reverse Image Search or TinEye to determine the authenticity and original source of an image, helping to unveil potential manipulation or misrepresentation.

//           b) Browser extensions: Install browser extensions like NewsGuard or SurfSafe to receive credibility ratings for websites, providing alerts for potentially unreliable sources.

//           c) Social media verification: Verify the authenticity of accounts on platforms like Twitter through verification badges, particularly when dealing with information from public figures or organizations.

//           d) Media literacy resources: Educate yourself on media literacy through resources such as the News Literacy Project, MediaSmarts, or the Digital Civics Toolkit, which offer valuable guidance on identifying misinformation.

//           4. Combating the Spread of Fake News:

//           The session emphasized the shared responsibility of individuals, media organizations, and technology platforms in combating the spread of fake news. Here are some recommended steps:

//           a) Media literacy education: Promote media literacy programs to equip individuals, especially the youth, with critical thinking skills to evaluate and analyze information critically.

//           b) Responsible sharing practices: Encourage responsible sharing by verifying information before sharing or retweeting. Pause and think before amplifying unverified claims.

//           c) Reporting mechanisms: Actively report fake news and misinformation on social media platforms, enabling content moderation and the removal of misleading information.

//           d) Fact-checking initiatives: Support and promote fact-checking organizations that play a crucial role in debunking false claims and disseminating accurate information.
//           The second Youth Media Literacy Twitter Spaces session offered valuable insights into combating fake news and misinformation. By applying techniques such as cross-referencing information, utilizing fact-checking resources, and employing tools like reverse image search, individuals can enhance their media literacy skills and contribute to a more informed society. Through media literacy education,
//           responsible sharing practices, reporting mechanisms, and support for fact-checking initiatives, we can collectively combat the spread of fake news and foster a trustworthy information ecosystem.
//           `,
//         }),
//     },
//     {
//       title: "Teaching Media Literacy Skills to Youth in Ghana",
//       content:
//         "Media literacy skills have become increasingly essential in today’s digital age...",
//       blogImg: blogImg2,
//       day: "13th",
//       month: "May",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title: "Teaching Media Literacy Skills to Youth in Ghana",
//           name: "Issac",
//           day: "29th",
//           month: "May",
//           year: "2023",
//           img: director,
//           blogImg: blogImg2,
//           content: `Media literacy skills have become increasingly essential in today’s digital age,
//           where young people are constantly bombarded with information from various media sources.
//            In Ghana, Mobile Web Ghana is actively involved in promoting media literacy among youth
//            through our youth media literacy project. This initiative aims to equip young people with
//            the necessary skills to critically analyze and navigate the media landscape, empowering them
//               to become informed and responsible media consumers.In this blog post, we will explore the importance
//                of teaching media literacy skills to youth in Ghana and highlight the significant role our youth media
//                literacy project plays in achieving this goal.

//                1. Understanding Media Influence:

//                Media has a powerful influence on shaping opinions, beliefs, and behaviors. By teaching media literacy skills, we enable youth to recognize and critically evaluate the messages conveyed through various media platforms. Through our youth media literacy project, we educate young people about media bias, stereotypes, and manipulation techniques. By fostering critical thinking, we empower them to distinguish between credible and unreliable sources of information, ensuring they make informed decisions and form their own opinions.

//                2. Developing Digital Citizenship:

//                Media literacy is closely tied to digital citizenship, which encompasses responsible and ethical behavior in the digital realm. Our youth media literacy project emphasizes the importance of digital literacy, online safety, and respectful online communication. We educate youth on the potential risks and challenges they may encounter online, such as cyberbullying, misinformation, and privacy concerns. By equipping them with the necessary skills, we empower young people to navigate the digital world responsibly and become active contributors to positive online communities.

//                Online in-person media literacy session with students from of GIJ and 5 Star University.
//                3. Empowering Critical Analysis:

//                Media literacy skills enable youth to critically analyze media content, including news articles, social media posts, and advertisements. Through our youth media literacy project, we provide practical tools and strategies for evaluating information, fact-checking, and verifying sources. By fostering critical analysis skills, we help young people develop a discerning eye and avoid falling victim to misinformation and fake news. This empowers them to make informed decisions, engage in constructive discussions, and contribute to a more informed society.

//                4. Encouraging Media Creation:

//                In addition to consuming media, our youth media literacy project encourages young people to become active media creators. By providing training and resources, we empower them to produce their own media content, such as podcasts, videos, and blogs. Through hands-on experiences, youth develop a deeper understanding of the media creation process, including storytelling techniques, ethical considerations, and the power of digital platforms. This fosters creativity, self-expression, and critical reflection on the role of media in society.

//                Teaching media literacy skills to youth in Ghana is a crucial aspect of our youth media literacy project at Mobile Web Ghana. By equipping young people with these skills, we empower them to navigate the media landscape with confidence, critically analyze information, and become responsible digital citizens. Through our initiatives, we strive to create a generation of media-savvy youth who are capable of discerning between credible and unreliable sources, actively engaging in digital communities, and contributing positively to the media ecosystem. Our youth media literacy project plays a significant role in fostering media literacy skills and promoting a media-literate society in Ghana.

//                `,
//         }),
//     },
//     {
//       title:
//         "Partnering for Progress: Africa Digital Skills Conference 2023 Empowering Africa’s Digital Future",
//       content: `In today’s rapidly evolving digital landscape, equipping individuals with the necessary digital skills has become more critical than ever. Recognizing the urgent need to bridge the digital skills gap in Africa, Mobile Web Ghana has organized the annual Africa Digital Skills Conference 2023. This three-day virtual event aims to provide practical skills training to a diverse audience, including youth, entrepreneurs, students, professionals, government institutions, and more. By calling for partnerships and collaboration, this conference represents a significant initiative towards achieving the Sustainable Development Goals (SDGs) and fostering Africa’s digital skills advancement.
//      Addressing the Digital Skills `,
//       blogImg: blogImg2,
//       day: "13th",
//       month: "May",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "Partnering for Progress: Africa Digital Skills Conference 2023 Empowering Africa’s Digital Future",
//           name: "Talika Bernard",
//           day: "13th",
//           month: "May",
//           year: "2023",
//           img: director,
//           blogImg: blogImg2,
//           content: `In today’s rapidly evolving digital landscape, equipping individuals with the necessary digital skills has become more critical than ever. Recognizing the urgent need to bridge the digital skills gap in Africa, Mobile Web Ghana has organized the annual Africa Digital Skills Conference 2023. This three-day virtual event aims to provide practical skills training to a diverse audience, including youth, entrepreneurs, students, professionals, government institutions, and more. By calling for partnerships and collaboration, this conference represents a significant initiative towards achieving the Sustainable Development Goals (SDGs) and fostering Africa’s digital skills advancement.

//           Addressing the Digital Skills Gap: Africa’s digital skills gap poses a significant challenge to the continent’s growth and development. Many individuals and communities lack the skills required to leverage the digital tools and opportunities available. The Africa Digital Skills Conference 2023 acknowledges this disparity and aims to address it head-on by providing accessible and practical training for various stakeholders across Africa.

//           Key Features of the Conference:
//           Practical Skills Training: The conference focuses on providing hands-on training in essential digital skills such as web development, data analytics, digital marketing, coding, design, and more. These practical workshops empower participants to acquire tangible skills that are in high demand in today’s digital economy.
//           Diverse Audience Engagement: The conference welcomes a wide range of participants, including youth, entrepreneurs, students, professionals, and government institutions. By bringing together diverse perspectives, the conference fosters collaboration, knowledge sharing, and networking opportunities to drive digital skill development across various sectors.]
//           Virtual Accessibility: Recognizing the importance of inclusivity and accessibility, the Africa Digital Skills Conference 2023 is conducted virtually. This virtual platform enables participation from individuals and organizations across Africa and beyond, eliminating geographical barriers and ensuring broad engagement.
//           Expert Speakers and Facilitators: The conference features industry experts, thought leaders, and skilled trainers who will deliver engaging sessions, share best practices, and provide insights into emerging trends. Their expertise will inspire and equip participants with the knowledge needed to excel in the digital landscape.
//           Partnering for Impact: The conference serves as a call for partnerships and collaboration to bridge the digital skills gap effectively. It invites organizations, governments, educational institutions, and individuals passionate about digital empowerment to join forces and contribute to Africa’s digital transformation.

//           Contribution to the SDGs: The Africa Digital Skills Conference 2023 aligns with several SDGs, including:
// Quality Education (SDG 4): By offering practical skills training, the conference contributes to ensuring inclusive and equitable quality education, enabling individuals to acquire relevant digital skills for personal and professional growth.
// Decent Work and Economic Growth (SDG 8): The conference aims to enhance employability by equipping participants with digital skills, fostering entrepreneurship, and promoting economic growth through a digitally skilled workforce.
// Industry, Innovation, and Infrastructure (SDG 9): By training individuals in emerging digital technologies, the conference facilitates innovation and helps build robust digital infrastructure across Africa, ultimately driving sustainable development.
// Calling for Partnership: To make a lasting impact and effectively bridge the digital skills gap in Africa, partnerships are vital. The Africa Digital Skills Conference 2023 urges organizations, governments, educational institutions, and individuals to come together and contribute their expertise, resources, and networks. By fostering collaborations and collective action, we can create a stronger ecosystem that empowers individuals, supports entrepreneurship, and drives economic progress.

// Conclusion: The Africa Digital Skills Conference 2023 represents an invaluable opportunity to address the digital skills gap in Africa. By offering practical skills training, engaging diverse stakeholders, and promoting collaboration, this conference aims to empower individuals and organizations to thrive in the digital era. Through partnerships, we can collectively contribute to bridge the Digital Skills Gap in Africa.
//           `,
//         }),
//     },
//     {
//       title:
//         "The Role of Mobile Technology in Agriculture: Revolutionizing Farming Practices",
//       content:
//         "Mobile technology has become an essential part of our daily lives, and it has transformed various industries, including agriculture. Farmers now have access to a wealth of information and tools that can revolutionize their farming practices. In this blog post, we will explore the significant role of mobile technology in agriculture and how it is shaping the future of farming.",
//       blogImg: blogImg3,
//       day: "13th",
//       month: "May",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "The Role of Mobile Technology in Agriculture: Revolutionizing Farming Practices",
//           name: "Talika Bernard",
//           day: "29th",
//           month: "May",
//           year: "2023",
//           img: director,
//           blogImg: blogImg3,
//           content: `Mobile technology has become an essential part of our daily lives, and it has transformed various industries, including agriculture. Farmers now have access to a wealth of information and tools that can revolutionize their farming practices. In this blog post, we will explore the significant role of mobile technology in agriculture and how it is shaping the future of farming.

//           Access to Information
//           Mobile technology has bridged the information gap for farmers, providing them with instant access to valuable agricultural information. Through mobile apps and websites, farmers can access weather forecasts, crop prices, pest management techniques, and best agricultural practices. This real-time information enables farmers to make informed decisions about crop cultivation, irrigation, fertilization, and pest control, leading to increased productivity and reduced risks.
//           2. Market Connectivity

//           Mobile technology has revolutionized the way farmers connect with markets, buyers, and suppliers. With mobile apps and platforms, farmers can directly access local and international markets, eliminating intermediaries and obtaining better prices for their produce. Additionally, mobile technology enables farmers to track market trends, identify consumer preferences, and adapt their farming practices accordingly. This enhanced market connectivity empowers farmers to maximize their profits and expand their business opportunities.

//           3.Financial Inclusion
//           Mobile technology has also facilitated financial inclusion for farmers, especially in areas with limited access to traditional banking services. Mobile banking and mobile payment solutions enable farmers to securely and conveniently receive payments for their produce and access financial services such as savings, loans, and insurance. These financial tools empower farmers to invest in modern farming equipment, quality seeds, and fertilizers, ultimately improving their productivity and livelihoods.

//           Remote Monitoring and Precision Farming
//           Mobile technology has opened up new possibilities for remote monitoring and precision farming. With the help of sensors, drones, and mobile applications, farmers can remotely monitor their crops’ health, soil moisture levels, and pest infestations. This data-driven approach allows farmers to optimize resource utilization, reduce waste, and enhance crop yields. Through precise irrigation and fertilization techniques, farmers can achieve higher efficiency while minimizing environmental impact.

//           5. Farmer Education and Training

//           Mobile technology serves as a valuable tool for farmer education and training. Mobile apps and e-learning platforms provide farmers with training materials, videos, and interactive modules on various agricultural topics. These resources equip farmers with knowledge and skills to implement modern farming techniques, sustainable practices, and climate-smart agriculture. By empowering farmers with relevant information and training, mobile technology contributes to building a knowledgeable and skilled farming community.

//           The role of mobile technology in agriculture cannot be overstated. From providing access to information and market connectivity to enabling financial inclusion and precision farming, mobile technology has transformed farming practices and opened up new opportunities for farmers. As we move forward, it is crucial to continue investing in mobile technology solutions tailored to the needs of farmers, ensuring their active participation in the digital revolution.

//           By harnessing the power of mobile technology, we can drive sustainable agricultural development, enhance food security, and empower farmers to thrive in the digital age.

//           The role of mobile technology in agriculture is a vital aspect of our work at Mobile Web Ghana. We are committed to empowering the youth, supporting tech businesses, and undertaking ICT for development projects that address agricultural challenges through mobile solutions. By harnessing the potential of mobile technology, Mobile Web Ghana envisions a future where farmers have the tools and knowledge to thrive in the digital era and contribute to the growth of the agricultural sector in Ghana and beyond.

//           `,
//         }),
//     },

//     {
//       title:
//         "Girls Can Code: A Story of Empowerment and Education at American Corner, Agbogba",
//       content:
//         "Since the 1990s, fewer women have been employed in STEM (science, technology,...",
//       blogImg: girlscancode,
//       day: "18th",
//       month: "May",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "The Role of Mobile Technology in Agriculture: Revolutionizing Farming Practices",
//           name: "Talika Bernard",
//           day: "18th",
//           month: "May",
//           year: "2023",
//           img: director,
//           blogImg: girlscancode,
//           content: `Since the 1990s, fewer women have been employed in STEM (science, technology, engineering, and mathematics) professions, according to information from Accenture.
//           Computer coding is still overwhelmingly a male-dominated field in today’s tech-driven environment. According to Statistics, only 28.7% of people with coding abilities are women, compared to 71.3% of men. The US Embassy Ghana and Mobile is determined to bridge this wide gap in every possible way.

//           On the 12th May.2023, twelve  girls from Preset Pacesetters Senior High School, a private day and boarding senior secondary institution, gathered at the American Corner, Agbogba, to learn about R Studio.

//           The facilitator for the session  – Jaylexia Clark, a Fullbright scholar and PHD candidate from the University of Notre Dame, began by introducing R Studio as a statistical computing and graphics platform used by data analysts, statisticians, and scientists to analyze and visualize data. The girls were curious and eager to learn more about the tool and how it could be useful to them. She  went on to explain how R Studio could be used for data analysis, including analyzing emotions in photos, creating graphs and maps, and understanding patterns and trends. The girls were fascinated by the possibilities and eager to start coding.

//           At first, some of the girls were coiled in their shell  by the idea of coding, especially those who had previously expressed fear of mathematics. However, as they began working with RStudio, they quickly discovered that coding was not as difficult as they had imagined. With the help of the facilitator, the girls gained a firm grip on the basics of R Studio and started writing their first lines of code.

//           After learning the basics of R Studio, the girls were given a questionnaire on gender cyberbully harassment online to explore in R Studio. The questionnaire was designed to help the girls understand the prevalence and impact of gender cyberbullying and harassment online. They were encouraged to use their newfound coding skills to analyze and visualize the data in new and interesting ways. Over the course of the day, the girls continued to work on their coding projects, and by the end of the workshop, they had all gained a newfound confidence in their abilities. They had learned that girls can code, and that with the right tools and guidance, anyone can learn to code.

//           The girls left feeling inspired and empowered. They had learned a new skill that could be used in a wide range of industries, and they had discovered the many benefits of using RStudio for data analysis and visualization. Overall, the workshop was an excellent example of how education can empower young girls and help them to develop the skills they need to succeed in the future.

//           `,
//         }),
//     },
//     {
//       title:
//         "What You Need to Know to Land Your Dream Job: CV Reviews at American Corner Agbogba",
//       content:
//         "Attending CV reviews is important because it provides an opportunity to get expert feedback, keep up with trends in CV writing, get inspiration, build confidence, and network with professionals from different fields and industries",
//       blogImg: whatyouneedtoknow,
//       day: "8th",
//       month: "May",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "What You Need to Know to Land Your Dream Job: CV Reviews at American Corner Agbogba",
//           name: "mobileweb_",
//           day: "18th",
//           month: "May",
//           year: "2023",
//           img: director,
//           blogImg: whatyouneedtoknow,
//           content: `Attending CV reviews is important because it provides an opportunity to get expert feedback, keep up with trends in CV writing, get inspiration, build confidence, and network with professionals from different fields and industries.

//           The American Spaces & Support Programming initiative from The US Embassy Ghana in partnership with Mobile Web Ghana is providing work-ready programs as a great step towards addressing unemployment and improving job readiness skills.

//           As part of the project, A CV review was hosted at American Corner Agbogba on the 3rd May,2023. The session brought together participants to learn about new trends in CV writing and how to improve their resumes.

//           The session started with the facilitator, Mr Joseph Sam an HR Practitioner from Elidel Prestige Ltd emphasizing the importance of tailoring your CV to the specific job you’re applying for. He highlighted that customizing your CV shows the hiring manager that you’re a serious candidate who has taken the time to understand the job requirements. The facilitator then went on to talk about the importance of a clear and concise summary statement, the use of action verbs, and the need to quantify your accomplishments.

//           The facilitator then projected selected CVs from the participants for the group to critique. This exercise was particularly useful as it gave attendees an opportunity to apply what they had learned and see firsthand how to improve their own CVs. The group gave constructive feedback, pointing out areas that needed improvement and offering suggestions on how to make the CVs more compelling.

//           After the session, the participants commended the program with positive feedback. They appreciated the interactive nature of the session and the practical approach used to demonstrate how to write an effective CV. They also appreciated the facilitator’s professionalism and willingness to provide personalized feedback on their individual CVs.

//           Overall, the CV review session at the American Corner was highly informative and engaging. The use of real-world examples and interactive exercises made the session more practical and relevant. Attendees left with a deeper understanding of how to improve their CVs and the confidence to apply what they had learned in their job search. The positive feedback from the participants is a testament to the success of the program, and we look forward to future sessions.
//           `,
//         }),
//     },

//     {
//       title:
//         "Bridging the Digital Skills Gap in Africa: The Need for Partnership",
//       content:
//         "This digital skills gap in Africa is a major concern as the world becomes increasingly reliant on technology...",
//       blogImg: bridging,
//       day: "8th",
//       month: "May",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "Bridging the Digital Skills Gap in Africa: The Need for Partnership",
//           name: "mobileweb_",
//           day: "18th",
//           month: "May",
//           year: "2023",
//           img: director,
//           blogImg: bridging,
//           content: `This digital skills gap in Africa is a major concern as the world becomes increasingly reliant on technology. Without access to digital skills and knowledge, individuals and communities in Africa will struggle to compete in the global economy. This could lead to further economic inequality and social exclusion. To address this issue, it is important for governments, businesses, and educational institutions to invest in digital education and training programs. These programs should be accessible to all, regardless of their socioeconomic status or location. In addition, there needs to be a focus on developing local talent and creating job opportunities within the digital sector. This will not only help bridge the skills gap but also boost economic growth and development in Africa.

//           Ultimately, closing the digital skills gap in Africa is crucial for ensuring that everyone has an equal opportunity to participate in the digital economy and benefit from its potential rewards. According to the African Development Bank, Africa’s digital skills gap is estimated to be around 230 million people by 2030. This means that more than half of Africa’s population is at risk of being left behind in the digital economy. Economic Implications: The digital skills gap in Africa has significant economic implications. The World Bank estimates that the digital economy could contribute up to $180 billion to Africa’s GDP by 2025, but this is only possible if Africa’s workforce has the necessary digital skills.

//           Addressing the digital skills gap in Africa requires a collaborative effort between governments, the private sector, and civil society organizations. Partnerships between these different stakeholders are crucial in ensuring that digital skills development programs are effective and sustainable. Mobile Web Ghana is a leading African technology and entrepreneurship hub that is dedicated to empowering the youth and specializes in developing digital skills training programs for youth, entrepreneurs, and  professionals. The organization has a proven track record of successfully delivering digital skills training to thousands of learners across the continent.

//           As a leading organization in promoting digital skills and entrepreneurship in Africa, Mobile Web Ghana recognizes the importance of collaboration and partnership in achieving its mission. The Africa Digital Skills Conference is an annual event that brings together stakeholders, knowledge sharers and knowledge seekers to connect and learn to build, empower, upskill and reskill human resources in the area of digital skills across Africa. The focus is to build the capacity of the youth, SMEs, government agencies, organizations, and professionals to make them more competitive on the job market, more efficient in their fields of work, and equip them to apply digital skills to solve problems. As well as to discuss the latest trends, innovations, and challenges in the digital space.

//           Hosting this conference requires significant resources, expertise, and support from various partners. We are calling on like-minded organizations, businesses, governments, and individuals to join us in this endeavor. By working together, we can create a platform that will empower young people with the necessary skills to thrive in the digital economy. The 2023 Africa Digital Skills Conference will focus on emerging technologies such as Digital Literacy, artificial intelligence, blockchain, Coding, Data Analysis, Digital Marketing , cybersecurity and more. It will also explore ways to bridge the digital divide and promote inclusive growth across Africa. With your support, we can make this conference a success and contribute to building a brighter future for our continent.

//           Let us come together to share knowledge, exchange ideas, and inspire action towards bridging the digital gap in Africa. join us today and take the first step towards achieving the digital skills and knowledge gap in Africa.
//           `,
//         }),
//     },
//     {
//       title:
//         "Mobile Web Ghana Presents: First Youth Media Literacy Twitter Spaces Event",
//       content:
//         "This digital skills gap in Africa is a major concern as the world becomes increasingly reliant on technology...",
//       blogImg: firstmedlit,
//       day: "28th",
//       month: "April",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "Mobile Web Ghana Presents: First Youth Media Literacy Twitter Spaces Event",
//           name: "Talika",
//           day: "28th",
//           month: "April",
//           year: "2023",
//           img: director,
//           blogImg: firstmedlit,
//           content: `Mobile Web Ghana is excited to announce its first Youth Media Literacy Twitter Spaces event. This event is part of the Youth Media Literacy Project, an initiative supported by the US Embassy in Ghana which is aimed at improving media literacy among Ghanaian youth.

//           As young people today are increasingly exposed to different forms of media, it has become more important than ever for them to develop strong media literacy skills. The ability to analyze and understand media messages and the influence they have on our thoughts and behaviors is critical to becoming informed and engaged citizens.

//           This Twitter Spaces event will take place on Friday, 28th April, 2023 at 3:00 pm GMT, and will feature a panel of expert speakers who will discuss the importance of media literacy in today’s digital world. Participants will have the opportunity to engage with the speakers and ask questions on the topic.

//           Our esteemed panel of speakers includes Precious Oluwadunsin Akinlolu, Lukman Mahami Adams, Emelia Aryee and Efo Korku Mawutor, who will bring a wealth of experience and knowledge to the discussion. From understanding the impact of social media on mental health to analyzing fake news and misinformation, our speakers will touch on a wide range of topics to help young people become more media-literate.

//           To participate, simply follow Mobile Web Ghana on Twitter and join the conversation using the hashtag #YouthMediaLiteracy.

//           Participants are encouraged to type their questions ahead of time, so that they can be addressed during the event.

//           We hope that this event will be the first of many in our ongoing efforts to promote media literacy among Ghanaian youth.

//           Join us and be part of the conversation! For more information on the Youth Media Literacy Project, follow Mobile Web Ghana on all social media platforms.
//           `,
//         }),
//     },
//     {
//       title:
//         "From Trash to Treasure: Turning Old Clothes into Earth Day Tote Bags",
//       content:
//         "Did you know that  first Earth Day was celebrated on April 22, 1970, as a response to growing c...",
//       blogImg: trashtotreasure,
//       day: "26th",
//       month: "April",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "From Trash to Treasure: Turning Old Clothes into Earth Day Tote Bags",
//           name: "mobileweb_",
//           day: "28th",
//           month: "April",
//           year: "2023",
//           img: director,
//           blogImg: trashtotreasure,
//           content: `Did you know that  first Earth Day was celebrated on April 22, 1970, as a response to growing concerns about pollution and environmental degradation? Since then, it has become a global event, with millions of people coming together to participate in events, activities, and initiatives aimed at promoting environmental awareness and sustainability

//           On April 21st, 2023, the US Embassy  Ghana  and  Mobile Web Ghana hosted a special Earth Day event in collaboration with Reusable Bags GH Company. The event brought together students from Kwabenya Senior High School, Ghana Education Service officers, and teachers to celebrate Earth Day and learn about sustainable living. The program was aimed at raising awareness about the impact of plastic waste and offering a sustainable solution to reduce its use.

//           The participants were taken through an interactive discussion on the problem of plastic waste and the importance of adopting sustainable practices. They were introduced to the 7 Rs of sustainability: Reduce, Reuse, Recycle, Rethink, Refuse, Repair, and Repurpose. The discussion also highlighted the United Nations Sustainable Development Goals (SDGs) and the role individuals can play in achieving them

//           .

//           Following the discussion, the participants were taught how to create their own tote bags from old t-shirts. This was a creative and fun way to promote sustainable living and reduce the use of plastic bags. The team from Reusable Bags GH Company provided guidance and support to the participants as they designed and created their own tote bags.

//           The participants were enthusiastic about the activity and showcased their tote bag designs at the end of the session. It was inspiring to see their creativity and commitment to sustainability.

//           The event was a great success, and it demonstrated the importance of community engagement in promoting sustainable living. By creating their own tote bags, the participants gained practical skills that they can use to promote sustainability in their daily lives. They also learned about the impact of plastic waste on the environment and the importance of taking action to reduce it.

//           The partners of American Corner Agbogba are committed to promoting sustainable practices and will continue to organize events and activities that raise awareness about environmental issues. We appreciate the efforts of Reusable Bags GH Company in facilitating this event, and we encourage everyone to adopt sustainable practices and join us in protecting our planet.  `,
//         }),
//     },
//     {
//       title:
//         "Creating an Inclusive and Safe Online Community: Tiktok Algorithm and Racism Workshop",
//       content:
//         "Did you know that  first Earth Day was celebrated on April 22, 1970, as a response to growing c...",
//       blogImg: tiktok,
//       day: "20th",
//       month: "April",
//       year: "2023",
//       onClick: () =>
//         handleBlogPostClick({
//           title:
//             "Creating an Inclusive and Safe Online Community: Tiktok Algorithm and Racism Workshop",
//           name: "mobileweb_",
//           day: "20th",
//           month: "April",
//           year: "2023",
//           img: director,
//           blogImg: tiktok,
//           content: `TikTok Algorithm and Racism are two interconnected issues that have been gaining attention in recent years. As one of the most popular social media platforms, TikTok’s algorithm plays a significant role in determining what content is seen by its users. However, this algorithm has been accused of perpetuating racism and discrimination, often unintentionally.

//           The American Corner Agbogba hosted an event on “TikTok and Algorithmic Racism”. The event aimed to educate students on the impact of algorithmic bias and discrimination on social media platforms, with a specific focus on TikTok.

//           The workshop was led by Jaylexia Clark , a PhD Candidate and 2022 – 2023 Fulbright recipient in the Department of Sociology. Her primary research interests are, structural racial and gender inequality, platform work and digital entrepreneurship. Co-leading with her was Kenya Lee, a doctoral candidate in sociology at University of Notre Dame. Her research specializes in race, ethnicity and schools. She is an alumna of The University of North Carolina at Chapel Hill

//           The event began with a discussion on social science, data, and social problems. Students were encouraged to define these terms and think about how they relate to the issues of bias and discrimination on social media platforms. This was followed by a group task where students were divided into groups and asked to focus on a particular social problem. The groups were asked to identify a plan that would address shadow-banning and bias in the algorithm, or cultural appropriation and credit/internet clout.

//           After working in groups, the students presented their case studies on TikTok, Snapchat, and Instagram. They shared their findings on how these platforms perpetuate bias and discrimination, and offered suggestions for how these issues could be addressed.

//           The students demonstrated a strong understanding of the issues of algorithmic bias and discrimination, and were able to apply this understanding to real-world social problems. The group task and case studies allowed students to think critically and creatively about these issues, and to come up with concrete solutions. The event provided a valuable opportunity for students to engage in meaningful discussion and reflection on the role of social media in perpetuating bias and discrimination. The American Corner plans to host similar events in the future to continue promoting digital literacy and creating a safe and inclusive online space for all..  `,
//         }),
//     },

//     // Add more blog posts as needed
//   ];

//   const fetchData = () => {
//     fetch("https://mobilewebghana.org/blog/")
//       .then((response) => response.json())
//       .then((data) => {
//         // Use the fetched data in your application
//         console.log(data);
//       })
//       .catch((error) => {
//         // Handle any errors that occurred during the fetch request
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <div className={styles.banner}>
//         <div className={styles.overlay}>
//           <div className={styles.banner_text}>
//             <h1>Mobile Web Ghana</h1>
//             <h3>| Our Blog</h3>
//           </div>
//         </div>
//         <div className={styles.img_div}>
//           <img src={img1} />
//         </div>
//       </div>

//       {selectedBlogPost ? (
//         <SingleBlogPost
//           title={selectedBlogPost.title}
//           content={selectedBlogPost.content}
//           name={selectedBlogPost.name}
//           img={selectedBlogPost.img}
//           day={selectedBlogPost.day}
//           month={selectedBlogPost.month}
//           year={selectedBlogPost.year}
//           blogImg={selectedBlogPost.blogImg}
//         />
//       ) : (
//         <>
//           <div className={styles.inputDiv}>
//             <h2>// Our Blogs</h2>
//             <h1>Search for blog posts</h1>
//             <input
//               type="search"
//               value={search}
//               className={styles.input}
//               name="search"
//               onChange={(e) => {
//                 setSearch(e.target.value);
//               }}
//             />
//           </div>

//           {/* <button onClick={fetchData}>Click me</button> */}
//           <BlogSection>
//             {blogPosts
//               .filter((blog) => {
//                 if (search == "") {
//                   return blog;
//                 } else if (
//                   blog.title.toLowerCase().includes(search.toLowerCase())
//                 ) {
//                   return blog;
//                 }
//               })
//               .map((blogPost) => (
//                 <BlogPost
//                   key={blogPost.title}
//                   title={blogPost.title}
//                   content={blogPost.content}
//                   blogImg={blogPost.blogImg}
//                   day={blogPost.day}
//                   month={blogPost.month}
//                   year={blogPost.year}
//                   onClick={blogPost.onClick}
//                 />
//               ))}
//           </BlogSection>
//         </>
//       )}
//     </div>
//   );
// };

// export default MainBlog;

import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogSection from "./BlogSection";
import BlogPost from "./BlogPost";
import styles from "../components/mainblog.module.css";
import img1 from "../assets/blog.avif";
import SingleBlogPost, { RecentBlogSection } from "./SingleBlogPost";
const MainBlog = () => {
  // const getAllblog = () => {
  //   try{
  //   const res =  axios.get('http://localhost:5000/blog/api/posts' )
  //   console.log(res);

  // }catch(err){
  //   console.log(err)
  // }
  // }
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [search, setSearch] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null); // Add currentIndex state



  console.log("allPosts:", allPosts);
  console.log("selectedBlogPost:", selectedBlogPost);

  const handleBlogPostClick = (blogPost, index) => {
    setSelectedBlogPost(blogPost);
    setCurrentIndex(index); // Update currentIndex when a blog post is clicked
  };

  function getRandomRecentPosts(allPosts, selectedBlogPost, numPosts = 3) {
    const recentPosts = allPosts.filter(
      (post) => post._id !== selectedBlogPost._id
    );
    const randomPosts = [];

    for (let i = 0; i < numPosts; i++) {
      const randomIndex = Math.floor(Math.random() * recentPosts.length);
      randomPosts.push(recentPosts[randomIndex]);
      recentPosts.splice(randomIndex, 1);
    }

    return randomPosts;
  }

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("http://localhost:5000/blog/api/posts");
        console.log(res);
        setAllPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <div className={styles.banner_text}>
            <h1>Mobile Web Ghana</h1>
            <h3>| Our Blog</h3>
          </div>
        </div>
        <div className={styles.img_div}>
          <img src={img1} />
        </div>
      </div>

      {selectedBlogPost ? (
        <>
          <SingleBlogPost
            topic={selectedBlogPost.topic}
            content={selectedBlogPost.content}
            name={selectedBlogPost.name}
            img={selectedBlogPost.img}
            date={selectedBlogPost.date}
            blogImg={selectedBlogPost.blogImg}
          />

          <RecentBlogSection
            recentPosts={getRandomRecentPosts(allPosts, selectedBlogPost)}
          />
        </>
      ) : (
        <>
          <div className={styles.inputDiv}>
            <h2>// Our Blogs</h2>
            <h1>Search for blog posts</h1>
            <input
              type="search"
              value={search}
              className={styles.input}
              name="search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>

          <BlogSection>
            {allPosts
              .filter((blog) => {
                if (search == "") {
                  return blog;
                } else if (
                  blog.topic.toLowerCase().includes(search.toLowerCase())
                ) {
                  return blog;
                }
              })
              .map((post) => (
                <BlogPost
                  key={post._id}
                  topic={post.topic}
                  content={post.content}
                  date={post.date}
                  onClick={handleBlogPostClick(post)}
                />
              ))}
          </BlogSection>
        </>
      )}

      {currentIndex !== null && allPosts.length > 0 && (
        <div className={styles.navigationButtons}>
          <button
            onClick={() => {
              const newIndex =
                (currentIndex - 1 + allPosts.length) % allPosts.length;
              handleBlogPostClick(allPosts[newIndex], newIndex);
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              const newIndex = (currentIndex + 1) % allPosts.length;
              handleBlogPostClick(allPosts[newIndex], newIndex);
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MainBlog;
