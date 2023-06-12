using centrica.datamodels;
using centrica.repository.Generic;

namespace centrica.repository.Repositories.Interfaces
{
    public interface ISalePersonRepository : IGenericRepository<SalePersonCommand, SalePersonQuery> { }
    public class SalePersonRepository : AbstractRepository<SalePersonCommand, SalePersonQuery>, ISalePersonRepository
    {
        public SalePersonRepository(DapperContext context) : base(context)
        {
        }
    }
}

