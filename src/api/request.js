import { axiosInstance } from "./config";

// 获取主页数据
export const getHomeMsgRequest = page => {
  return axiosInstance.get(`/index/homemsg?page=${page}`);
};

// 获取文章数据
export const getArticleRequest = aid => {
  return axiosInstance.get(`/index/article?id=${aid}`);
}

// 获取评论数据
export const getCommentsRequest = (pid, page) => {
  return axiosInstance.get(`/index/comments?pid=${pid}&page=${page}`);
}

// 获取归档数据
export const getArchivesRequest = () => {
  return axiosInstance.get('/index/archive');
}

// 获取分类数据
export const getCateRequest = () => {
  return axiosInstance.get('/index/cate');
}

// 根据分类id筛选文章
export const getCateListRequest = (cid) => {
  return axiosInstance.get(`/index/catelist?cid=${cid}`)
}

// 删除文章
export const deleteArticleRequest = (id) => {
  return axiosInstance.get(`/index/deleteArticle?id=${id}`)
}

// 添加文章
export const AddArticleRequest = (title, content) => {
  return axiosInstance.post(
    `/index/addArticle`, {
      title: title,
      content: content
    }
  );
};

// 更新文章
export const UpdateArticleRequest = (id,title,content) => {
  return axiosInstance.post(
    `/index/updateArticle`,{
      id:id,
      title:title,
      content:content
    }
  )
}