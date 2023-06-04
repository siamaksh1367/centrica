using centrica.configurations;
using centrica.datamodels;
using centrica.repository.Generic;
using Microsoft.Extensions.Options;

namespace centrica.repository.Repositories.Interfaces
{
    public interface ISalePersonProductRepository : IGenericRepository<SalePersonProduct> { }
    public class SalePersonProductRepository : AbstractRepository<SalePersonProduct>, ISalePersonProductRepository
    {
        public SalePersonProductRepository(IOptions<ConnectionStrings> config) : base(config)
        {
        }
    }
}

