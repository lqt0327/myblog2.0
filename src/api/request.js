import { axiosInstance } from "./config";

export const getHomeMsgRequest = page => {
  return axiosInstance.get(`/index/homemsg?page=${page}`);
};

export const getArticleRequest = aid => {
  return axiosInstance.get(`/index/article?id=${aid}`);
}

export const AddArticleRequest = (title, content) => {
  return axiosInstance.post(
    `/index/addArticle`, {
      title: title,
      content: content
    }
  );
};