using centrica.configurations;
using centrica.datamodels;
using centrica.repository.Generic;
using Microsoft.Extensions.Options;

namespace centrica.repository.Repositories.Interfaces
{
    public interface ISalePersonRepository : IGenericRepository<SalePerson> { }
    public class SalePersonRepository : AbstractRepository<SalePerson>, ISalePersonRepository
    {
        public SalePersonRepository(IOptions<ConnectionStrings> config) : base(config)
        {
        }
    }
}

