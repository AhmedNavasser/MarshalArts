using System.Threading.Tasks;

namespace MartialArts.Infrastructure
{
    public interface IAuthenticationProvider
    {
        Task<bool> Authenticate(string userName, string password);
    }
}