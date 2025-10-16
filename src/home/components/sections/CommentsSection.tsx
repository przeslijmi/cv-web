import Section from '@home/components/Section';
import { comments } from '@home/constants/comments';
import { Star, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface Props {}

export default function CommentsSection({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(comments.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <Section
      className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
      title="What People Say"
      titleClass="text-gray-900 dark:text-gray-100"
      children={
        <div className="relative">
          {totalPages > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all hover:scale-110"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-all hover:scale-110"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {[...Array(totalPages)].map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid md:grid-cols-3 gap-8 px-1"
                >
                  {comments
                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                    .map((c, i) => {
                      const actualIndex = pageIndex * itemsPerPage + i;
                      const isHovered = hoveredIndex === actualIndex;

                      return (
                        <div
                          key={actualIndex}
                          className="p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer relative group"
                          onMouseEnter={() => setHoveredIndex(actualIndex)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Maximize2 className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                          </div>

                          <div className="flex items-center gap-1 mb-4">
                            {[...Array(c.rate)].map((_, ri) => (
                              <Star key={ri} className="w-5 h-5 fill-yellow-400 text-yellow-500 dark:text-yellow-400" />
                            ))}
                          </div>

                          <div className="relative">
                            <p
                              className={`mb-4 italic text-gray-700 dark:text-gray-300 transition-all duration-300 ${
                                isHovered ? 'opacity-0 absolute' : 'opacity-100'
                              }`}
                            >
                              "{c.content}"
                            </p>
                            <p
                              className={`mb-4 italic text-gray-700 dark:text-gray-300 transition-all duration-300 ${
                                isHovered ? 'opacity-100' : 'opacity-0 absolute'
                              }`}
                            >
                              "{c.contentLong}"
                            </p>
                          </div>

                          <div className="font-semibold text-gray-900 dark:text-gray-200 mt-auto">{c.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{c.company}</div>

                          <div className="mt-4 text-xs text-gray-400 dark:text-gray-500 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                            Hover to read more
                          </div>
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentIndex
                      ? 'bg-blue-600 dark:bg-blue-400 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      }
    />
  );
}
