using centrica.configurations;
using centrica.datamodels;
using centrica.repository.Generic;
using Microsoft.Extensions.Options;

namespace centrica.repository.Repositories.Interfaces
{
    public interface IStoreRepository : IGenericRepository<Store> { }
    public class StoreRepository : AbstractRepository<Store>, IStoreRepository
    {
        public StoreRepository(IOptions<ConnectionStrings> config) : base(config)
        {
        }
    }
}
