using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using DataLayer.Infrastructure;
using DomainModel;

namespace DataLayer.Repositories
{
    public class PostRepository : IDisposable, IPostRepository
    {
        private readonly IMartialArtsContext _context;
        private readonly IDbSet<Post> _posts;
        public PostRepository(IMartialArtsContext context)
        {
            _context = context;
            _posts = _context.Set<Post>();
        }

        public void GetLocalData()
        {
            _posts.Load();
        }

        public async Task<List<Post>> GetAllPostsAsync()
        {
            return await _posts.OrderByDescending(p => p.PostId).ToListAsync();
        }

        public Post GetPost(int? id)
        {
            GetLocalData();
            return _posts.Local.FirstOrDefault(p => p.PostId == id);
        }

        public async Task<int> AddNewPostAsync(Post post)
        {
            _posts.Add(post);
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }


        public void DeletePost(int? postId)
        {
            var postToRemove = _posts.FirstOrDefault(p => p.PostId == postId);
            _posts.Remove(postToRemove);
            _context.SaveChanges();
        }

        public async Task<int> EditPost (int? postId)
        {
            var postToUpdate = _posts.FirstOrDefault(p => p.PostId == postId);
            _context.Entry(postToUpdate).State = EntityState.Modified;
            return await _context.SaveChangesAsync();
        }

    }
}
