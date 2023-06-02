using centrica.configurations;
using centrica.datamodels;
using centrica.repository.Generic;
using Microsoft.Extensions.Options;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IProductRepository : IGenericRepository<Product> { }
    public class ProductRepository : AbstractRepository<Product>, IProductRepository
    {
        public ProductRepository(IOptions<DataBaseConfiguration> config) : base(config)
        {
        }
    }
}
