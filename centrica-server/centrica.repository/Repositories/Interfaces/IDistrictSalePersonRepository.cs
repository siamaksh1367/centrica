using centrica.datamodels;
using centrica.repository.Generic;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IDistrictSalePersonRepository : IGenericRepository<DistrictSalePersonCommand, DistrictSalePersonQuery> { }
    public class DistrictSalePersonRepository : AbstractRepository<DistrictSalePersonCommand, DistrictSalePersonQuery>, IDistrictSalePersonRepository
    {
        public DistrictSalePersonRepository(DapperContext context) : base(context)
        {
        }
    }
}
