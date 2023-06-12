using centrica.datamodels;
using centrica.repository.Generic;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IProductStoreSellRepository : IGenericRepository<ProductStoreSellCommand, ProductStoreSellQuery> { }
    public class ProductStoreSellRepository : AbstractRepository<ProductStoreSellCommand, ProductStoreSellQuery>, IProductStoreSellRepository
    {
        public ProductStoreSellRepository(DapperContext context) : base(context)
        {
        }
    }
}

