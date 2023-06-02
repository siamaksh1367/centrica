using centrica.repository.Repositories.Interfaces;

namespace centrica.repository.Generic
{
    public interface IUnitOfWork
    {
        IDistrictRepository DistrictRepository { get; }
        IDistrictSalePersonRepository DistrictSalePersonRepository { get; }
        IProductRepository ProductRepository { get; }
        IProductStoreSellRepository ProductStoreSellRepository { get; }
        ISalePersonProductRepository SalePersonProductRepository { get; }
        ISalePersonRepository SalePersonRepository { get; }
        IStoreRepository StoreRepository { get; }
        ITransitionPeriodRepository TransitionPeriodRepository { get; }
    }
}
