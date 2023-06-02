using centrica.configurations;
using centrica.datamodels;
using centrica.repository.Generic;
using Microsoft.Extensions.Options;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IDistrictSalePersonRepository : IGenericRepository<DistrictSalePerson> { }
    public class DistrictSalePersonRepository : AbstractRepository<DistrictSalePerson>, IDistrictSalePersonRepository
    {
        public DistrictSalePersonRepository(IOptions<DataBaseConfiguration> config) : base(config)
        {
        }
    }
}
