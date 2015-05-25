using System.Collections.Generic;
using System.Threading.Tasks;
using DomainModel;

namespace DataLayer.Repositories
{
    public interface IExhibitionRepository
    {
        Task<int> AddNewExhibition(Exhibition exhibition);
        Task<List<Exhibition>> GetAllExhibitionTitles();
        Task<Exhibition> GetSpecificExhibition(int? id);
    }
}
