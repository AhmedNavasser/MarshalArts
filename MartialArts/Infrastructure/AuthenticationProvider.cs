using System.Threading.Tasks;
using System.Web.Security;
using DataLayer.Repositories;

namespace MartialArts.Infrastructure
{
    public class AuthenticationProvider : IAuthenticationProvider
    {
        private readonly IUserRepository _userRepository;

        public AuthenticationProvider(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<bool> Authenticate(string userName, string password)
        {
            var userInfo = await _userRepository.GetUserAsync(userName, password);

            if (userInfo == null) return false;

            FormsAuthentication.SetAuthCookie(userName, false);
            return true;
        }
    }
}