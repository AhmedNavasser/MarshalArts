using System.Data.Entity;
using DomainModel;

namespace DataLayer.Infrastructure
{
    public class MartialArtsContext:DbContext,IMartialArtsContext
    {
        public DbSet<Exhibition> Exhibitions { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }
        
        public new IDbSet<TEntity> Set<TEntity>() where TEntity : class
        {
            return base.Set<TEntity>();
        }



    }
}
