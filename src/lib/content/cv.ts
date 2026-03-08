export type CvContact = {
  name: string;
  email: string;
  address: string;
  website: string;
  instagram: string;
};

export type CvEntry = {
  year: string;
  description: string;
};

export type CvContent = {
  contact: CvContact;
  education: readonly CvEntry[];
  exhibitions: readonly CvEntry[];
  designWorks: readonly CvEntry[];
};

export const cvContent: CvContent = {
  contact: {
    name: "Duc Nguyen",
    email: "nguyenmanhducpsd@gmail.com",
    address: "S2.17 Building Oceanpark, Gia Lam, Hanoi, 100000",
    website: "https://ducnguyen.work/",
    instagram: "follyblueduck",
  },
  education: [
    {
      year: "2024",
      description:
        "BA in Studio Art, Denison University, Granville, Ohio (expected graduation: May 2024)",
    },
  ],
  exhibitions: [
    {
      year: "2024",
      description:
        "Group Exhibition, I will never properly comprehend the line Exhibition, Denison Museum, Denison University, Granville, Ohio",
    },
    {
      year: "2024",
      description:
        "Group Exhibition, Face Exhibition, Mulberry Gallery, Denison University, Granville, Ohio",
    },
    {
      year: "2023",
      description:
        "Group Exhibition, Fall Final Exhibition, Bryant Art Gallery, Denison University, Granville, Ohio",
    },
    {
      year: "2023",
      description:
        "Group Exhibition, Midterm Exhibition, Bryant Art Gallery, Denison University, Granville, Ohio",
    },
    {
      year: "2023",
      description:
        "Group Exhibition, Collage Stories, Bryant Art Gallery, Denison University, Granville, Ohio",
    },
    {
      year: "2023",
      description:
        "Group Exhibition, The Bed Exhibition, Bryant Art Gallery, Denison University, Granville, Ohio",
    },
    {
      year: "2022",
      description:
        "Group Exhibition, Midterm Exhibition, Bryant Art Gallery, Denison University, Granville, Ohio",
    },
  ],
  designWorks: [
    {
      year: "2023",
      description:
        "Denison Art Department, Contemporary Comic Anthology Cover, Bookcover and PDF files, Granville, Ohio",
    },
    {
      year: "2023",
      description:
        "Austin E. Knowlton Center for Career Exploration, Denison Knowlton Strategic Plan 2023-2026, Books and PDF files, Granville, Ohio",
    },
    {
      year: "2023",
      description:
        "Austin E. Knowlton Center for Career Exploration, document and presentation templates, Granville, Ohio",
    },
    {
      year: "2022-2023",
      description:
        "University Programing Council, posters and graphics, Granville, Ohio",
    },
    {
      year: "2022",
      description:
        "Denison Vietnamese Student Association, logo, Granville, Ohio",
    },
  ],
};
