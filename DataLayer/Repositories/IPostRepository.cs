using System.Collections.Generic;
using System.Threading.Tasks;
using DomainModel;

namespace DataLayer.Repositories
{
    public interface IPostRepository
    {
        Task<List<Post>> GetAllPostsAsync();
        Task<int> AddNewPostAsync(Post post);
        Post GetPost(int? id);
        void DeletePost(int? postId);
        Task<int> EditPost(int? postId,Post newPost);
        Task<List<Post>> GetAllPostsByTermAsync(string term);
    }
}
