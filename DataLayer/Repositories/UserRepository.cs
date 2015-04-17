using System;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using DataLayer.Infrastructure;
using DomainModel;

namespace DataLayer.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly IMartialArtsContext _context;
        private readonly IDbSet<User> _users;

        public UserRepository(IMartialArtsContext context)
        {
            _context = context;
            _users = _context.Set<User>();
        }
        public  async Task<User> GetUserAsync(string userName, string password)
        {
            return await _users.FirstOrDefaultAsync(user => user.UserName.Equals(userName) && user.Password.Equals(password));
        }

        public int AddNewUser(User user)
        {
            _users.Add(user);
            return _context.SaveChanges();
        }

        public User FindUser(string userName)
        {
            throw new NotImplementedException();
        }
    }
}
