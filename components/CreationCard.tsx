'use client';

import { ArrowRight } from "lucide-react";
import { Creation } from "@/config/creations";

interface CreationCardProps {
  creation: Creation;
}

export default function CreationCard({ creation }: CreationCardProps) {
  const getTagColorClasses = (color: string) => {
    return {
      yellow: 'bg-yellow-500/20 text-yellow-300',
      blue: 'bg-blue-500/20 text-blue-300',
      purple: 'bg-purple-500/20 text-purple-300',
      green: 'bg-green-500/20 text-green-300',
      red: 'bg-red-500/20 text-red-300',
    }[color] || 'bg-zinc-500/20 text-zinc-300';
  };

  const getBackgroundColor = (color: string) => {
    return {
      yellow: 'bg-yellow-600',
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      green: 'bg-green-600',
      red: 'bg-red-600',
    }[color] || 'bg-zinc-600';
  };

  return (
    <div
      onClick={() => creation.url && window.open(creation.url, '_blank')}
      className={`group bg-zinc-900/50 rounded-lg overflow-hidden ${creation.url ? 'cursor-pointer' : ''} transition-all duration-300 hover:scale-105`}
    >
      <div className={`relative aspect-[4/3] ${getBackgroundColor(creation.backgroundColor)} overflow-hidden`}>
        <img
          src={creation.image}
          alt={creation.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md p-1.5 rounded-full">
          <ArrowRight className="w-4 h-4 text-white rotate-[-45deg]" />
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <span className={`inline-block ${getTagColorClasses(creation.tag.color)} px-2 py-0.5 rounded-full text-xs mb-2`}>
          {creation.tag.text}
        </span>
        <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-1.5">{creation.title}</h3>
        <p className="text-zinc-400 text-xs sm:text-sm">
          {creation.description}
        </p>
      </div>
    </div>
  );
}