export type TSelectedData = {
  id: string | null;
  title: string | null;
  authors: Array<string> | null;
  publishedDate: string | null;
  publisher?: string | null;
  categories?: Array<string>;
  pageCount?: number | null;
  averageRating?: number | null;
  thumbnail?: string | null;
};

export type TTableContextProvider = {
  children: React.ReactNode;
};
