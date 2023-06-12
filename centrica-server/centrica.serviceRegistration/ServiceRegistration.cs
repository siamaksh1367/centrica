using AutoMapper;
using centrica.datamodels;
using centrica.repository.Generic;
using centrica.repository.Repositories.Interfaces;
using centrica.services;
using centrica.services.Behavior;
using centrica.services.Commands;
using centrica.services.Queries;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Serilog;

namespace centrica.serviceRegistration
{
    public static class ServiceRegistration
    {
        public static IServiceCollection RegisterServices(this IServiceCollection servic)
        {
            IMapper mapper = AutoMapperConfig.Initialize();

            return servic
                .AddCors(options =>
                {
                    options.AddPolicy("AllowOrigin", builder =>
                    {
                        builder.AllowAnyOrigin()
                               .AllowAnyMethod()
                               .AllowAnyHeader();
                    });
                })
                .AddAutoMapper(typeof(centrica.services.AutoMapperConfig))
                .AddSingleton(mapper)
                .AddSingleton<DapperContext>()
                .AddTransient<IUnitOfWork, UnitOfWork>()
                .AddScoped<IDistrictRepository, DistrictRepository>()
                .AddScoped<IDistrictSalePersonRepository, DistrictSalePersonRepository>()
                .AddScoped<IProductRepository, ProductRepository>()
                .AddScoped<ISalePersonRepository, SalePersonRepository>()
                .AddScoped<IStoreRepository, StoreRepository>()
                .AddScoped<IProductStoreSellRepository, ProductStoreSellRepository>()
                .AddScoped<ITransitionPeriodRepository, TransitionPeriodRepository>()
                .AddScoped<ISalePersonProductRepository, SalePersonProductRepository>()
                .AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(ServiceRegistration).Assembly))
                .AddTransient<IRequestHandler<GetDistrictsQuery, IEnumerable<DistrictQuery>>, GetDistrictsQueryHandler>()
                .AddTransient<IRequestHandler<GetStoreByDistricIdQuery, IEnumerable<StoreQuery>>, GetStoreByDistricIdQueryHandler>()
                .AddTransient<IRequestHandler<GetSalePersonByDistirctIdQuery, IEnumerable<SalePersonQuery>>, GetSalePersonByDistirctIdQueryHandler>()
                .AddTransient<IRequestHandler<AddDistrictCommand>, AddDistrictCommandHandler>()
                .AddTransient<IRequestHandler<AddStoreCommand>, AddStoreCommandHandler>()
                .AddTransient<IRequestHandler<AddSalePersonCommand>, AddSalePersonCommandHandler>()
                .AddValidatorsFromAssembly(typeof(ServiceRegistration).Assembly)
                .AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationPipelineBehavior<,>))
                .AddLogging(builder =>
                {
                    builder.ClearProviders();
                    builder.AddSerilog();
                });



        }
    }
}