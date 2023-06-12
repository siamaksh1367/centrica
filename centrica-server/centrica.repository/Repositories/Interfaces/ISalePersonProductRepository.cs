using centrica.datamodels;
using centrica.repository.Generic;

namespace centrica.repository.Repositories.Interfaces
{
    public interface ISalePersonProductRepository : IGenericRepository<SalePersonProductCommand, SalePersonProductQuery> { }
    public class SalePersonProductRepository : AbstractRepository<SalePersonProductCommand, SalePersonProductQuery>, ISalePersonProductRepository
    {
        public SalePersonProductRepository(DapperContext context) : base(context)
        {
        }
    }
}

