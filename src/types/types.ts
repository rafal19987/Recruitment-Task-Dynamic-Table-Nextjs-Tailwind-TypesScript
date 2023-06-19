export type TSelectedData = {
  id: string | null;
  title: string | null;
  authors: Array<string> | null;
  publishedDate: string | null;
  publisher?: string;
  categories?: Array<string>;
  pageCount?: number;
  averageRating?: number;
  thumbnail?: string;
};

export type TTableContextProvider = {
  children: React.ReactNode;
};
