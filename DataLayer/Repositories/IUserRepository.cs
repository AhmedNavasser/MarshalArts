using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DomainModel;

namespace DataLayer.Repositories
{
    public interface IUserRepository
    {
        Task<User> GetUserAsync(string userName, string password);
        int AddNewUser(User user);
        User FindUser(string userName);
    }
}
