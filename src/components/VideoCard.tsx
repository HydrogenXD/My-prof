import React from 'react';
import { Play } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';


interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  instagramEmbedUrl?: string;
}

interface Posts {
  video: string;
  thumbnail: string;
}

let posts: Posts[] = [
  {
    video: "https://www.instagram.com/reel/C0B4dFoxOQD/?igsh=aDR2NHUyYzFoNHli",
    thumbnail: "https://www.instagram.com/p/CvceYKVM6fW/media/?size=l"
  },
  {
    video: "https://www.instagram.com/reel/CvceYKVM6fW/?igsh=NmVhdDYwNXBhMmNy",
    thumbnail: "https://www.instagram.com/p/CvceYKVM6fW/media/?size=l"
  },
  {
    video: "https://www.instagram.com/reel/CvceYKVM6fW/?igsh=NmVhdDYwNXBhMmNy",
    thumbnail: "https://www.instagram.com/p/CvceYKVM6fW/media/?size=l"
  },

]

export default function VideoCard({ title, description, videoUrl, thumbnailUrl, instagramEmbedUrl }: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center p-6">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          {posts.map((post) => (
            <InstagramEmbed url={post.video} width={340} />
          ))}


        </div>
      </div>
    </div>
  );
}