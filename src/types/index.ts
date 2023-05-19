export type formOpenAI = {
  user_name?: string;
  prompt?: string;
  photo_url?: string;
};
export type formProps = {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
};

export type imageObject = {
  url_image?: string;
  b64_image?: string;
}

export type PostsType = {
  photo_url: string;
  title: string;
  user_name: string;
  _id: string;
};