using centrica.repository.Repositories.Interfaces;

namespace centrica.repository.Generic
{
    public class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(
            IDistrictRepository DistrictRepo,
            IDistrictSalePersonRepository districtSalePersonRepo,
            IProductRepository productRepo,
            ISalePersonRepository salePersonRepo,
            IStoreRepository storeRepo,
            IProductStoreSellRepository productStoreSellRepo,
            ISalePersonProductRepository salePersonProductRepo,
            ITransitionPeriodRepository transitionPeriodRepo)
        {
            DistrictRepository = DistrictRepo;
            DistrictSalePersonRepository = districtSalePersonRepo;
            ProductRepository = productRepo;
            SalePersonRepository = salePersonRepo;
            StoreRepository = storeRepo;
            ProductStoreSellRepository = productStoreSellRepo;
            SalePersonProductRepository = salePersonProductRepo;
            TransitionPeriodRepository = transitionPeriodRepo;
        }

        public IDistrictRepository DistrictRepository { get; }
        public IDistrictSalePersonRepository DistrictSalePersonRepository { get; }
        public IProductRepository ProductRepository { get; }
        public ISalePersonRepository SalePersonRepository { get; }
        public IStoreRepository StoreRepository { get; }
        public IProductStoreSellRepository ProductStoreSellRepository { get; }
        public ISalePersonProductRepository SalePersonProductRepository { get; }
        public ITransitionPeriodRepository TransitionPeriodRepository { get; }
    }
}
