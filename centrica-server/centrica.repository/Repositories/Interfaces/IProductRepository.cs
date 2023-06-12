using centrica.datamodels;
using centrica.repository.Generic;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IProductRepository : IGenericRepository<ProductCommand, ProductQuery> { }
    public class ProductRepository : AbstractRepository<ProductCommand, ProductQuery>, IProductRepository
    {
        public ProductRepository(DapperContext context) : base(context)
        {
        }
    }
}
