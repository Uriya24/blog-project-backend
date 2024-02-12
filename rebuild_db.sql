DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;
-- Connect to the desired database
\c blog_db;

-- Create the table for the posts
CREATE SEQUENCE "Post_id_seq";
CREATE TABLE IF NOT EXISTS public.posts
(
    id integer NOT NULL DEFAULT nextval('"Post_id_seq"'::regclass),
    title character varying COLLATE pg_catalog."default",
    content character varying COLLATE pg_catalog."default",
    date date,
    posted_by character varying COLLATE pg_catalog."default",
    CONSTRAINT "Post_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.posts
    OWNER to postgres;

-- Create the table for the users
 CREATE TABLE IF NOT EXISTS public.users
 (
     id character varying COLLATE pg_catalog."default" NOT NULL,
     email character varying COLLATE pg_catalog."default",
     name character varying COLLATE pg_catalog."default",
     first_name character varying COLLATE pg_catalog."default",
     admin boolean,
     CONSTRAINT users_pkey PRIMARY KEY (id)
 )

 TABLESPACE pg_default;

 ALTER TABLE IF EXISTS public.users
     OWNER to postgres;

-- Insert some posts into the table
INSERT INTO public.posts(title, content, date, posted_by)
VALUES
('The Future of Work: Adapting to a Digital Economy', 'The digital economy is reshaping the way we work, with technology playing an increasingly central role in virtually every industry. From remote work and gig economy platforms to automation and artificial intelligence, the future of work is filled with both promise and uncertainty. In this post, we''ll examine the key trends shaping the future of work and how individuals and organizations can adapt and thrive in this rapidly evolving landscape.', '2024-02-05', 'Uriya Binshtock'),
('Addressing Climate Change Through Sustainable Practices', 'Climate change is one of the most pressing challenges of our time, requiring urgent action at all levels of society. From reducing carbon emissions to conserving natural resources, there are countless ways individuals and organizations can contribute to a more sustainable future. In this post, we''ll discuss the importance of sustainable practices in addressing climate change and the role each of us can play in making a positive impact.', '2024-01-18', 'Uriya Binshtock'),
('The Future of Transportation: Innovations and Challenges', 'The transportation industry is undergoing rapid transformation, driven by advances in technology, changing consumer preferences, and environmental concerns. From electric vehicles and autonomous drones to hyperloop systems and vertical takeoff and landing (VTOL) aircraft, the future of transportation promises to be both exciting and challenging. Join us as we explore the latest innovations shaping the future of transportation and the key challenges that lie ahead.', '2024-01-19', 'Uriya Binshtock'),
('Hapoel Tel Aviv FC: A History of Success in Israeli Football', 'Hapoel Tel Aviv FC is one of the most storied football clubs in Israel, with a rich history dating back to its founding in 1923. The club has enjoyed numerous successes over the years, including multiple Israeli Premier League titles and domestic cup victories. In this post, we''ll explore the history and achievements of Hapoel Tel Aviv FC, as well as the passionate fan base that supports the club through thick and thin.', '2024-02-10', 'Uriya Binshtock'),
('Hapoel Tel Aviv BC: A Basketball Powerhouse in Israel', 'Hapoel Tel Aviv BC is a dominant force in Israeli basketball, boasting a long and illustrious history in the sport. With multiple Israeli Basketball Premier League titles and European competition appearances, the club has solidified its status as one of the top basketball teams in the country. Join us as we delve into the legacy of Hapoel Tel Aviv BC, from its early days to its modern-day successes on the court.', '2024-02-11', 'Uriya Binshtock'),
('Navigating the Job Market as a Junior Developer', 'Entering the tech industry as a junior developer can be both exciting and daunting. With the demand for tech talent on the rise, there are abundant opportunities for those just starting their careers in software development. In this post, we''ll explore strategies for landing your first job as a junior developer, including building a strong portfolio, networking with industry professionals, and showcasing your skills through projects and contributions to open-source software.', '2024-02-12', 'Uriya Binshtock'),
('Exploring the Psytrance Scene: A Journey into the Realm of Psychedelic Sound', 'The psytrance scene is a vibrant and diverse community that revolves around the exploration of psychedelic music, culture, and spirituality. Originating in the 1960s and 70s with the emergence of psychedelic rock and the hippie counterculture, psytrance has evolved into a global phenomenon with a dedicated following around the world. At its core, psytrance is characterized by its hypnotic beats, intricate melodies, and otherworldly soundscapes, which are designed to induce altered states of consciousness and facilitate spiritual experiences. In this post, we''ll delve into the history, subgenres, and key elements of the psytrance scene, as well as its impact on music, art, and spirituality. Join us on a journey into the realm of psychedelic sound, where the boundaries of reality are blurred, and the possibilities are endless.', '2024-01-26', 'Uriya Binshtock'),
('Exploring the Biggest Psytrance Festivals Around the Globe', 'The psytrance festival scene is renowned for its vibrant energy, eclectic music, and spiritual atmosphere. Each year, thousands of psytrance enthusiasts flock to festivals around the world to experience the magic of psychedelic music and culture. In this post, we''ll shine a spotlight on some of the biggest psytrance festivals, including legendary events like Ozora in Hungary, Boom Festival in Portugal, Universo Paralello in Brazil, and Psy-Fi in the Netherlands. Join us as we journey through these transformative gatherings, where pulsating beats, mesmerizing visuals, and positive vibes converge to create an unforgettable experience for all who attend.', '2024-01-27', 'Uriya Binshtock'),
('The Impact of Social Media on Modern Society', 'Social media has become an integral part of modern society, shaping the way we connect, communicate, and consume information. With billions of users worldwide, platforms like Facebook, Instagram, and Twitter have transformed the landscape of social interaction and media consumption. Join us as we explore the impact of social media on modern society, from its influence on culture and politics to its implications for mental health and privacy.', '2024-02-02', 'Uriya Binshtock'),
('The Power of Music: Exploring the Impact of Sound on the Human Experience', 'Music has the power to move us, inspire us, and connect us in ways that transcend language and culture. From ancient rituals and spiritual ceremonies to modern-day concerts and festivals, the impact of music on the human experience is profound and far-reaching. In this post, we''ll explore the power of music and its influence on our emotions, memories, and sense of belonging.', '2024-02-03', 'Uriya Binshtock');

-- Insert some users into the table
INSERT INTO public.users(id, email, name, first_name, admin)
VALUES
  (100387108082396151313, 'uriya.binshtock@gmail.com', 'Uriya Binshtock', 'Uriya', true),
  (1, 'ilia.kohanovski@grunitech.com', 'Ilia Kohanovski', 'Ilia', true),
  (2, 'user2@example.com', 'John Doe', 'John', false),
  (3, 'user3@example.com', 'Emily Smith', 'Emily', false),
  (4, 'user4@example.com', 'Michael Johnson', 'Michael', false),
  (5, 'user5@example.com', 'Emma Brown', 'Emma', false);

