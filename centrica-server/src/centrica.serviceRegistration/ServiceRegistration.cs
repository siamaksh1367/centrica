using centrica.repository.Generic;
using centrica.repository.Repositories.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace centrica.serviceRegistration
{
    public static class ServiceRegistration
    {
        public static IServiceCollection RegisterServices(this IServiceCollection servic)
        {
            return servic.AddTransient<IUnitOfWork, UnitOfWork>()
                .AddTransient<IDistrictRepository, DistrictRepository>()
                .AddTransient<IDistrictSalePersonRepository, DistrictSalePersonRepository>()
                .AddTransient<IProductRepository, ProductRepository>()
                .AddTransient<IStoreRepository, StoreRepository>()
                .AddTransient<ISalePersonRepository, SalePersonRepository>()
                .AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(ServiceRegistration).Assembly));
        }
    }
}