import { axiosInstance } from "./config";

// 获取主页数据
export const getHomeMsgRequest = page => {
  // return axiosInstance.get(`/article?page=${page}`);
  return axiosInstance.get(`/article`,{
    params: {
      page
    }
  })
};

// 获取文章数据
export const getArticleRequest = aid => {
  return axiosInstance.get(`/article/${aid}`);
}

// 获取评论数据
export const getCommentsRequest = (pid, page) => {
  return axiosInstance.get(`/comments/${pid}`);
}

// 获取归档数据
export const getArchivesRequest = () => {
  return axiosInstance.get('/archive');
}

// 获取分类数据
export const getCateRequest = () => {
  return axiosInstance.get('/cate');
}

// 根据分类id筛选文章
export const getCateListRequest = (cid) => {
  return axiosInstance.get(`/cate/${cid}`)
}

// 删除文章
export const deleteArticleRequest = (id) => {
  return axiosInstance.delete(`/article/${id}`)
}

// 添加文章
export const AddArticleRequest = (title, content, cateid=11) => {
  console.log(title,content,cateid,'====')
  return axiosInstance.post(
    `/article`, {
      title,
      content,
      cateid
    }
  );
};

// 更新文章
export const UpdateArticleRequest = (id,title,content) => {
  return axiosInstance.patch(
    `/article/${id}`,{
      title:title,
      content:content
    }
  )
}