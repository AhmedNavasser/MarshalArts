using System.Threading.Tasks;
using DomainModel;

namespace DataLayer.Repositories
{
    public interface IExhibitionRepository
    {
        Task<int> AddNewExhibition(Exhibition exhibition);
        Task<Exhibition> GetSpecificExhibition(int? id);
    }
}
