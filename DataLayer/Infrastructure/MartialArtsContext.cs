using System.Data.Entity;
using DomainModel;

namespace DataLayer.Infrastructure
{
    public class MartialArtsContext:DbContext,IMartialArtsContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Exhibition> Exhibitions { get; set; }
        public new IDbSet<TEntity> Set<TEntity>() where TEntity : class
        {
            return base.Set<TEntity>();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new ImageModelBuilder());
            base.OnModelCreating(modelBuilder);
        }
      
    }
}
