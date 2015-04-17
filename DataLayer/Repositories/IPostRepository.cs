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
    }
}
