using centrica.datamodels;
using centrica.repository.Generic;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IDistrictRepository : IGenericRepository<DistrictCommand, DistrictQuery> { }
    public class DistrictRepository : AbstractRepository<DistrictCommand, DistrictQuery>, IDistrictRepository
    {
        public DistrictRepository(DapperContext context) : base(context)
        {
        }
    }
}
