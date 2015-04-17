using System.Data.Entity;
using DataLayer.Infrastructure;
using DomainModel;

namespace DataLayer
{
    public class MartialArtsContext:DbContext,IMartialArtsContext
    {
        public new IDbSet<TEntity> Set<TEntity>() where TEntity : class
        {
            return base.Set<TEntity>();
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; } 
    }
}
