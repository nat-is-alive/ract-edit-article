type AccessLevel = "read" | "write";

type ArticleProps = {
  heading: string;
  content: string;
  accessLevel: AccessLevel;
  isEditing: boolean;
};

export type { ArticleProps, AccessLevel };
