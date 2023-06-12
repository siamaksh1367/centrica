using centrica.datamodels;
using centrica.repository.Generic;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IStoreRepository : IGenericRepository<StoreCommand, StoreQuery> { }
    public class StoreRepository : AbstractRepository<StoreCommand, StoreQuery>, IStoreRepository
    {
        public StoreRepository(DapperContext context) : base(context)
        {
        }
    }
}
