"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  categories: string[];
}

const FAQ: React.FC<FAQProps> = ({ items, categories }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0] // Default to the first category
  );

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setOpenIndex(null); // Close any open FAQ when switching categories
  };

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section className="rm-container grid justify-center py-24">
      {/* Category Tabs */}
      <div className="flex mx-auto gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`uppercase text-xs sm:text-sm py-2 px-4 rounded-md ${
              selectedCategory === category
                ? "bg-rm-primary-700 font-bold text-white hover:bg-rm-primary-600 dark:hover:bg-rm-primary-600"
                : "dark:bg-neutral-800/60 text-gray-700/80 dark:text-white/60 border border-rm-primary-700 hover:bg-gray-200 hover:text-gray-800 dark:hover:bg-neutral-600/60 dark:hover:text-white/90"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="overflow-hidden rounded-md sm:w-[60vw] mt-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between p-4 cursor-pointer  dark:bg-neutral-800/60 hover:bg-gray-200 dark:hover:bg-neutral-600/60"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`answer-${index}`}
                id={`question-${index}`}
              >
                <h2 className="text-lg font-semibold">{item.question}</h2>
                <span className="text-xl font-bold pl-4">
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              {openIndex === index && (
                <div
                  className="p-4 bg-neutral-50 dark:bg-neutral-700/60"
                  id={`answer-${index}`}
                  aria-labelledby={`question-${index}`}
                >
                  <p className="font-light max-w-[80%]">{item.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="p-4 text-gray-500">
            No FAQs available for this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default FAQ;
