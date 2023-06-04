using centrica.datamodels;
using centrica.repository.Generic;
using centrica.repository.Repositories.Interfaces;
using centrica.services.Queries;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace centrica.serviceRegistration
{
    public static class ServiceRegistration
    {
        public static IServiceCollection RegisterServices(this IServiceCollection servic)
        {
            return servic.AddCors(options =>
            {
                options.AddPolicy("AllowOrigin", builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            })
                .AddTransient<IUnitOfWork, UnitOfWork>()
                .AddTransient<IDistrictRepository, DistrictRepository>()
                .AddTransient<IDistrictSalePersonRepository, DistrictSalePersonRepository>()
                .AddTransient<IProductRepository, ProductRepository>()
                .AddTransient<ISalePersonRepository, SalePersonRepository>()
                .AddTransient<IStoreRepository, StoreRepository>()
                .AddTransient<IProductStoreSellRepository, ProductStoreSellRepository>()
                .AddTransient<ITransitionPeriodRepository, TransitionPeriodRepository>()
                .AddTransient<ISalePersonProductRepository, SalePersonProductRepository>()
                .AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(ServiceRegistration).Assembly))
                .AddTransient<IRequestHandler<GetDistrictsQuery, IEnumerable<District>>, GetDistrictsQueryHandler>();
        }
    }
}