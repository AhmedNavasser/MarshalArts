using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using DataLayer.Infrastructure;
using DomainModel;

namespace DataLayer.Repositories
{
    public class ExhibitionRepository : IExhibitionRepository
    {
        private readonly IMartialArtsContext _context;
        private readonly IDbSet<Exhibition> _exhibitions;

        public ExhibitionRepository(IMartialArtsContext context)
        {
            _context = context;
            _exhibitions = _context.Set<Exhibition>();
        }
        public async Task<int> AddNewExhibition(Exhibition exhibition)
        {
            _exhibitions.Add(exhibition);
            return await _context.SaveChangesAsync();
        }

        public async Task<Exhibition> GetSpecificExhibition(int? id)
        {
            var exhibition = await _exhibitions.FirstOrDefaultAsync(ex => ex.Id == id);
            return exhibition;
        }

        public async Task<List<Exhibition>> GetAllExhibitionTitles()
        {
            var query = await _exhibitions.OrderByDescending(e => e.Id).ToListAsync();
            return query;
        }
    }
}
