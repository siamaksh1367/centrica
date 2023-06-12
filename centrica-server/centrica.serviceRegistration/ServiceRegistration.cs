﻿using AutoMapper;
using centrica.datamodels;
using centrica.repository.Generic;
using centrica.repository.Repositories.Interfaces;
using centrica.services;
using centrica.services.Commands;
using centrica.services.Queries;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

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
                .AddTransient<IRequestHandler<AddDistrictCommand>, AddDistrictCommandHandler>();
        }
    }
}