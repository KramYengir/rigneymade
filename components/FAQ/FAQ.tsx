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
      <div className="flex mx-auto divide-x-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-t-md ${
              selectedCategory === category
                ? "bg-rm-primary-700 font-semibold text-white"
                : "bg-gray-50 dark:bg-neutral-800/60 text-gray-700 dark:text-white hover:bg-gray-200"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="overflow-hidden rounded-md sm:min-w-[60vw]">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 dark:bg-neutral-800/60 hover:bg-gray-200 dark:hover:bg-neutral-600/60"
                onClick={() => handleToggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`answer-${index}`}
                id={`question-${index}`}
              >
                <h2 className="text-lg font-semibold">{item.question}</h2>
                <span className="text-xl font-semibold">
                  {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </div>
              {openIndex === index && (
                <div
                  className="p-4 bg-neutral-50 dark:bg-neutral-700/60"
                  id={`answer-${index}`}
                  aria-labelledby={`question-${index}`}
                >
                  <p className="font-light">{item.answer}</p>
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
