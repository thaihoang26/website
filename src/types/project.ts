export type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  slug: string;
  category: 'AI' | 'IoT' | 'FPGA';
  content: string;
};

