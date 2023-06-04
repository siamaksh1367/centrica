using centrica.configurations;
using centrica.datamodels;
using centrica.repository.Generic;
using Microsoft.Extensions.Options;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IProductStoreSellRepository : IGenericRepository<ProductStoreSell> { }
    public class ProductStoreSellRepository : AbstractRepository<ProductStoreSell>, IProductStoreSellRepository
    {
        public ProductStoreSellRepository(IOptions<ConnectionStrings> config) : base(config)
        {
        }
    }
}

