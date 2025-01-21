const faqItems = [
  // Web Development
  {
    category: "Web Development",
    question: "Do you make eCommerce websites?",
    answer:
      "We currently don’t offer eCommerce website development. While we prefer creating tailored solutions over using template platforms like Shopify, eCommerce sites are complex. We want to ensure we can deliver exceptional results before offering this service.",
  },
  {
    category: "Web Development",
    question: "How long does it take to create a website?",
    answer:
      "The timeline varies depending on the complexity of the project, but most websites are completed within 4–6 weeks.",
  },
  {
    category: "Web Development",
    question: "Do I need to provide content and images for my website?",
    answer:
      "Yes, we encourage clients to provide their own content and images to ensure the website aligns with their vision. We can also assist with content creation if needed.",
  },
  {
    category: "Web Development",
    question:
      "What’s the difference between a one-page and a multi-page website?",
    answer:
      "A one-page website has all content on a single scrollable page, ideal for simple business presentations. Multi-page websites are better for businesses needing more detailed information across multiple sections.",
  },
  {
    category: "Web Development",
    question: 'What does "fully responsive" mean?',
    answer:
      "Fully responsive means your website will automatically adjust and look great on all devices and screen sizes, including desktops, tablets, and smartphones.",
  },
  {
    category: "Web Development",
    question: "Will my website show up on Google?",
    answer:
      "Yes, we build websites with SEO best practices to ensure they are search-engine-friendly. However, getting it to the top of search results is not something we can promise, as it depends on various factors and often requires ongoing SEO efforts.",
  },
  {
    category: "Web Development",
    question: "Can you update my existing website?",
    answer:
      "Generally, yes, but this depends on the technology and design of your current website. For example, if you're using platform-specific technologies like WordPress, we may recommend creating a new website from scratch.",
  },
  {
    category: "Web Development",
    question: 'What is "Google Analytics"?',
    answer:
      "Google Analytics is a free tool that tracks website visitors, where they come from, and what they do on your site. This helps you understand your audience and improve your website.",
  },
  {
    category: "Web Development",
    question: "What is a domain name, and do I need one?",
    answer:
      "A domain name is your website's address on the internet, like www.coolwebsite.com. While it’s technically optional, having a domain name makes your site look more professional and memorable. Don’t worry—we’ll assist you in choosing and setting one up.",
  },
  {
    category: "Web Development",
    question: "What happens after the first year of free custom domain?",
    answer:
      "After the first year, the cost of your custom domain will be billed directly to you by the domain registrar. We’ll send you a reminder before the renewal date and you can choose to pay it through us or pay it directly yourself - either way, we'll assist you. The renewal cost is typically around £10-£15 per year, depending on the domain extension (.com, .co.uk, .net, etc.).",
  },
  {
    category: "Web Development",
    question: "Can I make changes to my website after it's launched?",
    answer:
      "A CMS (see below) is included in our service, if desired, so you can make changes to your website after it's launched. This is limited to content changes, not design changes. Alternatively, depending on your package, we can handle updates for you.",
  },
  {
    category: "Web Development",
    question: "What is a CMS?",
    answer:
      "A CMS, or Content Management System, allows you to easily update your website's text and images without needing technical expertise. We use Sanity.io, which is user-friendly and powerful.",
  },
  {
    category: "Web Development",
    question: "Who owns the website once it’s complete?",
    answer:
      "Once the project is complete and all payments have been made, full ownership of the website, including all files, content, and assets, will be transferred to you. You will have full control over your site and can make any changes, updates, or transfers as needed.",
  },

  // Logo Design
  {
    category: "Logo Design",
    question: "What’s included in your logo design service?",
    answer:
      "Our service includes consultation, initial concepts, revisions, and delivery of final designs in various formats suitable for digital and print use.",
  },
  {
    category: "Logo Design",
    question: "How do I know what type of logo is best for my business?",
    answer:
      "During our consultation, we’ll discuss your brand’s values, target audience, and industry to create a logo that perfectly fits your business.",
  },
  {
    category: "Logo Design",
    question: "How long does it take to design a logo?",
    answer:
      "Typically, from concept to final design, it takes 2–4 weeks, depending on complexity and revisions.",
  },
  {
    category: "Logo Design",
    question: "Will I own the rights to my logo?",
    answer:
      "Yes, once the project is complete and payment is finalized, you will have full ownership of your logo.",
  },
  {
    category: "Logo Design",
    question: "Can you rework an existing logo?",
    answer:
      "Yes, we can refresh or modernize your existing logo while keeping the essence of your brand intact.",
  },
  {
    category: "Logo Design",
    question: "What if I don’t know what I want in a logo?",
    answer:
      "That’s okay! We’ll guide you through the process by exploring styles, colors, and concepts to find what resonates with your brand.",
  },
  {
    category: "Logo Design",
    question: "What file formats will I receive?",
    answer:
      "You’ll get your logo in versatile formats, including PNG, JPG, and vector files (SVG) for use across all mediums.",
  },
  {
    category: "Logo Design",
    question: 'What is an "alternative design"?',
    answer:
      "An alternative design is a variation of the main design, adapted for specific uses, such as stationery, clothing, or business cards. Every logo includes one alternative design, but additional variations can be requested.",
  },
  {
    category: "Logo Design",
    question: "Can you create business cards or other materials with my logo?",
    answer:
      "Yes! We can design business cards, stationery, or other branded materials as an add-on service.",
  },

  // General
  {
    category: "General",
    question: "How do we get started?",
    answer:
      "Simply contact us through the website or email us, and we’ll set up a friendly chat to discuss your needs and next steps.",
  },
  {
    category: "General",
    question: "Do you require a deposit before starting work?",
    answer:
      "Yes, we typically require a 50% deposit before starting, with the balance due upon project completion and satisfaction.",
  },
  {
    category: "General",
    question:
      "Why should I pay monthly instead of purchasing once-off products?",
    answer:
      'Paying monthly spreads the cost and gives you continuous support for all your digital needs. You\'ll have ongoing access to technical assistance, updates, and tools like Google Analytics. Essentially, I become your "Tech Guy" for six months, helping you to launch and grow your business.',
  },
  {
    category: "General",
    question: "What if I want to cancel my monthly plan?",
    answer:
      "You can cancel within 14 days of starting work for a full refund. After this period, no refunds are given and there will be no requests for payments for unpaid work.",
  },
  {
    category: "General",
    question: "What payment methods do you accept?",
    answer:
      "We currently accept bank transfers but are open to discussing other methods if needed.",
  },
  {
    category: "General",
    question: "I’m not tech-savvy—can you guide me through the process?",
    answer:
      "Absolutely! We work closely with you to ensure everything is clear and straightforward. You don’t need to be an expert — that's what we're here for.",
  },
  {
    category: "General",
    question: "Where are you based?",
    answer:
      "We are based in Liverpool, but we work with clients across the UK and Ireland.",
  },
];

export default faqItems;
